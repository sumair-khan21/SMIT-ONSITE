// Event object
// addEventListener and removeEventListener add or remove krne k liye hota
// settimeout kisi bhi event ya function ko chalane k liye use hota hy agr koi cheez thoray time bad chalni hy means 5 sec k bad

// const button = document.getElementById('btn')
// button.addEventListener('click', function(){
//     setTimeout(function() {
//         alert('This alert pops up after 5 seconds!');
//     }, 5000); // 5000 milliseconds = 5 seconds
// })

// --------------------------------------------
// this

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName()); // John Doe


// function demo() {
//     console.log(this);
// }
// demo(); // Logs global object (in Node.js) or window object (in browsers)

// const button = document.getElementById('btn');
// button.addEventListener('click', function() {
//     console.log(this); // Logs the button element
// });

// ---------------------------------------------

//     let myButton = document.getElementById('btn').addEventListener("click", function(){
//   let button = document.getElementsByClassName('edit-btn')
//   let button1 = document.querySelectorAll('del-btn')
//   console.log(button);
//   for(let i = 0; i < button.length; i++){
//     button[i].addEventListener('click', function(){
//         console.log(this);  
//     })

    
//   }
  
//     })
// ---------------------------------------------
// this and event.target
// diff between
// onclick se ek hi event use kr sakhte hain
// addeventlistner se multiple event handle kr sakhte hain

// ------------------------------------------------
// Object 
// multiple data store krne k liye use krte hain
// agr kisi naam k beech m space ho toh [] use karenge
// agr kisi bhi value ko get krna ho toh .
// agr key m space ho toh string m rakhna hoga key



// browser per data store krwana k liye localstorage use hoga is m data jb tk rehta jb tk manual delete na ho
// localstoreage m bhi key or value hoti hain ek naam ki do key nhi ban sakhti
// setitem m do cheezen ati key and value
// sari localstorege ko remove krna hy toh clear agr ek ko toh remove
// mujhe agr pora data save krwana hy string m toh
// 
// JSON.stringify(key pas krna )
// ab data string m toh agya or local m save bhi ho gya lekin hame object m data chahiye JSON.parse se wapas object m convert ho jate
// localStorage.setItem('username')
// session storage

// let inp = document.getElementById('text');
// let todo = document.getElementById('todo');
// let para = document.getElementById('para')
// todo.addEventListener('click', function(){
//     console.log(inp.value);
//     localStorage.setItem('todo' , inp.value);
//     para.innerHTML += localStorage.getItem('todo');
//     inp.value = "" 
// })

// Data store karna
// localStorage.setItem("name", "Sumair");

// Data retrieve karna
// let userName = localStorage.getItem("name");
// console.log(userName); // Output: Sumair

// Data delete karna
// localStorage.removeItem("name");

// Poora localStorage clear karna
// localStorage.clear();



// let text = document.getElementById('text')
// let todoButton = document.getElementById('todo')
// let para = document.getElementById('para')

// todoButton.addEventListener("click", function(){
//     localStorage.setItem('todo', text.value)
//     para.innerHTML += localStorage.getItem('todo')
//     // localStorage.removeItem('todo')
//     localStorage.clear()
//     text.value = ''
// })
 

// let inp = document.getElementById('text');
// let todo = document.getElementById('todo');
// let para = document.getElementById('para');

// todo.addEventListener('click', function(){
//     // Retrieve existing todos or initialize an empty array
//     let existingTodos = localStorage.getItem('todos');
//     let todos = existingTodos ? JSON.parse(existingTodos) : [];

//     // Add new todo to the array
//     todos.push(inp.value);

//     // Save the updated todos array
//     localStorage.setItem('todos', JSON.stringify(todos));

//     // Simplified display update: just add the new todo
//     para.innerHTML += `<p>${inp.value}</p>`;

//     // Clear input field
//     inp.value = "";
// })



// const std = {
//     course: "javascript",
//     isActive: true
// };

// localStorage.setItem('std', JSON.stringify(std))
// let data = localStorage.getItem('std')
// let data1 = localStorage.setItem('std', JSON.parse(std))
// console.log(data1);
// console.log(data);
// console.log(std);


let inpText = document.getElementById('text')
let todoBtn = document.getElementById('todo')
let show = document.getElementById('show')
// JSON.parse(localStorage.getItem('todo')) localstorage se data lekr araha hy string se wapas convert krne liye use hota hy arr se string m convert kr deta hy
let todoData = JSON.parse(localStorage.getItem('todo')) || [];
render()
function render(){
    show.innerHTML = ""
    for(let i = 0; i < todoData.length; i++){
        show.innerHTML += `<li>
        ${todoData[i]} 
        <button  onclick="edit(${i})">Edit</button>
        <button class="del" onclick="deleteItem(${i})">del</button></li>
        `
    }
}

function add(){
   if(inpText.value.trim() !== ""){
    todoData.push(inpText.value);
    localStorage.setItem('todo', JSON.stringify(todoData));
    console.log(todoData);
    inpText.value = ``
    render()
   }else{
    alert('enter a todo')
   }
}

function deleteItem(index){
 todoData.splice(index,1);
 localStorage.setItem('todo', JSON.stringify(todoData));
 render()
}

function edit(index){
    let updated = prompt("Edit your todo", todoData[index])
    if(updated !== null && updated.trim() !== ""){
     todoData[index] = updated
     localStorage.setItem('todo', JSON.stringify(todoData)
    )
    render()
    }
}











// let inpText = document.getElementById("text");
// let todoBtn = document.getElementById("todo");
// let show = document.getElementById("show");
// let todoData = JSON.parse(localStorage.getItem("todo")) || []; // Load previous data

// // Function to render todos
// function render() {
//   show.innerHTML = ""; // Clear old list before rendering
//   for (let i = 0; i < todoData.length; i++) {
//     show.innerHTML += `<li>
//       ${todoData[i]} 
//       <button class="edit" onclick="editItem(${i})">Edit</button>
//       <button class="del" onclick="deleteItem(${i})">Delete</button>
//     </li>`;
//   }
// }

// // Function to add new todo
// function add() {
//   if (inpText.value.trim() !== "") {
//     todoData.push(inpText.value);
//     localStorage.setItem("todo", JSON.stringify(todoData));
//     inpText.value = "";
//     render();
//   } else {
//     alert("Please enter a todo!");
//   }
// }

// // Function to delete a specific item
// function deleteItem(index) {
//   todoData.splice(index, 1);
//   localStorage.setItem("todo", JSON.stringify(todoData));
//   render();
// }

// // Function to edit a specific item
// function editItem(index) {
//   let newValue = prompt("Edit your todo:", todoData[index]);
//   if (newValue !== null && newValue.trim() !== "") {
//     todoData[index] = newValue;
//     localStorage.setItem("todo", JSON.stringify(todoData));
//     render();
//   }
// }

// // Load saved todos when page loads
// render();
