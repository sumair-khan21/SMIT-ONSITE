import React from 'react'

function Son(props) {
   return(
    <div style={{background: 'lightgreen', padding: "20px"}}>
        <h2>Son</h2>
        <div>{props.children}</div>
    </div>
   )
    
}


function Daughter(props) {
   return(
    <div style={{background: 'lightblue', padding: "20px"}}>
        <h2>Daughter</h2>
        <div>{props.children}</div>
    </div>
   )
    
}

const Parent = () => {
  return (
    <>
    <h1>My Two Children</h1>
    <Son>
        <p>This was written in the Parent component,
          but displayed as a part of the Son component</p>
    </Son>
    <Daughter>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
        </p>
    </Daughter>
    </>
  )
}

export default Parent