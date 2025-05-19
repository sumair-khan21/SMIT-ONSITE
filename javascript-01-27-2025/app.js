// let absent = 0;
// let present = 0;
// let leave = 0;
// let stdAddantance = [];
// function attandanceMark(){
// let user = +prompt(`mark your attandance 1: A , 2: B , 3: C`)
// if(user == 1){
//     ++absent;
// }
//  else if(user == 2){
//         ++present;
//     }else if(user == 3){
//         ++leave;
//     }
// else{
//     console.log(`attandance is not marked`)
// }
// }
// function checkStatus(){
//     // document.write(`${absent}`)
//     // document.write(`${present}`)
//     // document.write(`${leave}`)
//     for(var i =0; i<stdAddantance.length; i++){
//         if(user == 1){
//             ++absent;
//         }
//          else if(user == 2){
//                 ++present;
//             }else if(user == 3){
//                 ++leave;
//             }
//         else{
//             console.log(`attandance is not marked`)
//         }   
//     }
// }
// ----------------------------------------------------
//                           Rounding numbers
// kisi bhi no ko round krna hy toh 3 method hy
// console.log(Math.round(4.4)); //4 
// console.log(Math.floor(4.4)); //4 floor means k niche toh ye 4 se niche work karega
// console.log(Math.ceil(4.2)); //5 ceil means k uper ponit k bad kkuch bhi ho wo agay ka no lega


// console.log(Math.round(-4.5)); //-4
// console.log(Math.floor(-4.7)); //-5
// console.log(Math.ceil(-4.7)); //-4

// console.log(Math.random()); //rondom 16 digits k num deta hy 0.24521589270456312 refresh pr change hoga no
// console.log(Math.random()*10); // jo no chahiye us se multiply kr denge
// koi bhi do no chahiye
// var number = Math.random()*10
// hame 100 se 1 k between no chahiye
// var number = (Math.random()*100)+10

// console.log(number , "===> number");
// console.log(Math.round(number) , "===> round");
// console.log(Math.floor(number) , "===> floor");
// console.log(Math.ceil(number) , "===> ceil");

// console.log(Math.random().toFixed(2));

// let randomNumber = Math.floor(Math.random() * 6 + 1 )
// let answer = prompt(`type any number between 1 to 6`)
// if(answer == randomNumber){
//     console.log(`RandomNumber: ${randomNumber} , Answer: ${answer} You Won`);
// }else if(answer > randomNumber){
//     console.log(`RandomNumber: ${randomNumber} , Answer: ${answer} grater number`);
// } else if(answer < randomNumber){
//     console.log(`RandomNumber: ${randomNumber} , Answer: ${answer} less number`);
// } 

// else{
//     console.log(`BAD Number`);
    
// }



// Password generation function
function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < length; i++) {
        // Random index generate using Math.random
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// User input for password length
const userLength = prompt("Aapko kitni length ka password chahiye? (e.g., 8, 12, 16)");
const length = parseInt(userLength, 10);

if (isNaN(length) || length <= 0) {
    alert("Invalid input! Please enter a valid number greater than 0.");
} else {
    const password = generatePassword(length);
    alert(`Aapka ${length} characters ka password hai: ${password}`);
}






