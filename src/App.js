import axios from 'axios'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BASE_URL } from './Configs'
import CarsMore from './Pages/CarsMore'
import './App.css'
import Home from './Pages/Home'
import Headers from './Components/Header'
import CarsPage from './Pages/CarPage'

axios.defaults.baseURL = BASE_URL

const App = () => {

  return (
    <>
      <header>
        <Headers />
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<CarsPage />} />
        <Route path='/carsmore/:id' element={<CarsMore />}/>
      </Routes>
    </>
  )
}

export default App