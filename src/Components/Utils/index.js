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

const id = localStorage.getItem('id')

export const AddCarObject = [
  {id: 1, title: 'Добавление товара', element: <FirstPart id={id} />},
  {id: 2, title: 'Добавление цены', element: <SecondPart id={id} />},
  {id: 3, title: 'Добавление фотографии', element: <ThirdPart id={id} />},
]

export const selectList = [
  {id: 1, title: 'Toyota', marks: {
    mark: 'Camry 70',
    mark: 'Highlander',
    mark: 'Land Cruiser',
    mark: '4RUNNER'
  }},
  {id: 2, title: 'Mercedes-Benz', marks: {
    mark: 'e class',
    mark: 'a class',
    mark: 'a class AMG',
    mark: 'b class',
  }},
  {id: 3, title: 'Honda', marks: {
    mark: 'cr-v',
    mark: 'accord',
    mark: 'civic',
    mark: 'freed',
    mark: "jazz"
  }},
  {id: 4, title: 'Tesla', marks: {
    mark: 'model-X',
    mark: 'model-S',
    mark: 'model-3',
    mark: 'model-Y',
  }},
  {id: 5, title: 'Hyundai', marks: {
    mark: 'creta',
    mark: 'tucson',
    mark: 'santa FE',
    mark: 'palisade'
  }},
  {id: 6, title: 'Chevrolet', marks: {
    mark: 'niva',
    mark: 'lacetti',
    mark: 'cruze',
    mark: 'aveo',
    mark: 'camaro'
  }},
]

export const toyotasMarks = [
  {id: 1, title: 'Camry 70'},
  {id: 2, title: 'Highlander'},
  {id: 3, title: 'Land Cruiser'},
  {id: 4, title: '4RUNNER'},
]

export const mercedesesMarks = [
  {id: 5, title: 'e class'},
  {id: 6, title: 'a class'},
  {id: 7, title: 'a class AMG'},
  {id: 8, title: 'b class'},
]

export const hondasMarks = [
  {id: 9, title: 'cr-v'},
  {id: 10, title: 'accord'},
  {id: 11, title: 'civic'},
  {id: 12, title: 'freed'},
  {id: 13, title: 'jazz'},
]

export const teslasMarks = [
  {id: 14, title: 'model-X'},
  {id: 15, title: 'model-S'},
  {id: 16, title: 'model-3'},
  {id: 17, title: 'model-Y'},
]

export const hyunadisMarks = [
  {id: 18, title: 'creta'},
  {id: 19, title: 'tucson'},
  {id: 20, title: 'santa FE'},
  {id: 21, title: 'palisade'},
]

export const chevroletsMarks = [
  {id: 22, title: 'niva'},
  {id: 23, title: 'lacetti'},
  {id: 24, title: 'cruze'},
  {id: 25, title: 'aveo'},
  {id: 26, title: 'camaro'},
]

export const countries = [
  {id: 1, title: 'Америка'},
  {id: 2, title: 'Германия'},
  {id: 3, title: 'Абхазия'},
  {id: 4, title: 'Япония'},
  {id: 5, title: 'Корея'},
]


export const kuzovList = [
  {id: 1, title: 'Седан'},
  {id: 2, title: 'Внедорожник'},
  {id: 3, title: 'Хэтчбек'},
  {id: 4, title: 'Универсал'},
  {id: 5, title: 'Кабриолет'},
  {id: 6, title: 'Лимузин'},
  {id: 7, title: 'Купе'},
  {id: 8, title: 'Пикап'},
]


export const toplivoList = [
  {id: 1, title: 'Бензин'},
  {id: 2, title: 'Газ'},
  {id: 3, title: 'Дизель'},
  {id: 4, title: 'Электро'},
]