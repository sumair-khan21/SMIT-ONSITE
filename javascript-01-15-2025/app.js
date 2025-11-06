// let number = [30,50,60,40,70,80,90];

// number.sort()
// console.log(number);

// let smallNum = number.pop()
// let largeNum = number.shift()
// console.log(smallNum);
// console.log(largeNum);


// for(let i = 0; i <10; i++){
// }
// console.log(i); let = not defined var = 10

// flag
// hame console m found ek hi bar milta y break use kr k wo niche tk read nhi karega
// const arr = ["Ali", "Ahmed", "Ayesha"];
// let store = "Alk"
// let flag = false
// for(let i = 0 ; i <arr.length; i++){
//     // slice letter copy krta hy
// if(arr[i] === store[0].toUpperCase()+store.slice(1).toLowerCase()){
//     flag = true
//     break;
// }
// }
// if(flag){
//     console.log("found");
    
// }else{
//     console.log("not found");
// }

//  var firstChar = cityToCheck.slice(0, 1);
//  var otherChars = cityToCheck.slice(1);
//  firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//  var cappedCity = firstChar + otherChars;


//  var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
//  break;
//  }}

// let number = [30,50,60,40,70,80,90];
// for(let i = 0; i = number.length; i++ ){
//  if()
// }

// indexOf word btao us k kitne letter hy
// includes check krta hy is m ye wrod hy ya nhi
// split ye hum sperate krne k liye use krte hain ye array return krta hy 
// let text = "apple"
// let tex1 = "abc"
// console.log(tex1.split("p"));
// trim extra space ktm kr deta hy


let str  = `Being able to measure the number of characters in a string can come in handy. For
example, suppose you want to loop through a string, checking to see if it has any double spaces
in it. You can use the character count as the loop limiter. Here's some code that checks for
double spaces in a string and displays an alert if they're found.
`
let findWord = "s";
let counter = 0
for(let i =0 ; i <str.length; i++){
    console.log(str.slice(i,i+2));
    
    if(str.toLowerCase().slice(i, i + findWord.length) == findWord.toLowerCase()){
        ++counter
    }
}
console.log(counter);
