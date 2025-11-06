
import React, { useState } from 'react'

const Todo = () => {

    let [text, setText] = useState("")
    let [todos, setTodos] = useState([])

    let AddTodo = () => {
        // console.log("abc");
        setTodos([...todos, text])
        setText("")
    }

    let deleteTodo = (index) => {
        // console.log(index);
        // setTodos(todos[index])
        let updateTodo = [...todos]
        updateTodo.splice(index, 1)
        setTodos(updateTodo)
    }

    let editTodo = (index) =>{
        // console.log(index);
        let newTodo = prompt("Enter New Todo")
        // console.log(newTodo);
        let updatedTodo = [...todos]
        updatedTodo[index] = newTodo
        setTodos(updatedTodo)
    }


    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={AddTodo} >Add Todo</button>

            <ul>
                {
                    todos.map((ele, index) => (
                        <li key={index}>{ele} <button  onClick={() => (deleteTodo(index))}>Delete</button>
                        <button onClick={()=> (editTodo(index))}>Edit</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Todo
