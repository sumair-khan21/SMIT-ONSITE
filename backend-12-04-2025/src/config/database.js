const mongoose = require("mongoose");
const url = 'mongodb+srv://first-database:Admin%40123@cluster.chstfkz.mongodb.net/first-database';
const connectDB = async () =>{
    try {
        await mongoose.connect(url);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
} 


module.exports = {
    connectDB
}