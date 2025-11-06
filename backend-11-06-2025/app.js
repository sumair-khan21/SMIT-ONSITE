// // console.log(this);
// // console.log(globalThis);

// const {greetFn, msg} = require('./greeting')


// let a = 10
// let b = 20

// function sum(x,y){
//     return x + y;
// }
// console.log(sum(a,b));
// console.log(msg);



// greetFn("Sumair");


// import { greetFn, msg  } from  "./greeting.js";

// let a = 10
// let b = 20

// console.log(msg);
// greetFn("Owais Jeeva")



// (
//     function(){
//         console.log("This is IIFF functions");
        
//     }
// )()



// const calculate = require('./calculate');
// let a = 20;
// let b = 10;

// console.log("Addition", calculate.add(a,b));
// console.log("divide", calculate.divide(a,b));
// console.log("multiply", calculate.multiply(a,b));



const express = require('express')
const data = require('./data.json')
const app = express()
// console.log(app);


app.get('/', (req, res)=>{
    // res.send("Hello from express server");
        res.send(data);

})

app.listen(8000, ()=>{
    console.log("Server is running at 3000 port");
    
})
