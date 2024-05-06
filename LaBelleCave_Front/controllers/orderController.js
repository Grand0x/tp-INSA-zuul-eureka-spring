const apiService = require('../services/apiService');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await apiService.getAllOrders(req.user.id);
        res.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).send('Server error');
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await apiService.getOrderById(req.params.id);
        if (!order) {
            return res.status(404).send('Order not found');
        }
        res.json(order);
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).send('Server error');
    }
};

exports.createOrder = async (req, res) => {
    try {
        const newOrder = await apiService.createOrder(req.user.id, req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error creating order:', error);
        if (error.response && error.response.status === 400) {
            res.status(400).send('Bad request due to invalid input');
        } else {
            res.status(500).send('Server error');
        }
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await apiService.updateOrder(req.params.id, req.body);
        res.json({ message: 'Order updated successfully', order: updatedOrder });
    } catch (error) {
        console.error('Error updating order:', error);
        if (error.response && error.response.status === 404) {
            res.status(404).send('Order not found');
        } else if (error.response && error.response.status === 400) {
            res.status(400).send('Bad request');
        } else {
            res.status(500).send('Server error');
        }
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        await apiService.deleteOrder(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting order:', error);
        if (error.response && error.response.status === 404) {
            res.status(404).send('Order not found');
        } else {
            res.status(500).send('Server error');
        }
    }
};
