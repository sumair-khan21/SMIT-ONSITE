// fifo 

// let arr = ["apple","banana","grapes"]

// arr.shift()
// arr.shift()


// console.log(arr)


// let arr = ["apple","banana","grapes"]

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }




// let str = "hTml"

// let firsrLetter = str.slice(0,1).toUpperCase()

// let restLetter = str.slice(1).toLowerCase()

// let str2 = firsrLetter + restLetter

// console.log(str2)

// let arr = str.split(" ") 

// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
// }

// let str2 = arr.join(" ")

// console.log(str2)



// function capitalize(str){
//     let arr1 = []
//     while(true){
//         let userInput = prompt("Enter a word or press cancel to done")
//         if(userInput.toLowerCase() == "done"){
//           let sentence = arr1.join(" ")
//           console.log(sentence)
//             break
//         }else{
//            let arr = userInput.split(" ")   
//            for(let i = 0; i < arr.length; i++){
//             arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
//            }
//         }
        
//     }
// }

// capitalize()




// =========================================================================================



// // first in first out
// // var arr =["ammad", "ahmad", "ali", "sami", "omar"];
// // arr.shift();
// // console.log(arr);


// var userprompt = 'hTml'  // Html
// var firstletter = userprompt.slice(0,1).toUpperCase();
// console.log(firstletter);
// var restletter = userprompt.slice(1);
// console.log(restletter);
// var result = firstletter + restletter;
// console.log(result);


// // let split = userprompt.split(' ');
// // for (let i = 0; i < split.length; i++) {
// //     split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(i+1).toLowerCase();
// // }
// // let join = split.join(' ');
// // console.log(join);



// var arr = ["shafi", "ahmad", "ali", "sami", "omar"];
// for(let i = 0; i < arr.length; i++){
//     // arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
//     arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase();
// }
// console.log(arr);






// let arr = ["ammad", "ahmad", "ali", "sami", "omar"];
// let currentWord = '';
// let currentName = '';

// // Function to get random name from array
// function getRandomName() {
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     return arr[randomIndex];
//     // console.log(arr[randomIndex]);
// }

// // Function to get random letter from a name
// function getRandomLetter(name) {
//     const randomIndex = Math.floor(Math.random() * name.length);
//     return name[randomIndex];
// }

// // Function to check if word is complete
// function checkWord() {
//     if (currentWord.length === currentName.length) {
//         if (currentWord.toLowerCase() === currentName.toLowerCase()) {
//             alert('Congratulations! You found the name: ' + currentName);
//             // Reset the game
//             currentWord = '';
//             currentName = getRandomName();
//             document.getElementById('wordDisplay').textContent = '';
//             document.getElementById('letterButton').textContent = 'Click for Letter';
//         }
//     }
// }

// // Initialize the game
// document.addEventListener('DOMContentLoaded', function () {
//     const letterButton = document.getElementById('letterButton');
//     const wordDisplay = document.getElementById('wordDisplay');

//     // Set initial random name
//     currentName = getRandomName();

//     // Add click event to button
//     letterButton.addEventListener('click', function () {
//         if (currentWord.length < currentName.length) {
//             const letter = getRandomLetter(currentName);
//             currentWord += letter;
//             wordDisplay.textContent = currentWord;
//             checkWord();
//         }
//     });
// });

// // Get all unique letters from the names
// function getUniqueLetters() {
//     let letters = new Set();
//     arr.forEach(name => {
//         name.split('').forEach(letter => {
//             letters.add(letter.toUpperCase());
//         });
//     });
//     return Array.from(letters).sort();
// }

// // Check if the word matches any name in array
// function checkWord(word) {
//     return arr.some(name => name.toUpperCase() === word);
// }

// // Create keyboard
// document.addEventListener('DOMContentLoaded', function () {
//     const keyboard = document.getElementById('keyboard');
//     const display = document.getElementById('display');
//     const letters = getUniqueLetters();

//     // Create buttons for each letter
//     letters.forEach(letter => {
//         const button = document.createElement('button');
//         button.className = 'letter';
//         button.textContent = letter;
//         button.addEventListener('click', () => {
//             display.textContent += letter;
//             // Check if the current word matches any name
//             if (checkWord(display.textContent)) {
//                 alert('Correct! You found the name: ' + display.textContent);
//                 display.textContent = ''; // Clear the display
//             }
//         });
//         keyboard.appendChild(button);
//     });

