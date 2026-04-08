const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const route = express.Router();

module.exports = (app) => {
    app.use('/users', route);

    route.get('/', async (request, response) => {
        const users = await User.find();
        return response.status(200).json(users);
    });

    route.get('/:id', async (request, response) => {
        const id = request.params.id;
        const user = await User.findById(id);
        return response.status(200).json(user);
    });

    route.put('/:id', async (request, response) => {
        const id = request.params.id;
        const { username, password } = request.body;
        const updateData = {};

        if (username) updateData.username = username;
        if (password) {
            updateData.password = await bcrypt.hash(password, 10); //
        }

        const user = await User.findByIdAndUpdate(id, updateData, { new: true });
        return response.status(200).json(user);
    });

    route.delete('/:id', async (request, response) => {
        const id = request.params.id;
        const user = await User.findByIdAndDelete(id);
        return response.status(200).json(user);
    });
}