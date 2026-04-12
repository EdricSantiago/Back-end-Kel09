const express = require('express');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const route = express.Router();

module.exports = (app) => {
    app.use('/users', route);

    route.get('/', async (request, response) => {
        try {
            const users = await User.find().select('-password');
            return response.status(200).json(users);
        } catch (err) {
            return response.status(500).json({ message: err.message });
        }
    });

    route.get('/:id', async (request, response) => {
        try {
            const id = request.params.id;
            const user = await User.findById(id).select('-password');
            if (!user) return response.status(404).json({ message: "User not found" });
            return response.status(200).json(user);
        } catch (err) {
            return response.status(500).json({ message: err.message });
        }
    });

    route.put('/:id', async (request, response) => {
        const id = request.params.id;
        const { username, password } = request.body;

        try {
            const user = await User.findById(id);
            if (!user) return response.status(404).json({ message: "User not found" });

            if (username) user.username = username;
            if (password) {
                user.password = await bcrypt.hash(password, 10);
            }

            await user.save();

            const result = user.toObject();
            delete result.password;

            return response.status(200).json(result);
        } catch (err) {
            return response.status(500).json({ message: err.message });
        }
    });

    route.delete('/:id', async (request, response) => {
        try {
            const id = request.params.id;
            const user = await User.findByIdAndDelete(id).select('-password');
            if (!user) return response.status(404).json({ message: "User not found" });
            return response.status(200).json({ message: "User deleted successfully" });
        } catch (err) {
            return response.status(500).json({ message: err.message });
        }
    });
};
