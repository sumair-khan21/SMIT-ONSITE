


// just one button show when bulb on so button show off and when bulb is off so button show on

// if(document.getElementById("on").style.display = "block"){
//     document.getElementById("off").style.display = "none";
// }else{
//     document.getElementById("on").style.display = "none";
//     document.getElementById("off").style.display = "block";
// }

// document.getElementById("on").addEventListener("click", function() {
//     // console.log("on");
//     document.getElementById("image").src = "on.jpg";
//     document.getElementById("on").style.display = "none";
//     document.getElementById("off").style.display = "block";
//     document.getElementById("image").style.display = "block";

// });



// document.getElementById("off").addEventListener("click", function() {
//     console.log("off");
//     document.getElementById("image").src = "off.png";
//     document.getElementById("on").style.display = "block";
//     document.getElementById("off").style.display = "none";
//     document.getElementById("image").style.display = "block";
// });






//   dice game


// document.getElementById("dice").addEventListener("click", function() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     console.log(randomNumber);
    
//     document.getElementById("image").src = `images/dice${randomNumber}.png`;
// });



// using swtich case

// document.getElementById("dice").addEventListener("click", function() {
// let  randomNumber = Math.floor(Math.random() * 6) + 1;

// switch(randomNumber){
//     case 1:
//         document.getElementById("image").src = `images/dice1.png`;
//         break;
//     case 2:
//         document.getElementById("image").src = `images/dice2.png`;
//         break;
//     case 3:
//         document.getElementById("image").src = `images/dice3.png`;
//         break;
//     case 4:
//         document.getElementById("image").src = `images/dice4.png`;
//         break;
//     case 5:
//         document.getElementById("image").src = `images/dice5.png`;
//         break;
//     case 6:
//         document.getElementById("image").src = `images/dice6.png`;
//         break;
//     default:
//         document.getElementById("image").src = `images/dice1.png`;
//         break;
// }
        
        
// });




document.getElementById('dice').addEventListener('click', function(){
    let random = Math.floor(Math.random() * 6) + 1;

    switch(random){
        case 1:
            document.getElementById('image').src = `images/dice1.png`;
            break;
        case 2:
            document.getElementById('image').src = `images/dice2.png`;
            break;
        case 3:
            document.getElementById('image').src = `images/dice3.png`;
            break;
        case 4:
            document.getElementById('image').src = `images/dice4.png`;
            break;
        case 5:
            document.getElementById('image').src = `images/dice5.png`;
            break;
        case 1:
            document.getElementById('image').src = `images/dice6.png`;
            break;
        default:
            document.getElementById('image').src = `image/dice1`.png
    }
})