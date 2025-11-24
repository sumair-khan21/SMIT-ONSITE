const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


const products = [
    {
        id: 1,
        name: 'Product 1',
        description: "This is product 1",
    },
    {
        id: 2,
        name: 'Product 2',
        description: "This is product 2",
    },
]

// get all products
app.get('/products', (req, res)=>{
    try {
        // res.json({
        //     message: "Products found",
        //     products
        // })

        res.send(products) 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        })
        
    }
})

// get single product
app.get('/products/:id', (req, res)=>{
    const {id} = req.params
    try {
        const product = products.find((product)=>product.id === Number(id))
        if(!product){
            return res.status(404).json({
                message: "Product not found"
            })
        }else{
            res.json({
                message: "Product found",
                product
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        })
        
    }
})

// add new product
app.post('/products', (req, res)=>{
    try {
        const { name , description }= req.body;
        const newProduct = {
            id: products.length + 1,
            name,
            description
        }
        products.push(newProduct)
        res.status(201).json({
            message: "Product added successfully",
            products
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
})


// update product
app.put('/products/:id', (req, res)=>{
    try {
        const {id} = req.params;
        const {name , description} = req.body;
        const product = products.find((product)=> product.id === Number(id))
        if(!product){
            return res.status(404).json({
                message: "Product not found"
            })
        }
        if(name){
            product.name = name
        }
        if(description){
            product.description = description
        }
        res.json({
            message: "Product updated successfully",
            products
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }

})

// delete product
app.delete('/products/:id', (req, res)=>{
    try {
        const {id} = req.params;
        const productIndex = products.findIndex((product)=> product.id === Number(id))

        if(productIndex === -1){
            return res.status(404).json({
                message: "product not found"
            })
        }
        products.splice(productIndex, 1)
        res.json({
            message: "Product deleted successfully",
            products
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
})


app.listen(3000, ()=>{
    console.log("Server running");
    
})