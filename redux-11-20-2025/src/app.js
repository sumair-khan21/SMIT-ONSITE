const express = require("express");
const app = express();
const {UserAuthMiddleware, AdminAuthMiddleware} = require('./middleare/middleware')

// app.use('/test', (req, res)=>{
//     res.send("this is test route");
// })

// app.get("/", (req, res, next) => {
//     res.send("Hello World!");
//     next();
// },
// (req, res)=>{
//     console.log("2nd route handle");  
// }

// );


// app.use('/user', (req, res, next)=>{
//     console.log("This is middleware");
//     next()    
// })



// app.use('/user', (req, res, next)=>{
//     res.send("This is next route")
//     // next()    
// })


// ====================== ADMIN ROUTE ============================

app.use('/admin', AdminAuthMiddleware)




// ====================== USER ROUTE ============================
app.use('/user', UserAuthMiddleware)
// ====================== USER ROUTE ============================

app.use('/profile', UserAuthMiddleware,
    (req,res)=>{
        res.send("User Profile")
    }
)


// ====================== GET DATA ============================
app.use('/getAllData', UserAuthMiddleware,
    (req,res)=>{
        res.send("Get All Data")
    }
)



// ====================== DELETE DATA ============================
app.use('/deleteAllData', AdminAuthMiddleware,
    (req, res)=>{
    res.send("Delete All data route")
})


// ====================== UPDATE DATA ============================
app.use('/update', AdminAuthMiddleware,
    (req, res)=>{
   res.send("Update data")
})

// ====================== GET PRODUCT DATA ============================
app.use('/getProductData', UserAuthMiddleware,
    (req, res)=>{
   res.send("Get Product Data")
})


// ====================== BUY PRODUCT DATA ============================
app.use('/buyProductData', UserAuthMiddleware,
    (req, res)=>{
   res.send("Buy Product Data")
})



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});