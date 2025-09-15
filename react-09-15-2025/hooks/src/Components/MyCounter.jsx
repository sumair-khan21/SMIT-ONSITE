import React, { useState } from 'react'

const MyCounter = () => {
    const [count, setCount] = useState(0);



  return (
    <>

     <h1 className='heading'>The current value is {count}</h1>
    <button onClick={()=> setCount(count +1)}>Increment</button>
    <button onClick={()=> {count > 0 ? setCount(count -1 ) : null}}>Decrement</button>
   
    </>
  )
}

export default MyCounter