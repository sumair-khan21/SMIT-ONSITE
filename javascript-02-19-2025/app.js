// innerText
// appendChlid element m dalne k liye end m ata hy ye

// inserBefore ye method kisi nye element ko kisi specific element m add krta hy

// append ye method  paraent k end main ek element add krta hy

// const container = document.getElementById("container");

// const para =  document.createElement("p");
//  para.innerText = "Hello World";

// container.append(para);

// function addPara(){
//     const para =  document.createElement("p");
//     para.innerText = "Hello World";
//     container.append(para);
// }


// prepend parent k start main ek element add krta hy

// parenNode parent node ka child remove krne k liye

// classList.add() class add krne k liye
// container.classList.add("box");

// classListremove class remove krne k liye
// container.classList.remove("box");
// 
// function handleClick(){
//     var button = document.getElementById("button");
//      if (button.innerText === "OFF") {
//             button.innerText = "ON";
//             button.style.backgroundColor = "green";
//         } else {
//             button.innerText = "OFF";
//             button.style.backgroundColor = "red";
//         }
// }



 const box = document.getElementById("box");
 const box1 = document.getElementById("box1");
box.classList.add("box1");

function addPara(button){
    button.innerText = "On";
    box.classList.remove("box1");
}


// toggle ye method class add or remove krne k liye
box.classList.toggle("box");


// hasattribute ye method class check krne k liye
// getattribute ye method value maloom krne k liye

// tasks 
// whatsup ki tarha text formatter banana hy agr koi text paste kare toh readmore ajaye 100 word show ho or end m readless aye
