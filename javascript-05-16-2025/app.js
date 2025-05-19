// rounding numbers

// let num1 = 1.49;
// let num2 = 1.50;
// let num3 = 1.81;

// console.log(Math.round(num1)); // 1
// console.log(Math.round(num2)); // 2
// console.log(Math.round(num3)); // 2

// ceil and floor

// let num1 = 1.49;
// let num2 = 1.50;
// let num3 = -5.5;

// console.log(Math.ceil(num1)); // 2
// console.log(Math.ceil(num2)); // 2
// console.log(Math.ceil(num3)); // 2

// console.log(Math.floor(num1)); // 1
// console.log(Math.floor(num2)); // 1
// console.log(Math.floor(num3)); // 1



// random numbers

// let randomNum = Math.random();



// console.log(Math.floor(randomNum * 10));

// console.log(Math.ceil(randomNum)); 
// console.log(Math.floor(randomNum));
// console.log(Math.round(randomNum));


// let randomColor = `${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`
// console.log(randomColor);



// let char = `1234567890qwertyuiopasdfghjklzxcvbnm<>?:"{}!@#$%^&*()`
// let password = "";
// let userInput = +prompt("Enter your password length")
// for(let i = 0; i < userInput; i++){
//     // console.log(char[i]);
//     password += char.charAt(Math.floor(Math.random() * char.length))
// }
// console.log(password);




// function abc(){

    
// let r =  Math.round(Math.random() * 256)
// let g =  Math.round(Math.random() * 256)
// let b =  Math.round(Math.random() * 256)

// let text  = document.getElementById('abcd')
// text.style.backgroundColor = `rgb(${r},${g},${b})`;
// // console.log(`${r}${g}${b}`);

// }







// ek arr hoga is arr diff naam honge jese hi koi ek random naam ajyega har bar reload per naam change aye or naam k letter alg alag ho jese cat ho toh tca

// do input lene hain login email or password agr dono sahi ho toh alert ajaye or  ye dom se krna hy

// ek form banan hhy bht saray input hoga toh niche card bana k show karega  card horizontal ane chahiye or har std ka random roll generate ho





let arr = ["cat","dog","mouse","bird","fish"]
let newStr = ""

let randomName = arr[Math.floor(Math.random() * arr.length)]
console.log(randomName);

let randomLetters = randomName[Math.floor(Math.random() * randomName.length)]
console.log(randomLetters);

// for(let i = 0; i < arr.length; i++){
//     // console.log(randomLetter);
//     newStr += randomName
    
// }
