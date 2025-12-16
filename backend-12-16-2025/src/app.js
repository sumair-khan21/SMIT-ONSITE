require('dotenv').config();  
const {connectDB} = require('./config/database');
const express = require('express');
const {User} = require('./model/user');
const validator = require('validator');
const bcrypt = require('bcrypt');
const app = express();  
app.use(express.json());






app.get('/', (req, res)=>{
    res.send("Welcome to the User Management API");
})


app.post('/signup', async (req, res)=>{
    try {
        const { name, email, password, gender, age, skills, about, photoUrl } = req.body;
        //step 1
        if(!name || !email || !password || !gender || !age){
            throw new Error('All fields are required');
        }else if(!validator.isEmail(email)){
            throw new Error('Invalid email format');
        }else if(!validator.isStrongPassword(password)){
            throw new Error('Password is not strong enough');
        }

        //step 2: hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name, 
            email, 
            password: hashedPassword,
            age,
            gender,
            skills, 
            about, 
            photoUrl 
        })

        await user.save();
        res.status(201).json({ message: 'User created successfully', user });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})



// login api


app.post('/login', async (req, res)=>{
    try {
        const {email, password} = req.body;
        if(!validator.isEmail(email)){
            throw new Error('Invalid email format');
        }else if(!validator.isStrongPassword(password)){
            throw new Error('Password is not strong enough');
        }

        const user = await User.findOne({email});
        if(!user){
            throw new Error('Invalid email or password');
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            throw new Error('Invalid email or password');
        }

        res.status(200).json({message: 'Login successful', user});

    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

// Connect to Database
connectDB().then(()=>{
    console.log("Database connected successfully !");

    app.listen(3000, ()=>{
        console.log("Server is running on port 3000");
    })
}).catch((err)=>{
    console.log("Database connection failed", err);
});


