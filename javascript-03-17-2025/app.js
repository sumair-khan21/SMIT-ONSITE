// // what is difference between Synchronous and Asynchronous javascript?
// Synchronous means k agr ap koi do kam ek sath kr rahe ho toh jb tk apka ek kam nhi ho jata ap dosra kam nhi kr sakhte
// Asynchronous means k saray kam chalte rahenge kisi ko rukna nhi parega or iska ek kam ye bhi k ek hi waqt m do kam kr sakhte ho.

// Synchronous and Asynchronous JavaScript ka basic difference yeh hai ke Synchronous JavaScript code line-by-line execute hota hai, jab ke Asynchronous JavaScript multiple tasks ko ek saath handle kar sakta hai, bina main execution ko block kiye.

// Synchronous JavaScript (Blocking)
// Yeh single-threaded hota hai, yani ek waqt mein ek hi kaam karega.
// Jab tak ek line execute nahi hoti, agla code execute nahi hoga.
// Slow ho sakta hai agar koi operation zyada time le raha ho.

// Example:
// console.log("Start");
// for (let i = 0; i < 1000000000; i++) {}  // Time-consuming task
// console.log("End");

// Asynchronous JavaScript (Non-Blocking)
// Yeh multiple tasks ko handle kar sakta hai bina execution ko block kiye.
// Commonly callbacks, promises, or async/await ka use hota hai.
// Faster performance kyunki slow tasks ko background mein execute kar deta hai.
// 🔹 Example (Using setTimeout - Asynchronous function):

// console.log("Start");

// setTimeout(() => {
//   console.log("Inside Timeout");
// }, 2000);

// console.log("End");

// setTimeout koi bhi code specific time k bad print krwana hy toh ye use hoga

// setTimeout(function(){
//     console.log("hello world");

// },5000)
// console.log("hello javascript");

// setinterval ka kam her every 5 sec k bad ek code chalega

// setInterval(function(){
//     console.log("hello world");

// },5000)
// console.log("hello javascript");

let test = document.getElementById("test");

let plus = 0;

function foo() {
  // test.textContent = plus;
  // plus += 1;
  // if(plus > 10){
  //     plus = 0;
  // }

  setInterval(() => {
    test.textContent = plus;
    plus += 1;
    if (plus > 10) {
      plus = 0;
    }
  }, 1000);

}

// function reset(){
//     set
// }


// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

let intervalId = setTimeout(greet, 3000);
console.log('Id: ' + intervalId);   





// let num = 0
// setInterval(()=>{
//     // console.log(test);

//     // if(num === 0){
//     //     num = 1;
//     // }else{
//     //     num = 0;
//     // }
//     console.log(num++);

// },2000)
