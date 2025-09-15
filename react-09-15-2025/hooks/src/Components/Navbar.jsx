import React from 'react'

const Navbar = (props) => {
  return (
    <>
    <div className='flex justify-between bg-red-700 py-5 px-8'>
        <h1>Hello React</h1>
        <ul className='flex justify-center gap-5 text-white hover:text-gray'>
            <li>{props.model}</li>
            <li>{props.brand}</li>
            <li>{props.color}</li>
        </ul>
    </div>

    </>
  )
}

export default Navbar