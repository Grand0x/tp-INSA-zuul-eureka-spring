const apiService = require('../services/apiService');

exports.getAllPayments = async (req, res) => {
    try {
        const payments = await apiService.getAllPayments(req.user.id);
        res.json(payments);
    } catch (error) {
        console.error('Error fetching payments:', error);
        res.status(500).send('Server error');
    }
};

exports.getPaymentById = async (req, res) => {
    try {
        const payment = await apiService.getPaymentById(req.params.id);
        if (!payment) {
            return res.status(404).send('Payment not found');
        }
        res.json(payment);
    } catch (error) {
        console.error('Error fetching payment:', error);
        res.status(500).send('Server error');
    }
};

exports.createPayment = async (req, res) => {
    try {
        const newPayment = await apiService.createPayment(req.user.id, req.body);
        res.status(201).json(newPayment);
    } catch (error) {
        console.error('Error creating payment:', error);
        if (error.response && error.response.status === 400) {
            res.status(400).send('Bad request');
        } else {
            res.status(500).send('Server error');
        }
    }
};

exports.updatePayment = async (req, res) => {
    try {
        const updatedPayment = await apiService.updatePayment(req.params.id, req.body);
        res.json({ message: 'Payment updated successfully', payment: updatedPayment });
    } catch (error) {
        console.error('Error updating payment:', error);
        if (error.response && error.response.status === 404) {
            res.status(404).send('Payment not found');
        } else if (error.response && error.response.status === 400) {
            res.status(400).send('Bad request');
        } else {
            res.status(500).send('Server error');
        }
    }
};

exports.deletePayment = async (req, res) => {
    try {
        await apiService.deletePayment(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting payment:', error);
        if (error.response && error.response.status === 404) {
            res.status(404).send('Payment not found');
        } else {
            res.status(500).send('Server error');
        }
    }
};
