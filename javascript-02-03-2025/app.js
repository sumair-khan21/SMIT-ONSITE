// var monthName = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
// var now = new Date("02-05-2010 16:00");
// console.log(now);

// // jan 3rd 10:00Am
// var date =now.getDate();
// var month =now.getMonth();
// var hour =now.getHours()%12 || 12;
// var minutes =now.getMinutes();
// var currentMonth = monthName[month]
// var ampm =""
// console.log("date =====> " ,date);
// console.log("currentMonth =====> " ,currentMonth);
// console.log("hour =====> " ,hour);
// console.log("minutes =====> " ,minutes);


// //3 23 ===>rd
// //1 21 31 st
// //2 22 ==> nd
// // th
// if(date === 1 || date === 21 || date === 31){
//     date+="st"
// }else if(date === 2 || date === 22){
//     date+="nd"
// }else if(date === 3 || date === 23){
// date+="rd"
// }else{
//     date+="th"
// }
// if(hour <= 11){
//     ampm= "Am"
// }else{
//     ampm = "Pm"
// }
// // if(hour ===0){
// //     hour == 12
// // }else if(hour > 12){
// // hour = hour-12
// // }console.log(hour);

// // jan 3rd 10:00Am

// console.log(`${currentMonth} ${date} ${hour}:${minutes} ${ampm}` );
// // console.log(date);

// for (let y = 2025; y <= 2050; y++) {
    
//     for (let m = 1; m <= 12; m++) {
        
//         for (let d = 1; d <= 31; d++) {
            
//             let day = new Date(`${y}-${m}-${d}`)

//             if (day.getDay() == 0 && day.getDate() == 14 && day.getMonth() == 7) {
//                 console.log(day);
                
//             }
            
//         }
        
//     }

// }
// --------------------------------------------------------------------------------------
// FUNCTION
// function foo(a){
//     console.log("function", a);
// }
// console.log("hello world ");
// foo("javascript") // agr ap arggumnet pas krte ho toh parameter bhi denga hoga

// function foo(a,b){
// return a + b // kuch bhi return krne per wo arggument m milta hy toh isko varaible m store krna hoga
// }

// console.log("hello world ");
// foo(6,6)



// greet()
// let greet = function(){
//     console.log("greet");
//     // app.js:82 Uncaught ReferenceError: Cannot access 'greet' before initialization
// }

// arrow function
let abc = () =>{
    console.log("arrow function");
    
}
abc()







