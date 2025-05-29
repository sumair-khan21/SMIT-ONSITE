// hexa color generator

// let num = Math.floor(Math.random() * 100);

// console.log(num);

// let hex = num.toString(16);

// console.log(hex);

// let hexColor = "#" + hex;

// console.log(hexColor);


// const hex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

//     document.body.style.backgroundColor = hex;

//     document.getElementById("color-code").innerText = hex;



// let num = "123456789abcdef";
// let hex = "#";

// for(let i = 0; i < 6; i++){
//     hex += num[Math.floor(Math.random() * num.length)];
// }

//     document.body.style.backgroundColor = hex;

//     document.getElementById("color-code").innerText = hex;

// console.log(hex);


// charCodeAt()

// charCodeAt ka kam hai ki uska ascii value return karega

// let str = "72";

// console.log(str.charCodeAt());


// string.fromCharCode()
// string.fromCharCode() ka kam hai ki uska ascii value ko character mein convert karega

// console.log(String.fromCharCode(64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90));

// for(let i = 0; i <=90; i++){
//     console.log(String.fromCharCode(i));
// }


// let random = Math.round(Math.random() * 6) + 97;
// console.log(random);


// console.log(random);

// let color = "#"
// for(let i = 0; i < 6; i++){
    
//     let random = Math.round(Math.random());
//     let code;

// if(random == 1){
//     code = Math.floor(Math.random() * 6) + 97;
//     // console.log(code);
    
// }else{
//     code = (Math.floor(Math.random() * 10) + 48);
// }
//  color += String.fromCharCode(code)
// }

// console.log(color);  




// code = Math.floor(Math.random() * 6) + 97;
// console.log(code);


// code1 = Math.floor(Math.random() * 10) + 48;
// console.log(code1);



// user se prompt le k uski lenght tk password generate krna hy

// password generator


// let userInput = +prompt("Enter password length");
// let color = "";  

// for (let i = 0; i < userInput; i++) {
//     let random = Math.round(Math.random());
//     // console.log(random);
    
//     let charCode;

//     if (random == 1) {
//         // Small letters (a-f for hexadecimal, ya a-z if 97-122)
//         charCode = Math.floor(Math.random() * 6) + 97; // a-f
//     } else {
//         // Numbers (0-9)
//         charCode = Math.floor(Math.random() * 10) + 48;
//     }

//     color += String.fromCharCode(charCode);
// }

// console.log("Generated password:", color);




// let userInput = +prompt("ENter password lenght: ")
// let password = ""


// for(let i = 0; i < userInput; i++){
//     let random = Math.round(Math.random() * 3)
//     let charCode;

//     if(random == 0){
//         charCode = Math.floor(Math.random() * 6 ) + 87
//     }else if(random == 1){
//         charCode = Math.floor(Math.random() * 10) + 48
//     }else{
//         charCode = Math.floor(Math.random() * 6) + 65
//     }
//     password += String.fromCharCode(charCode)
// }

// console.log(password);


// let random = Math.round(Math.random());
//     console.log(random);
// for(let i = 0; i < userInput; i++){
//     // console.log(char[i]);
//     // random = Math.floor(Math.random () * )
    
//     let randomCode = Math.floor(Math.random() * 94) + 33;

    
    
//     random += String.fromCharCode(randomCode)
    
// }

// console.log(random);
// console.log(store);













// console.log(string.fromCharCode());

