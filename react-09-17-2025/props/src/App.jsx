import React from 'react'
import Navbar from './Navbar'

const App = () => {
  let fruits = ["Apple", "Mango", "Banana"]
  return (
    <>
    {/* <Navbar title="Home" Num={22}/> */}
    {/* <Navbar title="Home" arr={[]}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officiis voluptatum tempore eum laborum repellendus, explicabo velit! Impedit veritatis iure, voluptates odit beatae rerum? Quas doloribus voluptatem nihil. Quae, officia.</p>

<button>Read More</button>

    </Navbar> */}

    <Navbar fruits={fruits}/>
    </>
  )
}

export default App