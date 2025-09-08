import React, { useState } from 'react'
import './index.css'
import MyUseState from './MyUseState'


const App = () => {
    // let userName = "Sumair Khan"
    // let age = 22

    // const [a, setA] = useState(10)

    // let abc = () =>{
    //     console.log("Button Clicked");
    //     setA(20)
    // }

  return (
    <>
    {/* <h1>Hello {userName}</h1>
    <h1>Hello {age}</h1> */}
    {/* <h1>Value of a is {a}</h1>
    <button className='btn' onClick={abc}>Click Me</button> */}


    {/* ========================================= useState ========================================== */}
    <MyUseState />
    </>
  )
}

export default App