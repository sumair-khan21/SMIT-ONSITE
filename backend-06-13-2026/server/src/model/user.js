const mongoose = require('mongoose');
const {Schema} = mongoose;
const validator = require('validator');

const ProductSchema = new Schema({
  name:{
        type: String,
        required: [ true, "Name is required" ],
        trim: true,
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [50, "Name must be at most 50 characters long"],
    },
    description: {
        type: String,
        required: [ true, "Description is required" ],
        trim: true,
        minlength: [10, "Description must be at least 10 characters long"],
        maxlength: [500, "Description must be at most 500 characters long"],
    },
    price: {
        type: Number,
        required: [ true, "Price is required" ],
        min: [true, "Price must be a positive number"]
    },
    category: {
        type: String,
        required: [ true, "Category is required" ],
        trim: true,
    },
    stock: {
        type: Boolean,
        default: true,
    },
    imageUrl: {
        type: String,
        
    }

},

)

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};