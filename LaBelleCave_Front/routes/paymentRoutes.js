const express = require('express');
const paymentController = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware.authenticate, paymentController.getAllPayments);
router.get('/:id', authMiddleware.authenticate, paymentController.getPaymentById);
router.post('/', authMiddleware.authenticate, paymentController.createPayment);
router.put('/:id', authMiddleware.authenticate, paymentController.updatePayment);
router.delete('/:id', authMiddleware.authenticate, paymentController.deletePayment);

module.exports = router;
