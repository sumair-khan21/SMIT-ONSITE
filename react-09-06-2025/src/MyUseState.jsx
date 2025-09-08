import {React, useState} from 'react'
import './index.css'


const MyUseState = () => {
    const [num, setNum] = useState(0)
  return (
    <>
    <h1>Number is {num}</h1>
    <button className='btn' onClick={()=>{setNum(num + 1)}}>Increment</button>
    <button className='btn' onClick={()=>{num > 0 ? setNum(num - 1) : null}}>Decrement</button>
    </>
  )
}

export default MyUseState