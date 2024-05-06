const apiService = require('../services/apiService');

exports.register = async (req, res) => {
    try {
        const userData = {
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            admin: false 
        };

        const newUser = await apiService.createUser(userData);
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        if (error.response && error.response.status === 400) {
            res.status(400).send('Bad request due to invalid input');
        } else {
            res.status(500).send('Server error');
        }
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await apiService.loginUser(email, password);
        res.json(user);
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Server error');
    }
};

exports.getUserProfile = async (req, res) => {
    try {
        const user = await apiService.getUserById(req.user.id);
        res.json(user);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).send('Server error');
    }
};

exports.updateUserProfile = async (req, res) => {
    try {
        const updatedUser = await apiService.updateUser(req.user.id, req.body);
        res.json({ message: 'User profile updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user profile:', error);
        if (error.response && error.response.status === 400) {
            res.status(400).send('Bad request');
        } else {
            res.status(500).send('Server error');
        }
    }
};

exports.deleteUserProfile = async (req, res) => {
    try {
        await apiService.deleteUser(req.user.id);
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting user profile:', error);
        res.status(500).send('Server error');
    }
};
