const express = require("express");
const app = express();
const { MongoClient, ObjectId } = require("mongodb");
app.use(express.json());

// Mongoose
const { connectDB } = require("./config/database");
const { userModal } = require("./model/userSchema");





// ============================== this is for mongodb ==============================
// Connection URL
// const url = 'mongodb+srv://first-database:Admin%40123@cluster.chstfkz.mongodb.net/';
// const client = new MongoClient(url);

// Database Name
// const dbName = 'first-database';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('first-data');

// const insertOne = await collection.insertOne({ name: 'ubaid', age: 20 });
// console.log("insertOne", insertOne);


// const insertMany = await collection.insertMany([
//   { name: 'ubaid', age: 20 },
//   { name: 'sumair', age: 20 },
//   { name: 'ali', age: 20 },
// ]);
// console.log("insertMany", insertMany);


// fetch data
// const cursor = collection.find({});
// const data = await collection.find({}).toArray();
// console.log("data", data);

// single data
// const data = await collection.findOne({ name: 'ubaid' });
// console.log("data", data);

// single data by id
// const data = await collection.findOne({ _id: new ObjectId("6931ab713770e8f46509350c") });
// console.log("data", data);


// update data
// const data = await collection.updateOne({ name: 'ubaid'}, { $set: { age: 21, name: 'ubaid22222' }})
// console.log("data", data);

// update by id 
// const data = await collection.updateOne({ _id: new ObjectId("6931ab713770e8f46509350c") }, { $set: { age: 21, name: 'ok' }})
// console.log("data", data);

// delete data
// const data = await collection.deleteOne({ name: 'ubaid' })
// console.log("data", data);

//delete by id
// const data = await collection.deleteOne({ _id: new ObjectId("6931ac3ccd586d13d57f8a2b") })
// console.log("data", data);


//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());






//========================================== this is mongoose part ==========================================
//create user
app.post('/create-user', async (req, res) => {
  try {
    const { name, email, city, age } = req.body;
    const user = new userModal({ name, email, city, age })
    await user.save();
    res.status(200).send({
      message: "User created successfully",
      user
    })
  } catch (error) {
    res.status(500).send({
      message: "User not created",
      error
    })
  }
})


// get data 
app.get('/get-users', async (req, res) => {
  try {
    console.log('Collection name:', userModal.collection.name);
    const users = await userModal.find({})
    console.log('Found users:', users.length);
    res.status(200).send({
      message: "Users fetched successfully",
      users
    })
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send({
      message: "Users not fetched",
      error
    })
  }
})

// update data
app.put('/update-user/:id', async (req, res) => {
  try {
    const { name, city, age, email } = req.body;
    const id = req.params.id;
    const user = await userModal.findByIdAndUpdate(id, { name, city, age, email }, { new: true })
    res.status(200).send({
      message: "User updated successfully",
      user
    })
  } catch (error) {
    res.status(500).send({
      message: "User not updated",
      error
    })
  }
})


//delete data
app.delete('/delete-user/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModal.findByIdAndDelete(id)
    res.status(200).send({
      message: "User deleted successfully",
      user
    })
  } catch (error) {
    res.status(500).send({
      message: "User not deleted",
      error
    })
  }
})
























// mongoose connection - app.listen goes INSIDE, routes stay OUTSIDE
connectDB().then(() => {
  console.log('Connected successfully to Database using Mongoose');


  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });


}).catch((err) => {
  console.log('Error connecting to Database', err);
})
