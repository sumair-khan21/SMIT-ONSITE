// // let arr = [12,45,67,89,100]

// // for(let i = 0; i < arr.length; i++){
// //     // console.log(arr[i])
// //     if(arr[i] >= 50){
// //         console.log("pass",arr[i])
// //     }else{
// //         console.log("fail",arr[i])
// //     }
// // }



// find vowels in a string

let str = "hello world"
// let count = 0;

for(let i = 0; i < str.length; i++){
    // console.log(str[i]);
    if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
        console.log(`It's vowels =======> ${str[i]}`);
        // count++
    }
}
// console.log(count);


// let str = "hello world";
// let vowels = ['a','e','i','o','u'];
// let count = 0;
// for(var i = 0;i< str.length;i++){
//     let char = str[i];
//     for(var j=0; j< vowels.length;j++){
       
//         if(char === vowels[j]){
//             count++
//         }
//     }
// }
// console.log(count)
