import React, { useState } from 'react'

const Toggle = () => {
    const [positon, setpositon] = useState(false)

  return (
   <>
   <h1>Hellw Toggle</h1>

   <button onClick={() => setpositon(!positon)}>click</button>
   {positon == "" ? "Hello" : "toggle"}
   </>
  )
}

export default Toggle
