require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const port =3100;

app.get('/', (req,res) =>{
    res.send('Hello, world');
});

app.get('/about',(req,res)=>{
res.send('About me...');
});

app.listen(port, () => {
console.log(`App listening on port ${port}`);
});