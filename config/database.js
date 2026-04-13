const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async() => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URI
        );
        console.log("MongoDB terhubung 🍃");
    }catch (error){
        console.log("MongoDB tidak terhubung ❌:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB