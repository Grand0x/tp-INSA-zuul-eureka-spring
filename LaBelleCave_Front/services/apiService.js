const axios = require('axios');

const userApiClient = axios.create({
    baseURL: 'https://labellecave-user.robin-joseph.fr/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

const productApiClient = axios.create({
    baseURL: 'https://labellecave-product.robin-joseph.fr/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

const getProducts = async () => {
    try {
        const response = await productApiClient.get('/products');
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getProductById = async (id) => {
    try {
        const response = await productApiClient.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const createProduct = async (productData) => {
    try {
        const response = await productApiClient.post('/products/create', productData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updateProduct = async (id, productData) => {
    try {
        const response = await productApiClient.put(`/products/${id}`, productData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteProduct = async (id) => {
    try {
        const response = await productApiClient.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getAllOrders = async () => {
    try {
        const response = await userApiClient.get('/orders');
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getOrderById = async (id) => {
    try {
        const response = await userApiClient.get(`/orders/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const createOrder = async (orderData) => {
    try {
        const response = await userApiClient.post('/orders', orderData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updateOrder = async (id, orderData) => {
    try {
        const response = await userApiClient.put(`/orders/${id}`, orderData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteOrder = async (id) => {
    try {
        const response = await userApiClient.delete(`/orders/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getAllPayments = async () => {
    try {
        const response = await userApiClient.get('/payments');
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getPaymentById = async (id) => {
    try {
        const response = await userApiClient.get(`/payments/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const createPayment = async (paymentData) => {
    try {
        const response = await userApiClient.post('/payments', paymentData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updatePayment = async (id, paymentData) => {
    try {
        const response = await userApiClient.put(`/payments/${id}`, paymentData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deletePayment = async (id) => {
    try {
        const response = await userApiClient.delete(`/payments/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const createUser = async (userData) => {
    try {
        const response = await userApiClient.post('/users/register', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


const loginUser = async (email, password) => {
    try {
        const url = `https://labellecave-user.robin-joseph.fr/api/users/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
        const response = await axios.post(url);
        return response.data;
    } catch (error) {
        console.error('Failed to login:', error);
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const response = await userApiClient.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updateUser = async (id, userData) => {
    try {
        const response = await userApiClient.put(`/users/${id}`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (id) => {
    try {
        const response = await userApiClient.delete(`/users/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    getAllPayments,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment,
    createUser,
    loginUser,
    getUserById,
    updateUser,
    deleteUser
};
