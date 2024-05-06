const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', [
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must be at least 6 characters long').isLength({ min: 6 })
], userController.register);

router.post('/login', userController.login);

router.get('/profile', authMiddleware.authenticate, userController.getUserProfile);

router.put('/profile', authMiddleware.authenticate, userController.updateUserProfile);

router.delete('/profile', authMiddleware.authenticate, userController.deleteUserProfile);

module.exports = router;
