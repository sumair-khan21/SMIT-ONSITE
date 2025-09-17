import React from 'react'

const Navbar = (props) => {
    console.log(props.fruits);
    let foo = (a)=>{
        // alert("Alert Show");
        alert(a);
    }
    
    // console.log(props.children[0].props.children);   
    
  return (
<>
{/* <h1>this is {title}</h1>
<h1>this is {Num}</h1> */}
{
    props.fruits.map((item, index)=>(
        <>
        <li key={index}>{item} <button onClick={()=>{foo("Html")}}>Click</button></li>
        </>
    ))
}

</>
  )
}

export default Navbar