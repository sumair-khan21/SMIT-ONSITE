// local storage
// localStorage.setItem(key, value);

// const key = "name";
// const value = "John Doe";


// const name = localStorage.getItem(key);
// console.log(name);

// let userName = document.getElementById('userName');

// let data = localStorage.getItem('userName');


// localStorage.setItem('email','js@example.com')
// let email = localStorage.getItem('email')
// console.log(email)





let todoText = document.getElementById('todoText');
let btn = document.getElementById('addBtn');
let todoList = document.getElementById('todoList');

   // apni original condition m convert krne k liye
let data = JSON.parse(localStorage.getItem('todo') ) || [];
// let data =  [];



function render(){
    todoList.innerHTML = "";
    for(let i = 0; i < data.length; i++){
        todoList.innerHTML += `<li>${data[i]} <button>Edit</button onclick="edit(${[i]})"> <button onclick="del()">Del</button></li> `
    }
}
render()


btn.addEventListener('click',function(){
    data.push(todoText.value)
    // console.log(data)
                            // data ko string m convert krne k liye
    localStorage.setItem('todo', JSON.stringify(data));
    // localStorage.setItem('anees', data);
    render()
    todoText.value = '';
})

function del(){
    
    localStorage.removeItem('todo');
    window.location.reload();
}


// function edit(index){
//     let newValue = prompt("Enter new Todo", )
// }