//     // Add backspace button
//     const backspaceButton = document.createElement('button');
//     backspaceButton.className = 'letter';
//     backspaceButton.textContent = '⌫';
//     backspaceButton.style.backgroundColor = '#ff4444';
//     backspaceButton.addEventListener('click', () => {
//         display.textContent = display.textContent.slice(0, -1);
//     });
//     keyboard.appendChild(backspaceButton);

//     // Add clear button
//     const clearButton = document.createElement('button');
//     clearButton.className = 'letter';
//     clearButton.textContent = 'C';
//     clearButton.style.backgroundColor = '#ff8800';
//     clearButton.addEventListener('click', () => {
//         display.textContent = '';
//     });
//     keyboard.appendChild(clearButton);
// });



// const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'orange', 'pear', 'quince', 'raspberry', 'strawberry', 'tangerine', 'uva', 'watermelon', 'xigua', 'yuzu', 'zucchini'];


// // Create array of letters A to Z
// const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// function checkWord() {
//     const currentWord = wordDisplay.textContent.toLowerCase();
//     if (words.includes(currentWord)) {
//         alert('Word Found! You typed: ' + currentWord);
//         wordDisplay.textContent = ''; 
//     }
// }

// // Get the keyboard and display elements
// const keyboard = document.getElementById('keyboard');
// const wordDisplay = document.getElementById('wordDisplay');

// // Create buttons for each letter
// letters.forEach(letter => {
//     let button = document.createElement("button");
//     button.className = "key";
//     button.textContent = letter;
//     button.addEventListener("click", function () {
//         wordDisplay.textContent += letter;
//         checkWord(); 
//     });
//     keyboard.appendChild(button);
// });


// const backspaceButton = document.createElement("button");
// backspaceButton.className = "key";
// backspaceButton.textContent = "⌫";
// backspaceButton.style.backgroundColor = "#ff4444";
// backspaceButton.addEventListener("click", function () {
//     wordDisplay.textContent = wordDisplay.textContent.slice(0, -1);
// });
// keyboard.appendChild(backspaceButton);


// const clearButton = document.createElement("button");
// clearButton.className = "key";
// clearButton.textContent = "C";
// clearButton.style.backgroundColor = "#ff8800";
// clearButton.addEventListener("click", function () {
//     wordDisplay.textContent = "";
// });
// keyboard.appendChild(clearButton);




const words = ['raspberry', 'strawberry', 'tangerine', 'uva', 'watermelon', 'xigua', 'yuzu', 'zucchini'];
let currentIndex = 0; // Keeps track of current word index
let currentWord = words[currentIndex];
let shuffledLetters = [];

// Get DOM elements
const keyboard = document.getElementById('keyboard');
const wordDisplay = document.getElementById('wordDisplay');
const puzzleLetters = document.getElementById('puzzleLetters');

// Function to shuffle letters
function shuffle(word) {
    const arr = word.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Function to load new word puzzle
function loadWord() {
    currentWord = words[currentIndex];
    shuffledLetters = shuffle(currentWord);

    puzzleLetters.innerHTML = ''; // Clear previous puzzle
    wordDisplay.textContent = ''; // Clear user input

    shuffledLetters.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'key';
        btn.textContent = letter.toUpperCase();
        btn.addEventListener('click', () => {
            wordDisplay.textContent += letter;
            checkWord();
        });
        puzzleLetters.appendChild(btn);
    });
}

// Check if user-typed word is correct
function checkWord() {
    const typed = wordDisplay.textContent.toLowerCase();
    if (typed === currentWord) {
        alert('Correct! You typed: ' + currentWord);
        currentIndex++;
        if (currentIndex < words.length) {
            loadWord(); // Next puzzle
        } else {
            alert("🎉 Game Finished!");
            wordDisplay.textContent = '';
            puzzleLetters.innerHTML = '';
        }
    }
}

// Add backspace and clear buttons
const backspaceButton = document.createElement("button");
backspaceButton.className = "key";
backspaceButton.textContent = "⌫";
backspaceButton.style.backgroundColor = "#ff4444";
backspaceButton.addEventListener("click", function () {
    wordDisplay.textContent = wordDisplay.textContent.slice(0, -1);
});
keyboard.appendChild(backspaceButton);

const clearButton = document.createElement("button");
clearButton.className = "key";
clearButton.textContent = "C";
clearButton.style.backgroundColor = "#ff8800";
clearButton.addEventListener("click", function () {
    wordDisplay.textContent = "";
});
keyboard.appendChild(clearButton);

// Start game with first word
loadWord();




