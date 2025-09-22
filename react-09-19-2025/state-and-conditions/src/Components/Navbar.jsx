import React from 'react'

const Navbar = (props) => {
  // console.log(props);
  let {userName, age, cnic} = props
  

  return (
    <>
    <h1>{userName}</h1>
    <h1>{age}</h1>
    <h1>{cnic}</h1>
    
    </>
  )
}

export default Navbar