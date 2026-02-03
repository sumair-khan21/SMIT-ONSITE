const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DbUserName}:${process.env.DbPassword}@cluster.chstfkz.mongodb.net/${process.env.DbName}`)
}


module.exports = connectDB;