const express = require('express');
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware'); // À créer pour vérifier si l'utilisateur est administrateur

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', authMiddleware.authenticate, adminMiddleware, productController.createProduct);
router.put('/:id', authMiddleware.authenticate, adminMiddleware, productController.updateProduct);
router.delete('/:id', authMiddleware.authenticate, adminMiddleware, productController.deleteProduct);

module.exports = router;
