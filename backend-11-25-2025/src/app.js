const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });


// use practice
app.use('/users', 
    (req, res, next) => {
    console.log("router handler 1");
    next();
    res.send("Users");
},
(req, res, next) => {
    console.log("router handler 2");
    next();
    // res.send("Users 2");
},
(req, res) => {
    console.log("router handler 3");
    // res.send("Users 3");
})

// TCP connection close ho jayega jab response send ho jayega first per or sec bhi hoga toh error aayega






app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 