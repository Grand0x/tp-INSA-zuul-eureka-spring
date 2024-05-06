const express = require('express');
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware.authenticate, orderController.getAllOrders);
router.get('/:id', authMiddleware.authenticate, orderController.getOrderById);
router.post('/', authMiddleware.authenticate, orderController.createOrder);
router.put('/:id', authMiddleware.authenticate, orderController.updateOrder);
router.delete('/:id', authMiddleware.authenticate, orderController.deleteOrder);

module.exports = router;
