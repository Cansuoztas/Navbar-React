import React from 'react'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Random from './pages/Random'
import Error from './pages/Error'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Random/>} path='/'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Projects/>} path='/projects'/>
      <Route element={<Contact/>} path='/contact'/>
      <Route element={<Profile/>} path='/profile'/>
      {/* <Route element={<Error/>} path='*'/> */}
       {/* Redirect islemleri icin Navigate componenti kullanilabilir */}
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App