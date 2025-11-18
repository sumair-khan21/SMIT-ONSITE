const express = require('express')
const app = express()
const data = require('./data.json')
const fs = require('fs')
// TCP connection client or server k beech ka relation  Transmission Control Protocol,  client se req ja k server jb response deta hy toh ek hi response milta hy or phr TCP close ho jata hy
// web sokets m tcp close nhi hota real time data milta hy  ek k bad ek resp handle kr sakhta hay


// app.get('/', (req, res)=>{
//  res.send(data)

// })

// app.post('/users', (req, res)=>{
//     const {name, email, age, role} = req.body;

//     if(!name || !email || !age || !role){
//         return res.status(404).json({
//             message: "Date required to use post request"
//         })
//     }
//     const newId = Date.now()
//     const newUser = {
//         id: newId,
//         name,
//         email,
//         age,
//         role
//     }
//     data.push(newUser)
//     fs.writeFileSync('./src/data.json', JSON.stringify(data, null, 2))
//     res.status(200).json({
//         message: "User added successfully",
//         data: newUser
//     })
// })


// app.use('/user', (req, res)=>{

//     // just work get req
//     if(req.method == "GET"){
//     res.send(data)
//     }

//     if(req.method == "POST"){
//     const {name, email, age, role} = req.body;
//     if(!name || !email || !age || !role){
//         return res.status(404).json({
//             message: "Date required to use post request"
//         })
//     }
//     const newId = Date.now()
//     const newUser = {
//         id: newId,
//         name,
//         email,
//         age,
//         role
//     }
//     data.push(newUser)
//     fs.writeFileSync('./src/data.json', JSON.stringify(data, null, 2))
//     res.status(200).json({
//         message: "User added successfully",
//         data: newUser
//     })

    // show pending
//     app.route('/user')
//   .get((req, res) => {
//     res.send(data);
//   })
//   .post((req, res) => {
//     const { name, email, age, role } = req.body;

//     if (!name || !email || !age || !role) {
//       return res.status(400).json({ message: "Missing fields" });
//     }

//     const newUser = {
//       id: Date.now(),
//       name,
//       email,
//       age,
//       role
//     };

//     data.push(newUser);
//     fs.writeFileSync('./src/data.json', JSON.stringify(data, null, 2));

//     res.json({
//       message: "User added successfully",
//       data: newUser
//     });
//   });

//     }
// })



// app.use('/test', (req, res)=>{
//     res.send("test")
// })

// app.use('/hello/345', (req, res)=>{
//     res.send("This is 345")
// })


// app.use('/hello', (req, res)=>{
//     res.send("hello world")
// })



// app.use('/hello/123', (req, res)=>{
//     res.send("This is 123")
// })


// app.use('/hello/123', (req, res)=>{
//     res.send("This is 123")
// })



// app.use('/products', (req, res, next)=>{
//     console.log("this is product 1 route");
//     // res.send("Prodcut 1")
//     next()
// },
// (req, res, next)=>{
// console.log("this is product 2 route");
// // res.send("Prodcut 2")
// next()
// },
// (req, res, next)=>{
//     next()
//     res.send("Prodcut 3")
// console.log("this is product 3 route");
// }
// )

// app.use('/products123', (req, res)=>{
//     res.send("This is product 123")

// })



const token = 123

app.use('/products', (req, res, next)=>{
    const authCheck  = token === 1235;
    if(!authCheck){
        res.status(401).send("Unauth access")
    }else{
        next()
    }
},

(req, res)=>{
    res.send("This is all products routes")
}



)


app.listen(3000, (req, res)=>{
    console.log("Server running on 3000 port");
})