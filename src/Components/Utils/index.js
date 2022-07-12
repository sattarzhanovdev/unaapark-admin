import React from 'react'
import { SiGoogleanalytics} from 'react-icons/si'
import { AiOutlineCar, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { BiMessageSquareDetail,BiEdit } from 'react-icons/bi'
import { TiTick } from 'react-icons/ti'

export const sideList = [
  {id: 1, icon: <SiGoogleanalytics />, title: 'Статистика', path: '/'},
  {id: 2, icon: <AiOutlineCar />, title: 'Машины', path: '/cars'},
  {id: 3, icon: <BiMessageSquareDetail />, title: 'Сообщения', path: '/messages'},
  {id: 4, icon: <BiEdit />, title: 'Изменение', path: '/edit'},
  {id: 5, icon: <TiTick />, title: 'Успешные заказы', path: '/successOrders'},
  {id: 6, icon: <AiOutlineClose />, title: 'Отмененные заказы', path: '/cancelledOrders'},
  {id: 7, icon: <AiOutlinePlus />, title: 'Добавить товар', path: '/addCar'},
]

