import React from 'react'
import { SiGoogleanalytics} from 'react-icons/si'
import { AiOutlineCar, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { BiMessageSquareDetail,BiEdit } from 'react-icons/bi'
import { TiTick } from 'react-icons/ti'
import FirstPart from '../../Pages/AddCar/FirstPart'
import SecondPart from '../../Pages/AddCar/SecondPart'
import ThirdPart from '../../Pages/AddCar/ThirdPart'

export const sideList = [
  {id: 1, icon: <SiGoogleanalytics />, title: 'Статистика', path: '/'},
  {id: 2, icon: <AiOutlineCar />, title: 'Машины', path: '/cars'},
  {id: 3, icon: <BiMessageSquareDetail />, title: 'Сообщения', path: '/messages'},
  {id: 4, icon: <BiEdit />, title: 'Изменение', path: '/edit'},
  {id: 5, icon: <TiTick />, title: 'Успешные заказы', path: '/successOrders'},
  {id: 6, icon: <AiOutlineClose />, title: 'Отмененные заказы', path: '/cancelledOrders'},
  {id: 7, icon: <AiOutlinePlus />, title: 'Добавить товар', path: '/addCar'},
]

export const AddCarObject = [
  {id: 1, title: 'Добавление товара', element: <FirstPart />},
  {id: 2, title: 'Добавление цены', element: <SecondPart />},
  {id: 3, title: 'Добавление фотографии', element: <ThirdPart />},
]

export const selectList = [
  {id: 1, title: 'Toyota'},
  {id: 2, title: 'Mercedes-Benz'},
  {id: 3, title: 'Honda'},
  {id: 4, title: 'Tesla'},
  {id: 5, title: 'Hyundai'},
  {id: 6, title: 'Chevrolet'},
]