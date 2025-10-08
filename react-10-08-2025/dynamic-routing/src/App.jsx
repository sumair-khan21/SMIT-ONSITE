import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Bike from './Pages/Bike'
import Car from './Pages/Car'
import Building from './Pages/Building'
import User from './Components/User'
import UserDetail from './Components/UserDetail'

const App = () => {
  return (
    <>
    {/* nested routing */}
   {/* <Navbar />
   <Routes>
    <Route path='/'  element={<Home />}/>
    <Route path='/about'  element={<About />}/>

    <Route path='/projects'  element={<Projects />}>
      <Route index element={<Bike />}/>
      <Route path='car' element={<Car />}/>
      <Route path='building' element={<Building />}/>
    </Route>

    <Route path='/*' element={<h1>Page Not Found</h1>}/>
   </Routes> */}

   {/* dynamic routing */}
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<User />} />
    <Route path="/users" element={<User />} />
    <Route path="/users/:id" element={<UserDetail />} />
   </Routes>

    </>
  )
}

export default App
