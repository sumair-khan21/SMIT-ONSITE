
const students = [
    { name: "Ali", marks: 85, subject: "Math" },
    { name: "Sara", marks: 92, subject: "English" },
    { name: "Ahmed", marks: 75, subject: "Science" },
    { name: "Zara", marks: 88, subject: "Math" },
    { name: "Hassan", marks: 65, subject: "English" },
];


// Tasks
// Map Example
// // Har student ka name aur marks ko string me convert karo.
// let newArr = students.map((std,index,complte)=>{
//     return `${std.name}: ${std.marks} `;
// })
// console.log(newArr);

// Output example: ["Ali: 85", "Sara: 92", ...]


// Filter Example
// Un students ko filter karo jinhon ne 80 se zyada marks liye hain.
// let newArr = students.filter((std)=>{
//     return std.marks > 80;
// })
// console.log(newArr);

// Output example: [ { name: "Ali", ... }, { name: "Sara", ... }, ...]




// forEach Example
// Console me print karo: "Student [name] scored [marks] in [subject]"

students.forEach((std)=>{
    console.log(`Student ${std.name} scored ${std.marks} in ${std.subject}`);
})