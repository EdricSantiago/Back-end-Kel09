require('dotenv').config({ path: 'rei.env' });
const express = require('express');
const mongoose = require('mongoose');
const user = require('./models/userModel');
const transaction = require('./models/transaction');

const User = require('./models/authModel');
global.User = User;

const app = express();
app.use(express.json());
const port = 3100;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Database connected');

    require('./controllers/login');

    console.log('Script login.js selesai');
  })
  .catch(err => console.log(err));

app.get('/', (req,res) =>{
    res.send('Hello, world');
});

app.get('/about',(req,res)=>{
    res.send('About me...');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});