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


// let word = ["apple", "mango", "blueberry", "strawberry", "watermelon", "banana"];
// let longword = "";

// for(i= 0 ; i<word.length; i++){
//     if(word[i].length > longword.length){
//         longword = word[i];    
//     }
// }

// console.log("long word is: " + longword);


// let number = [50,45,55,60,90,70,80,88,20,12];
// let pass= 0;
// let fail= 0;

// for(i= 1 ; i<number.length; i++){
//     if(number[i] >= 50){
//         pass++;
       
// }
// else{
//     fail++
// }
// }   

// console.log("number of student pass is " + pass);
// console.log("number of student fail is " + fail);







// task 2 

// let text = "Lorem Ipsum dolor sit amwt,  consectetur adipisicIng elit. Laboriosam in ullam explicabo repellat modi enim doloremque asperiores   dignissimos veniam distinctIo! Consectetur laboriosam repellat nulla odit quam quis est provident nesciunt.  Vitae eius, totam, facilIs recusandae deleniti quam similique impedit saepe dicta sunt, praesentium cupiditate  itaque tempora consequatUr accusantium rerum repellat laudantium magni a mollitia distinctio. Odio commodi   praesentium veritatis aliAs.officiis harum similique dolores animi. Minima architecto velit illo ipsa illum   corporis eaque eius est Ipsam nesciunt! Deleniti neque aut, sapiente at reiciendis pariatur, amet omnis dOlOrIm odio hic ex!"
// let doubleSpace = 0;
// let totalVowelLetters  = 0;
// let ACount = 0;
// let ECount = 0;
// let ICount = 0;
// let OCount = 0;
// let UCount = 0;

// for(var i = 0 ; i < text.toLowerCase().length;i++){
//     if(text[i] == " " && text[i+2] == " "){
//         doubleSpace++;
//     }
// let char = text[i].toLowerCase();
// if(char == "a"){
//     ACount++;
// }else if(char == "e"){
//     ECount++;
// }else if(char == "i"){
//     ICount++;
// }else if(char == "o"){
//     OCount++;
// }else if(char == "u"){
//     UCount++;
// }

// }

// totalVowelLetters   = ACount + ECount +  ICount + OCount + UCount; 

// console.log("Double space: "+ doubleSpace)
// console.log("totalVowelLetters: " + totalVowelLetters);
// console.log("Total A vowels: " + ACount);
// console.log("Total E vowels: " + ECount);
// console.log("Total I vowels: " + ICount);
// console.log("Total O vowels: " + OCount);
// console.log("Total U vowels: " + UCount);


// let numbers = [23, 34, 53, 55, 65, 75, 74,3, 2, 76, 33, 77, 88, 96, 43, 28, 54, 66,90];
// let sort = [];
// for(var i = 0; i< numbers.length;i++){
//     sort.push(numbers[i])
//     for(var j = 0 ; j<sort.length-1;j++){
//         if(sort[i]<sort[j]){
//             let temp = sort[i];
//             sort[i] = sort[j];
//             sort[j]= temp;
//         }
//     }
// }
// console.log(numbers)
// console.log(sort);


// let paragraph = "Lorem Ipsum dolor sit amE consectetur adipisicIng elit.Laboriosam in ullam explicabo repellat modi enim doloremque";
// console.log(paragraph)
// let split = paragraph.split(" ")
// console.log(split); //split ye har ek word ko string m likhega array k ander => ['Lorem', 'Ipsum', 'dolor', 'sit', 'amE', 'consectetur', 'Rizwan', 'elit.Laboriosam', 'in', 'ullam', 'explicabo', 'repellat', 'modi', 'enim', 'doloremque']
// split[6] = "Rizwan";
// console.log(split);
// let join = split.join(" ");
// console.log(join);