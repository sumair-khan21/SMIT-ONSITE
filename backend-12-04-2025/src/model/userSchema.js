const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
},
    {
        collection: 'first-data'
    }
)

const userModal = mongoose.model('first-data', userSchema)

module.exports = {
    userModal
}