const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");


// Connection URL
const url = 'mongodb+srv://admin:<db_password>@crudapp.dung1m9.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});