//"express": "^5.1.0" 
// 5 Major agr pora artitechture change hoga toh ye version change hoga 
// 1 Minor ye jb change hoga jb koi esa bagair kuch change kiye new features add hote hain
// 0 Patch jb bhi koi chota change ayega so ye use hoga jb bhikoi bug fix hota hy
// package json m ek saign hota ^ ye caret hota hy kabi bhi is patch ya minor m change aye toh auto update kr dega
// final version jo hota hy wo package lock json m hota hay sb se last version jo hoga wo lock package k ander update kr dega package json m update nhi karega
// dev dependencies 
// npm i -d means k dev dependencies m install hoti hy or jb ap server per deploy krte hain toh wo server per insatall nhi hoti
// tilde ~ kia krta hy?
// app.get('/', (req, res)=>{
// ye '/', route hy ye route handle hy or ye multiple route handle kr sakhta hy
// app.get('/', (req, res)=>{
//     res.send(data)
// })  

// client se server per datasend krna hy toh post



const express = require('express')
const app = express()
const port = 3000
const data = require('./data.json')
app.use(express.json())



const car = [
      {
      "id": "1",
      "make": "Toyota",
      "model": "Camry",
      "year": 2021,
      "color": "Silver",
      "engine": {
        "type": "Gasoline",
        "displacement": "2.5L",
        "horsepower": 203
      },
      "transmission": "Automatic",
      "mileage": 28500,
      "price": 24500,
      "features": [
        "Bluetooth",
        "Backup Camera",
        "Lane Assist",
        "Cruise Control"
      ],
      "owner": {
        "name": "John Doe",
        "contact": "john.doe@email.com"
      }
    },
]


app.get('/car', (req, res)=>{
    res.send(car)
})



app.post('/addCar', (req, res)=>{
    const data = req.body
    car.push(data)
    // res.send("data")
    res.send({
        message: "Data recived succesfully",
        car: true
    })
})




app.listen(port, ()=>{
    console.log('server is running on port 3000')
})

