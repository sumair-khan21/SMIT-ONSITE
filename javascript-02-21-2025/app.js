// const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
// let password = "";
// let specialChars = "!@#$%^&*()";


// let user = +prompt("Enter a number")
// for (let i = 0; i < user; i++) {
//     password += chars.charAt(Math.floor(Math.random() * chars.length))
//     specialChars += specialChars.charAt(Math.floor(Math.random() * specialChars.length))
// console.log(specialChars);

// }
// document.write(password)


// var min = 500
// var max = 700
// function generateRandomNumber() {
//     var randomNum = Math.floor(Math.random() * (max - min)) + min;
//     console.log(randomNum);
     
// }
// generateRandomNumber()

// let randomNum = Math.floor(Math.random() * (200) + 500)
// console.log(randomNum);



// let randomNum = generateRandomNumber()
// console.log(randomNum);




let inp = document.getElementById("inp")
inp.addEventListener("input", function() {
    let para = document.getElementById("para")
    para.innerHTML = inp.value
    // console.log(inp.value);
})


let uperCase = document.getElementById("uperCase")
let lowerCase = document.getElementById("lowerCase")
let number = document.getElementById("number")
let specialChar = document.getElementById("specialChar")

function generatePassword() {
    if(uperCase.checked) {
        console.log("uperCase", uperCase.value);
    }
    if(lowerCase.checked) {
        console.log("lowerCase", lowerCase.value);
    }
    if(number.checked) {
        console.log("number", number.value);
    }
    if(specialChar.checked) {
        console.log("specialChar", specialChar.value);
    }
    // console.log("uperCase", uperCase);
    // console.log("lowerCase", lowerCase);
}

generatePassword()

