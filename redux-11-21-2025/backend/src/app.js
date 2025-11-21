const express = require('express')
const app = express()
app.use(express.json())



const products = [
    {
        id: 1,
        name: "Prodcuts",
        description: "ABC",

    }
]




app.get('/products', (req, res)=>{
    // res.send("Get All data")
    try {
        const {id}  
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})



app.listen(3000, ()=>{
    console.log("Server running");
    
})