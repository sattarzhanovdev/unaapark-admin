import React from "react"
import { API } from "../API"
import { SiGoogleanalytics} from 'react-icons/si'
import { AiOutlineCar } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'

export const StatisticsBase = () => {
  const [ users, setUsers ] = React.useState(0)
  const [ orders, setOrders ] = React.useState(0)
  const [ cars, setCars ] = React.useState(0)

  React.useEffect(() => {
    API.getUsers()
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              id,
              ...item
            }
          })

        setUsers(result.length)
      })

    API.getOrders()
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              id,
              ...item
            }
          })
        
        setOrders(result.length)
      })

    API.get()
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              id,
              ...item
            }
          })
        
        setCars(result.length)
      })
  }, [users, orders, cars])

  const StatisticsList = [
    {id: 1, icon: <BiUser />, title: 'Пользователи', count: users},
    {id: 2, icon: <SiGoogleanalytics />, title: 'Заказы', count: orders},
    {id: 3, icon: <AiOutlineCar />, title: 'Машины', count: cars},
  ]

  return {
    StatisticsList
  }
}


export const useOrderers = () => {
  const [ orderers, setOrderers ] = React.useState(null)

  React.useEffect(() => {
    API.getOrders()
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, value]) => {
            return {
              id, 
              ...value
            }
          })

        setOrderers(result.reverse())
      })
  }, [orderers])

  return {
    orderers
  }
}


export const useGetCars = () => {
  const [ base, setBase ] = React.useState(null)

  React.useEffect(() => {
    API.get()
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return { 
              id, 
              ...item
            }
          })
        
        setBase(result)
      })
  } , [base])

  return {
    base
  }
}