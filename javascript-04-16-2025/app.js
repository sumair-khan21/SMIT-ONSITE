// let studentData = {
//     name: "Sumair",
//     age: 20,
//     city: "Karachi",
//     country: "Pakistan",
//     email: "sumair@gmail.com",
//     phone: "03001234567",
//     gender: "Male",
//     address: "123 Main St, Karachi, Pakistan",
// }

// let email = "email";

// console.log(studentData[email]);


// let obj = {
//     'first name': "Sumair",
//     age: 20,
//     city: "Karachi",
//     country: "Pakistan",
//     email: "sumair@gmail.com",
// }

// console.log(obj['first name']);




let studentData = [
    {
        name: "Sumair",
        age: 20,
        city: "Karachi",
        country: "Pakistan",
        email: "sumair@gmail.com",
        phone: "03001234567",
        gender: "Male",
        address: "123 Main St, Karachi, Pakistan",
    },
    {
        name: "Ali",
        age: 21,
        city: "Lahore",
        country: "Pakistan",
        email: "ali@gmail.com",
        phone: "03001234567",
        gender: "Male",
        address: "123 Main St, Lahore, Pakistan",
    },
    {
        name: "Ayesha",
        age: 22,
        city: "Islamabad",
        country: "Pakistan",
        email: "ayesha@gmail.com",
        phone: "03001234567",
        gender: "Female",
        
    }
]

// console.log(studentData[1].email);

for(let i = 0; i < studentData.length; i++){
    console.log(studentData[i].name);
    
}