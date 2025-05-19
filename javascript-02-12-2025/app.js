// string indexig
// string are immutable 
// negative index not suppo
// charAt()
// reverse string
// indexOf

// var str = "hello , world";
// str.replace(",", "&");
// console.log(str.slice(0,str.indexOf(","))+"&"+str.slice(str.indexOf(",")+1));

// console.log(str);
 
// split method string ko array me convert karta hai

// includes method koi bhi string pass karta hai to true false return karta hai

// var str = "hello , world";
// console.log(str.includes("hello"));



// var arr = [1,2,3,4,5,6];
// var userInp = 8;

// if(arr.includes(userInp)){
//     console.log("this is already in the array");
// }else{
//     arr.push(userInp);
// }

// console.log(arr);

// join method array ko string me convert karta hai

// var arr = [1,2,3,4,5,6];
// console.log(arr.join(" "));
// console.log(arr.toString());

// string concatination

// var arr = [1,2,3,4,5,6];
// var arr2 = [7,8,9,10,11,12];

// console.log(arr.concat(arr2));

// console.log(arr);


// var arr = [1,2,3,4,5,6];
// // console.log(arr.join("/"));
// let result = '';

// for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//     if (i < arr.length - 1) {
//         result += '/';
//     }
// }

// console.log(result); 


// var num = 123456;
// var str = "";

// for(let i = 0; i <
//      num.length; i++){
//     str += num[i];
//     console.log(typeof num[i]);
    
// }


// console.log(str);


// Events: link 
// <a href="#" onClick="alert('Hi');">Click</a>
// <a href="JavaScript:void(0)" onClick="var greet="hi'; alert(greet);">Click</a> page refresh nahi hogi

// form submit

// <form action="javascript:void(0)" method="post">
//     <input type="text" name="name" id="name" placeholder="Enter your name">
//     <input type="submit" value="Submit">
//     <button type="submit">submit</button>
// </form>

// function submitForm(){
//     alert("form submitted");
// }

// Event button
// {/* <img src="button-greet.png" onClick="alert('Hello world!');"> */}
// <img src="before-pic.jpg" onMouseover="src='after-pic.jpg'"> hover par image change ho jata hai

// var text = document.getElementById("text");
// console.dir(text.innerHTML)
// console.dir(text.innerText)
// console.dir(text.childNodes[1].innerText);


function foo(){
    text.innerHTML = "hello world";
}

