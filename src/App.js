import React from 'react'
import About from './Pages/about/About'
import Contact from './Pages/contact/Contact'
import Services from './Pages/services/Services'
import Home from './Pages/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './Pages/Login'



const App = () => {
  const authenticated= true
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </BrowserRouter>

   
  )
}

export default App