// import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);


// function App() {
//   // console.log(supabase);
//   const [instruments, setInstruments] = useState([]);

//   async function addInstrument() {
//     const instrumentName = prompt("Enter instrument name");
//     if (instrumentName) {
//       await supabase.from("reactPractice").insert({ test: instrumentName });
//       // getInstruments(); 
//     }
//   }



//   useEffect(() => {
//       async function getInstruments() {
//     const { data } = await supabase.from("reactPractice").select();
//     setInstruments(data);
//     console.log(data);
    
//   }

//     getInstruments();
    
//   }, []);



//   return (
//     <>
//     <h1>Instruments</h1>
//     <button onClick={addInstrument}>Add Instrument</button>

//     <ul>
//       {instruments.map((instrument, index) => (
//         <li key={index}>{instrument.test}</li>
//       ))}
//     </ul>
//     </>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react'
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);


const App = () => {
  // const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

  const [todos, setTodos] = useState([])
  const [inputs, setInputs] = useState("")
  const [editId, setEditId] = useState(null)

  let fetchTodos = async () =>{
    const { data, error } = await supabase
  .from('reactPractice')
  .select()
  .order('id', { ascending: true })
  if(error){
    alert(error.message)
  }
  else{
    console.log(data);
    
    setTodos(data)
  }
  }

  useEffect(()=>{
    fetchTodos()  

  },[])

  let handleSubmit = async (e) => {
    e.preventDefault()
    if(!inputs){
      alert("Please enter a todo")
      return
    }
  if(editId){
   const { error } = await supabase
  .from('reactPractice')
  .update({ test: inputs })
  .eq('id', editId)
  if(error){
    alert(error.message)
  }
  else{
    setInputs("")
    setEditId(null)
    fetchTodos()
  }
  }else{
   const { error } = await supabase
  .from('reactPractice')
  .insert({ test: inputs })
  if(error){
    alert(error.message)
  }
  else{
    setInputs("")
    fetchTodos()
  }
  }
}


const handleEdit = (todo) => {
  setEditId(todo.id)
  setInputs(todo.test)
}

const handleDelete = async (id) => {
  const response = await supabase
  .from('reactPractice')
  .delete()
  .eq('id', id)
  if(response.error){
    alert(response.error.message)
  }
  else{
    setInputs("")
    setEditId(null)
    fetchTodos()
  }
}

  return (
    <>

    <ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputs} onChange={(e)=> setInputs(e.target.value)} placeholder='enter todo'/>
        <button type='submit'>{editId ? "Update" : "Add"}</button>
      </form>
      {
        todos.map((todo, index)=> (
          <li key={index}>{todo.test} <button onClick={()=> handleEdit(todo)}>Edit</button> <button onClick={()=> handleDelete(todo.id)}>Delete</button></li>
        ))
      }
    </ul>
     
    </>
  )
}

export default App
