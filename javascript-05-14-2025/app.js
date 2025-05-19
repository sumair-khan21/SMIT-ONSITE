// let str = `Video provides a powerful way to hel you prove your point.`

// let findWord = "way"

// for(let i = 0; i < str.length; i++){
//    if(findWord == str.slice(i, i + findWord.length)){
//     console.log("Found")
//    }else{
//     console.log("Not Found")
//    }
// }


// let str = `Video provides a powerful way to hel you prove your point.`

// let findWord = "way"

// let replaceWord = "use"

// for(let i = 0; i < str.length; i++){
//     if(findWord == str.slice(i, i + findWord.length)){
//         str = str.slice(0, i) + replaceWord + str.slice(i + findWord.length)
//     }
// }

// console.log(str)


// replace and replaceAll

// let str = `Video provides a powerful way to hel you prove your way point.`

// let newStr = str.replace("way", "use")

// console.log(newStr);

// let newStr2 = str.replaceAll("way", "use")

// console.log(newStr2);




// indexOf

// let str = `Video provides a powerful way to hel you prove your way point.`
// let findWord = "provides"
// let index = str.indexOf(findWord)
// console.log(index);



// count vowels and consonants

// let str =  prompt("Enter any words : ").toLowerCase()
// let vowels = "aeiou"
// let countVowels = 0;
// let countConsonants = 0;

// for(let i = 0; i < str.length; i++){
//     if(vowels.includes(str[i])){
//         countVowels++;
//     }else{
//         countConsonants++
//     }
// }


// console.log(`Vowels: ${countVowels}`);
// console.log(`Consonants: ${countConsonants}`);




//Reverse a string

// let userInput = prompt("Enter any words: ")

// let reverseStr = ""
// for(let i = userInput.length- 1; i >= 0; i--){
//    reverseStr += userInput[i]
// }
// console.log(reverseStr);




//check palindrome

// let userInput = prompt("Enter any words:")
// let userInput = `madam`
// let reverseStr = ""

// for(let i = userInput.length - 1; i >= 0; i--){
//     reverseStr += userInput[i]
// }

// if(reverseStr == userInput){
//     alert("Palindrome")
// }else{
//     alert("Not Palindrome")
// }


// count words

// let userInput = prompt("Enter any words: ")
// let arr = userInput.split(" ")
// console.log(arr.length);




// //largest word in string

// let str =  `im learning javascript programming`
// let arr =  str.split(" ")
// let largestWord = ""

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     if(arr[i].length > largestWord.length){
//         largestWord = arr[i]
//     }
// }

// console.log(largestWord);




// ek str mai koi bhi letter kitni bar aya hy wo btana hy

// let str = "hello world";

// for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (char === " ") break;

//     let alreadyPrinted = false;
//     for (let j = 0; j < i; j++) {
//         if (str[j] === char) {
//             alreadyPrinted = true;
//             break;
//         }
//     }

//     if (alreadyPrinted) {
//         continue;
//     }

//     let count = 0;
//     for (let k = 0; k < str.length; k++) {
//         if (str[k] === char) {
//             count++;
//         }
//     }

//     console.log(char + " = " + count);
// }





let text = "hello world"
// console.log(text.indexOf("o"));
// console.log(text.lastIndexOf("o"));
console.log(text.includes("World"));




// text = text.toLowerCase().replaceAll(" ", ""); 

// let counted = ""; // Yeh store karega kaunse letters already count ho chuke
// for (let i = 0; i < text.length; i++) {
//   let currentChar = text[i];

//   // Agar pehle count ho chuka hai, to skip karo
//   if (counted.indexOf(currentChar) !== -1) {
//     continue;
//   }

//   // Count karne ke liye loop
//   let count = 0;
//   for (let j = 0; j < text.length; j++) {
//     if (text[j] === currentChar) {
//       count++;
//     }
//   }

//   counted += currentChar; // mark as counted
//   console.log(currentChar + " = " + count);
// }


// let userInput = `hElLO wORld javascript`
// let arr = userInput.split(" ")
// // console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     // console.log(arr);
//     // console.log(arr[i].charAt(1));
    
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
//     // console.log(arr[i]);
// }

// let newstr = arr.join(" ")
// console.log(newstr);








