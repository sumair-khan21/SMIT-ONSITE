const express = require('express');
const connectDB = require('./config/database');
const {User} = require('./model/user');
const app = express();
require('dotenv').config();
const { validateSignup, validateLogin } = require("./lib/utils");
const bcrypt = require('bcrypt');
const cookieParser =  require('cookie-parser');
const jwt = require('jsonwebtoken');
app.use(cookieParser());
app.use(express.json())





const PORT = process.env.PORT || 3000;


app.post('/signup', async (req, res)=>{
    try {
        const {name, email, password, gender, age} = req.body;
        validateSignup(req);
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User({
            name, 
            email,
            password: hashedPassword,
            gender,
            age
        })
        await user.save();  
        res.status(201).send({message: "User registered successfully", data: user})
    } catch (error) {
            res.status(400).json({ message: "Bad Request", error: error.message })
    }
})


app.post('/login', async (req, res)=>{
    try {
        const {email, password} = req.body;
        validateLogin(req);
        const user = await User.findOne({email});
        if(!user){
            throw new Error("Invalid email or password")
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            throw new Error("Invalid email or password")
        }
        // res.cookie("id", user._id, {  expires: new Date(Date.now() + 60 * 1000),  })
        //jwt token can be added here for further security
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET || "secretkey", {expiresIn: '1h'});
        res.cookie("token", token, { httpOnly: true, expires: new Date(Date.now() + 60 * 60 * 1000) }) // 1 hour expiry
        res.status(200).json({message: "Login successful", data: user, token})
        // res.status(200).json({message: "Login successful", data: user, token})
    } catch (error) {
        res.status(400).json({ message: "Bad Request", error: error.message })
    }
})




app.post('/logout', (req, res) => {
    
    // res.cookie("id", "", {
    //     expires: new Date(Date.now() * 0), // Expire the cookie immediately
    // })
    // res.send("Logout Succuessful")
})


app.get('/profile', async (req, res)=>{
    try {
        // const authHeader = req.headers.authorization;
        // if (!authHeader) {
        //     throw new Error("Unauthorized Access");
        // }

        // const token = authHeader.split(' ')[1];
        // if (!token) {
        //     throw new Error("Unauthorized Access");
        // }

        // const token = req.headers.authorization.split(' ')[1];
        // console.log("token ----------> ", token);


        const token = req.cookies.token;
        if (!token) {
            throw new Error("Unauthorized Access");
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey");
        const userId = decoded.id;

        const user = await User.findById(userId).select('-password');
        if (!user) {
            throw new Error("User not found");
        }

        res.status(200).json({ message: "User profile fetched successfully", data: user });
    } catch (error) {
                res.status(401).json({ message: "Unauthorized Access", error: error.message })
    }
    // try {

    //     const {id} = req.token;
    //     if(!id){
    //         throw new Error("Unauthorized Access")
    //     }
    //     const user = await User.findById(id);
    //     res.status(200).json({message: "User profile fetched successfully", data: user})
    // } catch (error) {
    //     res.status(401).json({ message: "Unauthorized Access", error: error.message })
    // }
})








connectDB().then(()=>{
        console.log("Database connected successfully !");
    app.listen(PORT, ()=>{
        console.log(`Server is listening on port ${PORT}`);
    })
}).catch((err) => {
    console.log("Database connection failed", err);
});