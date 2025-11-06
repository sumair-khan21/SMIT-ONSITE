let data = ['a','b','c','d']
let todoList = document.getElementById('todoList');

function render(){

    todoList.innerHTML = "";
    for(let i = 0; i < data.length; i++){
        todoList.innerHTML += `
    <li>${data[i]} <button onclick="edit(${[i]})">Edit</button> <button onclick="del(${[i]})">Del</button></li>`
    }
}

render()

function del(anees){
    data.splice(anees,1);
    render()
}

function edit(index){
    // console.log(data[index]);
    let newValue = prompt("Enter New Todo", data[index])
    if(newValue !== null){
        data[index] = newValue
        render()
    }

}