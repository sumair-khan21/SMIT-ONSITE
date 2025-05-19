// functions
// agr apko ek hi kam bar bar karna hai to function use kro

// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 2));

// function calculator(num1,num2,operator){
//       if(operator == "+"){
//        console.log(`Addition ${num1 + num2}`);
//       }else if(operator == "-"){
//         console.log(`Subtract ${num1 - num2}`);
//       }else if(operator == "*"){
//         console.log(`Multiple ${num1 * num2}`);
//       }else if(operator == "/"){
//         if(num2 ==0){
//             console.log("Maths Error");
//           }else{
//             console.log(`Division ${num1 / num2}`);
//           }
//       }
// }

// calculator(2,2,"/")

// function greeting(name){
//     console.log("Hello " + name);

// }
// greeting("Shakib")
// greeting("Sumair")
// greeting("Usman")

// const addmission = [
//   {
//     name: "Sumair",
//     rollNo: 23,
//     course: "BSCS",
//     fee: 10000,
//   },
//   {
//     name: "Shakib",
//     rollNo: 24,
//     course: "BSCS",
//     fee: 10000,
//   },
//   {
//     name: "Usman",
//     rollNo: 25,
//     course: "BSCS",
//     fee: 10000,
//     abc() {
//       console.log(`${this.name} is a student of ${this.course} and his roll number is ${this.rollNo} and his fee is ${this.fee}`);
     

//     },

//   },
// ];

// // addmission[2].abc();
// for(i = 0; i < addmission.length; i++){
//     console.log(addmission[i]);
//  }



function Car(name,model,year){
    this.name = name;
    this.model = model;
    this.year = year;
    console.log(`${this.name} is a car of ${this.model} and its year is ${this.year}`);
    
}

const car1 = new Car("Toyota","Corolla",2020);
const car2 = new Car("Honda","Civic",2021);
const car3 = new Car("Suzuki","Swift",2022);


console.log(car1.model);
console.log(car2.model);
console.log(car3);







