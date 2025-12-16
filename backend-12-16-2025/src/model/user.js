const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');


const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [50, 'Name must be at most 50 characters long'],
        trim: true,
        lowercase: true
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        // validator check a@gmail.com is correct but a , 12, abc@com is not correct
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email format');
            }
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        // 8 character long
        // at least one uppercase letter, one lowercase letter, one number, and one special character
        validator(value){
            if(!validator.isStrongPassword(value)){
                throw new Error('Password is not strong enough');
            }
        }
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        lowercase: true,
        validate(value){
            if(!['male', 'female', 'other'].includes(value)){
                throw new Error('Gender must be male, female, or other');
            }
        }
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [18, 'Age must be at least 18'],
        max: [80, 'Age must be at most 90'],
    },
    about: {
        type: String,
        trim: true,
        lowercase: true,
        default: 'No description provided',
        maxlength: [500, 'About section can be at most 500 characters long'],
        
    },
    skills: {
        type: [String],
        validate(value){
            if(value.length === 0){
                throw new Error('At least one skill is required');
            }
        }
    },
    photoUrl: {
        type: String,
        default: "https://www.example.com/default-photo.jpg",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error('Invalid URL format for photoUrl');
            }
        }
    },
},
   {
    collection: "users",    
    timestamps: true        
  }
)


const User = mongoose.model('User', userSchema);
module.exports = {
    User
}