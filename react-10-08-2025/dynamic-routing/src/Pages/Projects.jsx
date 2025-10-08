import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Projects = () => {
  return (
    <>

    <h1>Projects</h1>
    <Link to="car">Car Projects</Link>
    <Link to="">Bike Projects</Link>
    <Link to="building">Building Projects</Link>
    <Outlet />
    </>
  )
}

export default Projects
