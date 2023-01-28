import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../auth/pages/LoginPage'
import Home from '../home/Home'
import Mascotas from '../mascotas/Mascotas'
import Navbar from '../ui/componentes/Navbar'


const AppRouter = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>

          <Route path="mascotas" element={<Mascotas />} />
          <Route path='home' element={<Home/>}/>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter