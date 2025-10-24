import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const [inputs, setInputs] = useState({
      id: "",
      title: "",
      author: ""
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/users')
        setData(res.data)
        // console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])


  const handleChange = (e) =>{
    
    setInputs({...inputs, [e.target.name]: e.target.value})
    // console.log("inputs",inputs);
    
  }


  const handleSubmit = async (e) =>{
    e.preventDefault()
    // console.log(inputs.author);
    // console.log(inputs.title);

    try {
        const res = await axios.post('http://localhost:3000/users', inputs)
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
  }

  const handleEdit = async () =>{
    try {
        const res = await axios.put(`http://localhost:3000/users/${inputs.id}`, inputs)
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
  }


const handleDelete = async () =>{
    try {
        const res = await axios.delete(`http://localhost:3000/users/${inputs.id}`, inputs)
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
  }

  
  return (
    <>
      {/* {data.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <h2>{post.author}</h2>
        </div>
      ))} */}
      <input type="text"  onChange={handleChange} value={inputs.title}   name="title" placeholder='title'/>
      <input type="text"  onChange={handleChange} value={inputs.author} name="author" placeholder='author'/>
      <input type="text"  onChange={handleChange} value={inputs.id} name="id" placeholder='id'/>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>



    </>
  )
}

export default App
