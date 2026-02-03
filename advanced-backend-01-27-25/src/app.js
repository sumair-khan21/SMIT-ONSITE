require('dotenv').config();
const connectDB = require('./config/database');
const express = require('express');
const {User} = require('./model/user');
const app = express();
// const { validateSignup, validateLogin } = require("./lib/utils");
const bcrypt = require('bcrypt');
const cookieParser =  require('cookie-parser');
const jwt = require('jsonwebtoken');
app.use(cookieParser());
app.use(express.json())





const PORT = process.env.PORT || 3000;


connectDB().then(()=>{
        console.log("Database connected successfully !");
    app.listen(PORT, ()=>{
        console.log(`Server is listening on port ${PORT}`);
    })
}).catch((err) => {
    console.log("Database connection failed", err);
});