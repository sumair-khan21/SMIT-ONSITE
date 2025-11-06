// import React, { useState } from 'react'
// import Child from './Child';

// const Parent = () => {
//     const [msg, setMsg] = useState("Default Value is here")
//     const handleMsg = (a)=>{
//         console.log(a);
//         setMsg(a)
//     }
//    return (
//     <div>
//         <h1>{msg}</h1>
//         <h1>Parent</h1>
//         <Child abc={handleMsg}/>
      
//     </div>
//   )
// }

// export default Parent



import React, { useState } from 'react'
import { UserContext } from './context'
import Child from './Child'

const Parent = () => {
    
    const MyUser = UserContext
    
    const [user, setUser] = useState("React")
     
  return (
    <div>
        <h2>Parent</h2>
        <select value={user} name="" id="" onChange={(e)=> setUser(e.target.value)}>
            <option disabled selected value="SelectCourse">Select Course</option>
            <option value="js">Javascript</option>
            <option value="html">html</option>
            <option value="css">Css</option>
            <option value="react">React</option>
        </select>
        <button onClick={()=>setUser('')}>Clear</button>
        <MyUser.Provider value={user}>
                <Child />
        </MyUser.Provider>
      
    </div>
  )
}

export default Parent
