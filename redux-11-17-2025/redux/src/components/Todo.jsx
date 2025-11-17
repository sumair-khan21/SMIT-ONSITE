import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from '../features/TodoSlice'

const Todo = () => {
  const dispatch = useDispatch()
  const [title, settitle] = useState('')
  const [existingId, setexistingId] = useState(null)
  const [existingText, setexistingText] = useState('')
  const allTodo = useSelector((item) => item.todo.todos)

  const handleAddTodo = () => {
    if(title.trim()){
      dispatch(addTodo({title: title}))
      settitle('')
    }
  }

  const handleEdit = (todo) => {
    setexistingId(todo.id)
    setexistingText(todo.title)
  }

  const handleUpdate = () => {
    if(existingText.trim()){
      dispatch(editTodo({id: existingId, title: existingText}))
      setexistingId(null)
      setexistingText('')
    }
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <>
      <input type="text" value={title} onChange={(e)=> settitle(e.target.value)}/>
      <button onClick={handleAddTodo}>Click</button>
      {
        allTodo.length === 0 ? (
          <p>no task listed</p>
        ): (
          allTodo.map((todo)=>(
            <div key={todo.id}> 
              {
                existingId === todo.id ? (
                  <>
                    <input type="text" value={existingText} onChange={(e)=> setexistingText(e.target.value)}/>
                    <button onClick={handleUpdate}>save</button>
                    <button onClick={()=> setexistingId(null)}>cancel</button>
                  </>
                ): (
                  <p>
                    {todo.title}
                    <button onClick={()=> handleEdit(todo)}>edit</button>
                    <button onClick={()=> handleDelete(todo.id)}>delete</button>
                  </p>
                )
              }
            </div>
          ))
        )
      }
    </>
  )
}

export default Todo