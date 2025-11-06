import React from 'react'

const MyName = ({name,age}) => {
    console.log(name);
    console.log(age);
    
    
  return (
    <>
    {/* <h1>my name is {props.name}</h1> */}

    <h1>my name is {name} and age is {age}</h1>
    
    </>
  )
}


MyName.defaultProps = {
    name: "khan",
    age: 20
}



export default MyName
