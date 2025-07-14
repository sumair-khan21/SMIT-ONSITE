// callback 
// ek ek bad ek kam krne k liye callback function ka use hota hai
// callback esa function hota hai jo kisi dusre function ke andar pass kiya jata hai
// callback function ko dusre function ke andar call kiya jata hai


// promise
// promise ek object hota hai jo future me kisi value ko represent karta hai
// promise ka use asynchronous operations ko handle karne ke liye hota hai
// promise ka use karne se hum asynchronous code ko synchronous code ki tarah likh sakte hain
// promise ka use karne se hum code ko readable aur maintainable bana sakte hain


// 


let dataContainer = document.getElementById('data-container');
let dataElement = document.getElementById('data');


function fetchData() {
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);

}



// function displayData(data) {
//     dataElement.innerHTML = JSON.stringify(data, null, 2);
// }
// function handleError(error) {
//     console.error('Error fetching data:', error);
//     dataElement.innerHTML = 'Error fetching data. Please try again later.';
// }