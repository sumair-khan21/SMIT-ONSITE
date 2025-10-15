// import React from 'react'

// const Child = ({abc}) => {
//     const sendMsg = ()=>{
//         abc('hello my name is react')
//     }
//   return (
//     <div>
//       <h1>Child</h1>
//       <button onClick={sendMsg}>Click Me</button>
//     </div>
//   )
// }

// export default Child




import React, { useContext } from 'react'
import { UserContext } from './context'

const Child = () => {
    let user = useContext(UserContext)
  return (
    <div>
        <h1>Child</h1>
        <h2>User: {user}</h2>

      
    </div>
  )
}

export default Child
