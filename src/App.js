import axios from 'axios'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BASE_URL } from './Configs'
import CarsMore from './Pages/CarsMore'
import './App.css'
import Home from './Pages/Home'
import Headers from './Components/Header'
import CarsPage from './Pages/CarPage'
import AddCar from './Pages/AddCar'
import SuccessOrders from './Pages/SuccessOrders'
import CancelledOrders from './Pages/CancelledOrders'
import Auth from './Pages/Auth'
import Edit from './Pages/Edit'
import { Chat } from '@mui/icons-material'
import EditCar from './Pages/EditCar'
import JivoChat from './Components/Jivo Chat'
import { API } from './API'

axios.defaults.baseURL = BASE_URL

const App = () => { 

  return (
    <>
      <header>
        <Headers />
      </header>

      <Routes>
        <Route path='/auth/login' element={<Auth />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
        <Route path='/cars' element={<CarsPage />} />
        <Route path='/messages' element={<JivoChat />} />
        <Route path='/successOrders' element={<SuccessOrders />} />
        <Route path='/cancelledOrders' element={<CancelledOrders />} />
        <Route path='/addCar' element={<AddCar />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/editCar' element={<EditCar />} />
        <Route path='/carsmore/:id' element={<CarsMore />}/>
      </Routes>
    </>

  )
}

export default App