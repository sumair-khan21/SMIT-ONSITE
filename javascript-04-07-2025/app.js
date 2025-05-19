// DOM 

// id show just only first element
// const heading = document.getElementById('heading')
// console.log(heading);


// saray element ko change  karega
// let heading = document.getElementsByClassName("textStyle")

// heading[2].style.backgroundColor = 'purple'
// heading[1].style.color = 'red'

// console.log(heading);



// const heading = document.getElementsByTagName('h1')
// heading[2].style.backgroundColor = 'purple'
// heading[1].style.color = 'red'
// console.log(heading);



// --------------------------------------------
// querySelector only fetch one element
// fetch h1 class and tagName
// const heading = document.querySelector('#heading')
// heading.style.rotate = "10deg"
// console.log(heading);


// const heading = document.querySelector('.testStyle')
// heading.style.rotate = "10deg"
// console.log(heading);



// -----------------------------------------
// querySelectorAll saray element fetch kr leta hy means 


// const heading = document.querySelectorAll('.testStyle')
// // heading.style.rotate = "10deg"
// heading[2].style.backgroundColor = 'red'
// console.log(heading);


// const heading = document.querySelectorAll('#heading');
// heading[2].style.backgroundColor = 'red'; // now this will work


// ----------------------------------------------
// todo app
let idCount = 1;

function addTodo(){
    let inputValue = document.querySelector("#inputTodo")
    let todoList = document.querySelector("#todoList")

    let todoItem = document.createElement('div')
    todoItem.setAttribute('class', 'todo_item')
    todoItem.setAttribute('id', `${idCount}`)

    todoItem.innerHTML = ` <p class="text">${inputValue.value}</p>
        <button class="del_btn" onclick="deleteTodo(${idCount})">Delete</button>
        <button class="edit_btn"  onclick="editTodo(${idCount})">Edit</button>
    `

    todoList.appendChild(todoItem)
    inputValue.value = ""
    idCount++;
}

function editTodo(id){
    let inputValue = document.querySelector('#inputTodo')
    let todoItem = document.getElementById(id)
    let pTag = todoItem.querySelector('.text');
    pTag.textContent = inputValue.value;
    inputValue.value = ""
}

function deleteTodo(id){
    let todoItem = document.getElementById(id)
    todoItem.remove()
}