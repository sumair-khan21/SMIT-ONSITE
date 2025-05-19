// alert("hello javascript")

// let message = `Being able to measure the number of characters in a string can come in handy. For
// example, suppose you want to loop through a string, checking to see if it has any double spaces
// in it. You can use the character count as the loop limiter. Here's some code that checks for
// double spaces in a string and displays an alert if they're found.`
// let convert = message.split(' ')
// let upper = []
// for(var i = 0; i < convert.length; i++){

// upper.push(convert[i][0].toUpperCase()+convert[i].slice(1) )
// }
// console.log(upper);

// let result = convert.join(' ');
// console.log(result);


// indeof har letter ka index bta dega
// let str  = `Being able to sit measure the number of characters in a string can come in handy. For
// example, suppose you want to loop through a string, checking to see if it has any double spaces
// in it. You can use the character count as the loop limiter. Here's some code that checks for
// double spaces in a sit string and displays an alert if they're found.
// `
// let findWord = "sit";
// let counter = 'javascript'
// for(let i =0 ; i <str.length; i++){
//     // 0 se findword ki lenght copy karega 5 5 word copy karega phr find k sath match hoga
//     if(str.slice(i,i+2) == findWord){
//         console.log('found');
//         // yaha 0 se copy hoga or jaha word find howa waha tk chalega + counter chalega agay k word bhi show ho jaenge i + findword isliye lagya hy k agay k word ajaen
//         console.log(str.slice(0,i)+counter +str.slice(i+findWord.length));
        
        
//     }else{
//         console.log('not found');
        
//     }
// }

// -----------------------------------------------------------------
// let str = `found Being able to sit measure the number of characters in a string can come in handy. For
// example, suppose you want to loop through a string, checking to see if it has any double spaces
// in it. You can use the character count as the loop limiter. Here's some code that checks for
// double spaces in a sit string and displays an alert if they're  found.

// // answer
// // javascript Being able to sit measure the number of characters in a string can come in handy. For
// example, suppose you want to loop through a string, checking to see if it has any double spaces
// in it. You can use the character count as the loop limiter. Here's some code that checks for
// double spaces in a sit string and displays an alert if they're  javascript. 

// `;
// let findWord = "found";
// let counter = "javascript";
// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i, i + findWord.length) === findWord) {
//         str = str.slice(0,i) + counter + str.slice(i+findWord.length)
//     } else {
//         console.log('not found');
        
//     }
// }

// console.log(str);
// -------------------------------------------------------------------------
// js strinf method dekkhkna w3school se
// charAt word ka index no le ayega
// replace ek word kare
// replaceall saray word karega 

// let str = `found Being able to sit measure the number of characters in a string can come in handy. For
// example, suppose you want to loop through a string, checking to see if it has any double spaces
// in it. You can use the character count as the loop limiter. Here's some code that checks for
// double spaces in a sit string and displays an alert if they're  found.`
// let findWord = "found";
// let counter = "javascript";
// str = str.replaceAll(findWord, counter)
// console.log(str);

// includes
let str = `found Being able to sit measure the number of characters in a string can come in handy. For
// example, suppose you want to loop through a string, checking to see if it has any double spaces
// in it. You can use the character count as the loop limiter. Here's some code that checks for
// double spaces in a sit string and displays an alert if they're  found.`
console.log(str.includes('found'));
