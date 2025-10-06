import React from 'react'
import Header from './Components/Header'
import "./App.css"
import HeroSection from './Components/HeroSection'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Course from './Pages/Course'

const App = () => {
  
  return (
   <>
   {/* <Header /> */}
   {/* routing */}
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/course' element={<Course />} />
      <Route path='/contact' element={<Contact />}/>
    </Routes>
   </>
  )
}

export default App
