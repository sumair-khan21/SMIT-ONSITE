// let age = +prompt("enter your age")
// let salary = +prompt("enter your salary")
// if(age >= 18 && salary >= 50000) {
// document.write("loan approved")
// }else{
//     document.write("loan not approved")
// }
// ---------------------------------------------------

// let email = prompt("enter your email");
// let password = prompt("enter your password");

// let confirmEmail = "abc@gmail.com";
// let confirmPassword = "1234";

// if(confirmEmail == email && confirmPassword == password) {
//     document.write("login successfull");
// }else if(confirmEmail != email || confirmPassword != password) {
// document.write("invalid email ")
// }
// else{
//     document.write("worng password");
// }
// ------------------------------------------------------------
// let number = +prompt("enter any number")
// if(number % 3 == 0 && number % 5 == 0) {
// document.write("your number is divisible by 3")
// }else if(number % 5 == 0) {
//     document.write("your number is divisible by 5")
// }else if(number % 3 == 0) {
//     document.write("your number is divisible by 3")
// }else{
//     document.write("your number is not divisible by 3 or 5")
// }
// -------------------------------------------------------

// let pizza = prompt(`Enter Pizza flavours , "chicken" , "BBQ" , beef?`);
// let price = +prompt(`Enter price of pizza`);
// let flavours1 = "chicken";
// let flavours2 = "BBQ";
// let flavours3 = "beef";
// if(pizza == "chicken" || pizza == "BBQ" || pizza == "beef") {
//     if(pizza == "chicken") {
//       let selectSize = prompt(`enter pizza size , "small" , "medium" , "large?"`);
//        if(selectSize == "small" || selectSize == "medium") {
//         document.write(`${selectSize} pizza is avalible`);
//     }else{
//         document.write(`${selectSize} pizza not avalible`);
//     }
// }else if(pizza == "BBQ"){
//     let selectSize = prompt(`enter pizza size , "small" , "medium" , "large?"`)
//     if(selectSize == "small" || selectSize == "large") {
//      document.write(`${selectSize} pizza is avalible`);
//  }else{
//      document.write(`${selectSize} pizza is not avalible`);
//  }
// }else if(pizza == "beef"){
//     let selectSize = prompt(`enter pizza size , "small" , "medium" , "large?"`)
//     if(selectSize == "large" || selectSize == "medium") {
//         document.write(`${selectSize} pizza is avalible`);
//     }else{
//         document.write(`${selectSize} pizza is not avalible`);
//     }
// }
// }
// else{
//     document.write("Pizza is not available");
// }


// let number = [7,8,20,15,18,90,41,5,9,35];
// let evenNum = [];
// let oddNum = [];
// for(var i = 0 ; i< number.length ; i++) {
//     if(number[i] % 2 == 0) {
//         evenNum.push(number[i]);
//         console.log("even number " + evenNum);
//         }else{
//             oddNum.push(number[i]);
//             console.log("odd number " + oddNum);
//     }
// }


// console.log("even number " + evenNum);
// console.log("odd number " + oddNum);


// let table = prompt("enter table number");
// for(var i = 6; i <= 20; i++) {
//     document.write(`${table} * ${i} = ${table * i} <br>`);
// }


// immutable

// let str = "hello world";
// str[2] = "dd";
// console.log(str);



// let str = "madam";
// let reversedStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
// }

// if (str === reversedStr) {
//     console.log("The word is a palindrome.");
// } else {
//     console.log("The word is not a palindrome.");
// }
// ------------------------------------------------------------------------
// free code cam
// review 20 chapters
// var myName = "abc";
// function xyz(){
//     var myName = "ABC";
//     console.log(myName);
    
// }
// abc()
// console.log(myName);
// console.log(abc);
// var abc = "hey"
// console.log(abc);
// ------------------------------------------------------------------------
// var userName = "abc"
// var userName = 123


// let userName = "abc";
// let userName = 123;

// for(var i = 0; i <10; i++){

// }
// console.log(i); //10

// for(let i = 0; i <10; i++){

// }
// console.log(i); //not defined
// ------------------------------------------------------------------------------------
// changing case 
// var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", "tucson", "Great Falls", "great falls", "Honolulu", "honolulu"];
//  var cityToCheck = prompt("Enter your city");
//  cityToCheck = cityToCheck.toLowerCase();
//  var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
//  for (var i = 0; i <= 4; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//  alert("It's one of the cleanest cities");
//  }
//  }

// --------------------------------------------------------------------
// var arr = ["apple","banana","blueberry"];
// var findValue = "ApPlE"
// console.log(findValue.toLowerCase());
// console.log(findValue.toUpperCase());


// var arr = ["apple","banana","blueberry"];
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
    
// }

// var arr = ["apple","banana","blueberry"];
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i][0].toUpperCase()+arr[i].slice(1));
// }
//Apple
//Banana
// Blueberry
// string indexing

// let str = "Hello";
// str[0] = "Y"; // Yeh change nahi karega
// console.log(str); // Output: "Hello"

// // Naya string banane ke liye:
// str = "Yellow";
// console.log(str); // Output: "Yellow"


// let arr = [1, 2, 3];
// arr[0] = 10; // Array ka pehla element change kar diya
// console.log(arr); // Output: [10, 2, 3]

// let obj = { name: "Ali" };
// obj.name = "Ahmed"; // Object ka property value change kar diya
// console.log(obj); // Output: { name: "Ahmed" }

// var arr = ["apple","banana","blueberry"];
// str = "apple"
// console.log(arr.chartAt(2));


// var arr = ["apple","banana","blueberry"];
// str = "apple"
// for(let i = str.length-1; i >=0; i--){
//     console.log(str[i]);
// }



// var arr = ["apple","banana","blueberry"];
// let str = "apple";
// let newStr = ''
// for(let i = str.length-1; i >=0; i--){
//     newStr += str[i]
// }
// console.log(newStr);

// -----------------------------------------------------
// const word = "madam"; 
// let reversedWord = ""; 

// for (let i = word.length - 1; i >= 0; i--) {
//   reversedWord += word[i];
// }
// if(word === reversedWord){
//     console.log("this is palindrome");
    
// }else{
//     console.log("this is not palindrome");
    
// }


let arr = ["apple","banana","grape","blueberry"]





