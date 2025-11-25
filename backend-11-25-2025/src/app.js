const express = require("express");
const app = express();
// const {UserMiddleware, AdminMiddleware} = require('middleware')


// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });


// use practice
// app.use('/users', 
//     (req, res, next) => {
//     console.log("router handler 1");
//     next();
//     console.log("router handler 1 after");
//     res.send("Users");
// },
// (req, res, next) => {
//     console.log("router handler 2");
//     next();
//     // res.send("Users 2");
// },
// (req, res) => {
//     console.log("router handler 3");
//     // res.send("Users 3");
// })

// TCP connection close ho jayega jab response send ho jayega first per or sec bhi hoga toh error aayega


// middleware practice

// app.use('/getProducts', UserMiddleware,
//     // (req, res, next)=>{
//     //     // console.log("Middleware 1");
//     //     const token = 123;
//     //     const isAuthenticated = token === 123;
//     //     if(!isAuthenticated){
//     //         return res.send("Unauthorized");
//     //     }else{
//     //         next();
//     //     }
//     // },
    
//     (req, res) => {
//     res.send("Products");
// })

// app.use('/deleteProducts', AdminMiddleware,
//     // (req, res, next)=>{
//     //     // console.log("Middleware 1");
//     //     const token = 123;
//     //     const isAuthenticated = token === 123;
//     //     if(!isAuthenticated){
//     //         return res.send("Unauthorized");
//     //     }else{
//     //         next();
//     //     }
//     // },
//     (req, res) => {
//     res.send("Delete Products");
// })


//------------------------------------------------------------------------------

// app.use('/admin', AdminMiddleware)

// app.use('/getAllProducts', (req, res)=>{
//     res.send("Get All Products")
// })

// app.use('/deleteAllProducts', (req, res)=>{
//     res.send("Delete All Products")
// })

// app.use('/updateAllProducts', (req, res)=>{
//     res.send("Update All Products")
// })

// app.use('/', (req, res)=>{
//   res.send("Home")  
// })




//---------------------------------------------------------------------------------------------
const products = [
    {id: 1, name: "Cricket Bat", price: 1200, category: "cricket"},
    {id: 2, name: "Football", price: 800, category: "football"},
    {id: 3, name: "Patang (Kite)", price: 50, category: "patang"},
    {id: 4, name: "Cricket Ball", price: 200, category: "cricket"},
    {id: 5, name: "Football Shoes", price: 2500, category: "football"},
    {id: 6, name: "Kite String", price: 100, category: "patang"},
    {id: 7, name: "Wicket Set", price: 1500, category: "cricket"},
    {id: 8, name: "Shin Guards", price: 700, category: "football"},
    {id: 9, name: "Kite Reel", price: 300, category: "patang"},
    {id: 10, name: "Cricket Helmet", price: 1800, category: "cricket"},
    {id: 11, name: "Football Jersey", price: 900, category: "football"},
    {id: 12, name: "Designer Kite", price: 150, category: "patang"},
    {id: 13, name: "Cricket Pads", price: 1000, category: "cricket"},
    {id: 14, name: "Goalkeeper Gloves", price: 1200, category: "football"},
    {id: 15, name: "Small Kite", price: 30, category: "patang"},
    {id: 16, name: "Cricket Gloves", price: 600, category: "cricket"},
    {id: 17, name: "Football Socks", price: 150, category: "football"},
    {id: 18, name: "Large Kite", price: 200, category: "patang"},
    {id: 19, name: "Cricket Stumps", price: 400, category: "cricket"},
    {id: 20, name: "Football Pump", price: 250, category: "football"},
];

// query params

app.use('/products/:id', (req, res)=>{
    const {id, name} = req.params;
    const product = products.find((product) => product.id === Number(id));
    if(!product){
        return res.send("Product not found")
    }
    res.send(product)
})


// query params

app.use('/products', (req, res)=>{
    const {id, name} = req.query;
    console.log(id, name);
    
    const product = products.find((product) => product.id === Number(id));
    if(!product){
        return res.send("Product not found")
    }
    res.send(product)
}   )

// http://localhost:3000/productWithCategory?category=patang
app.use('/productWithCategory', (req, res)=>{
    const {category} = req.query;
    const product = products.filter((product) => product.category === category);
    if(product.length === 0){
        return res.send("Product not found")
    }
    res.send(product)
})

app.use('/products', (req, res)=>{
    res.send(products)
}   )
// app.use('/products/:id', (req, res)=>{
//     const {id} = req.params;
//     res.send(`Products ${id}`)
// })



















app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 