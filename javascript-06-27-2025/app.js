// welcome to js

// console.log("hello world");


// BOM 
// console.log(window);



// forEach 
// foreach m hum break or continue use nahi kar sakte
// or ye sirf array ke sath hi use hota hai
// is k ander length ka use nahi hota
// is k ander item or index dono milte hain
// index ko handle nhi kr sakhte
// simple data ko print krne k liye use hota hai
// ye teen paramter leta hat phela element, dusra index, teesra array index or array optional hote hain 


// const arr = [1, 2, 3, 4, 5];
// arr.forEach((item, index) => {
//     console.log(item, index);
// });


// map
// map m hum break or continue use kar sakte hain
// map m hum length ka use kar sakte hain
// map m hum item or index dono ko handle kar sakte hain
// map m hum array ko modify kar sakte hain
// ye new array return karta hai
// map m hum sirf array ke sath hi use karte hain

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((item, index) => {
//     console.log(item, index);
//     return item * 2; // ye new array return karega
// });
// console.log(newArr); // [2, 4, 6, 8, 10]



// filter
// filter bhi new array return karta hai
// filter m hum sirf array ke sath hi use karte hain
// filter m hum item or index dono ko handle kar sakte hain
// filter m hum sirf true or false return karte hain
// ye callback function leta hai




let category = ["a", "b"]
let add  = 'c'

    if(!category.includes(add)){
        category.push(add);
        // console.log(category); 
    }
console.log(category);



// for(let i = 0; i <category.length; i++){
//     if(!category[i].includes(add)){
//         category.push(add);
//         console.log(category); 
//         break; 
//     }
    
// }


