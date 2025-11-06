// THE DOM IS THE DOCUMENT OBJECT MODEL
// THE DOM IS THE TREE OF HTML ELEMENTS
// console.log(document.all[6].innerText),document.all[6].innerText="I'm the new text",console.log(document);
// console.log(document.all[8].innerText)
// console.log(document.all[6].innerText)

// document.all[6].innerText = "I'm the new text"
// console.log(document);

// console.dir(document.getElementsByTagName("p")[0].innerText);
// console.log(document.getElementsByTagName('p')[0].children[0].innerText = "I'm the new text");

// console.log(document.getElementById("para1"));

// document.childNodes[0].childNodes[1].childNodes[1].childNodes[1]; is the
// first child of the document, <html></html>

// querySelector is used to select the first element that matches a specified CSS selector(s)
// querySelectorAll is used to select all elements that match a specified CSS selector(s)
// var get = document.querySelector("#para1");
// var get = document.querySelectorAll("#para1");

// console.log(get);
// console.log(get);

// appendChild is used to add a new child node to the end of the child nodes of a specified element

// var para = document.createElement("p");
// var node = document.createTextNode("This is a new paragraph.");
// para.appendChild(node);
// var element = document.getElementById("para1");
// element.appendChild(para);


// var text = document.getElementById("para1");

// function addPara(){
//     var li = document.createElement("li");
//     var node = document.createTextNode("This is a new paragraph.");
//     li.appendChild(node);
//     var element = document.getElementById("para1");
//     element.appendChild(li);
// }

