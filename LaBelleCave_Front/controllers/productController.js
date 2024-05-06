const apiService = require('../services/apiService');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await apiService.getProducts();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Server error');
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await apiService.getProductById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).send('Server error');
    }
};

exports.createProduct = async (req, res) => {
    try {
        const newProduct = await apiService.createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        if (error.response && error.response.status === 400) {
            res.status(400).send('Bad request');
        } else {
            res.status(500).send('Server error');
        }
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await apiService.updateProduct(req.params.id, req.body);
        res.json({ message: 'Product updated successfully', updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        if (error.response && error.response.status === 404) {
            res.status(404).send('Product not found');
        } else if (error.response && error.response.status === 400) {
            res.status(400).send('Bad request');
        } else {
            res.status(500).send('Server error');
        }
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        await apiService.deleteProduct(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting product:', error);
        if (error.response && error.response.status === 404) {
            res.status(404).send('Product not found');
        } else {
            res.status(500).send('Server error');
        }
    }
};
