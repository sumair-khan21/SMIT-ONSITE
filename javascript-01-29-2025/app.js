// string ka no  no m convert kr deta hy
// var myInteger = parseInt("1.9999");
// var myInteger = parseInt("1.9999abc");
// console.log(myInteger);
// // 
// var myFractional = parseFloat("1.9999abc");
// console.log(+myFractional);



// to string koi bhi no ko string  convert kr deta  hy
// var numberAsNumber = 1234;
// var numberAsString = numberAsNumber.toString();

// // tofixed koi bhi no ko point k bad jinte no chahiye wo de dega
// var prettyTotal = total.toFixed(2);

// // 
//  var str = num.toString();
//  if (str.charAt(str.length - 1) === "5") {
//  str = str.slice(0, str.length - 1) + "6";
//  }
//  num = Number(str);
//  prettyNum = num.toFixed(2);


//                            DATE AND TIME
// date object hy Date capital D likhte hain New Date new ek key word hy
// var rightNow = new Date();
// console.log(typeof(rightNow));
// charAt, indexOf, or slice. inko phle string m convert krna parega kyun k object hy
// console.log(rightNow.slice(0,10));

// var rightNow = new Date("10/15/2024");
// console.log(rightNow);
 

// var rightNow = new Date("10/15/2024");

// console.log(rightNow.toLocaleDateString()); //10/15/2024 only date
// console.log(rightNow.toDateString()); // Tue Oct 15 2024 day and date
// console.log(rightNow.toString()); //Tue Oct 15 2024 00:00:00 GMT+0500 (Pakistan Standard Time) date time and day


// var rightNow = new Date();
// console.log(rightNow.getDay()); // 0-6 0 is sunday
// console.log(rightNow.getMonth()); //0-11 0 is january 
// console.log(rightNow.getDate()); //1-31 1st  of month
// console.log(rightNow.getFullYear()); //4 digit m no bta dega 2025
// console.log(rightNow.getHours()); // 0 - 59
// console.log(rightNow.getMinutes()); // 0 - 59
// console.log(rightNow.getSeconds()); 
// console.log(rightNow.getMilliseconds()); //1000
// console.log(rightNow.getTime()); //1st jan 1970 to now


// var rightNow = new Date();
// var dob = new Date('01-01-2005')
// console.log(rightNow.getTime()-dob.getTime());
// console.log(dob.getTime());


// var dob = new Date('12-21-2001')
// console.log(dob);

var today = new Date();
console.log(today);
var msToday = today.getTime();
console.log(msToday);
var doomsday = new Date("June 30, 2035");
console.log(doomsday);
var msDoomsday = doomsday.getTime();
console.log(msDoomsday);
var msDiff = msDoomsday - msToday;
console.log(msDiff);
var dDiff = msDiff / (1000 * 60 * 60 * 24);
dDiff = Math.floor(dDiff);
console.log(dDiff);
