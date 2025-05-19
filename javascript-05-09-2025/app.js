// functions

// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");
// let operator = prompt("Enter operator");

// function calculate(a, b, operator){
//     if(operator === "+"){
//         return a + b;
//     }else if(operator === "-"){
//         return a - b;
//     }else if(operator === "*"){
//         return a * b;
//     }else if(operator === "/"){
//         return a / b;
//     }else{
//         return "Invalid operator";
//     }

// }

// console.log(calculate(num1, num2, operator));





// function foo(){
//     alert("clicked");
// }

// function addStudent(){
//    let friuts =  ["apple","banana","orange"];
//   let arr = [];
//   let user = prompt("Enter your name");
//   arr.push(user);
//   console.log(arr);
//   if(friuts.includes(user)){
//     console.log("yes");
//   }else{
//     console.log("no");
//   }
// }




//=======================================================================================

// function capitalize(userInput){
//     // console.log(userInput);
//     let words = userInput.split(" ");
//     // console.log(words);
//     let emptyArr = [];
//     for(let i = 0; i < words.length; i++){
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//         emptyArr.push(words[i]);
//     }
//     alert(emptyArr.join(" "))
// }


let password = 1234
let userInput;
let attempts = 0
let maxAttempts = 3

function passwordAttempt(){
    
    while(userInput != password && maxAttempts > attempts){
        userInput = +prompt("Enter your password: ")
        attempts++;
      if(userInput ==  password){
        alert("Login")
      }else if(attempts < maxAttempts){
       alert(`You have ${maxAttempts - attempts} attempts left`)
      }else{
        alert("Account locked")
      }
    }
}




