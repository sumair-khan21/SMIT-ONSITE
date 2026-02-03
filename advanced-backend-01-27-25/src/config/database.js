const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.DbUserName}:${process.env.DbPassword}@cluster0.51l7ww2.mongodb.net/${process.env.DbName}?authSource=admin`
  );
};

module.exports = connectDB;
