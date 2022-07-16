import { Button, Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Calendar from 'react-calendar'
import { API } from '../../API'
import { useOrderers } from '../../Helpers'
import Calendars from '../Calendar'
import SideOrderer from './SideOrderer'

const AddOrderer = () => {
  const [ showSide, setShowSide ] = React.useState(false)
  const [ name, setName ] = React.useState('')
  const [ number, setNumber ] = React.useState('')
  const [ car, setCar ] = React.useState('')
  const [ timeFrom, setTimeFrom ] = React.useState(0)
  const [ timeTo, setTimeTo ] = React.useState(0)

  const addOrder = () => {
    const data = {name, number, car, timeFrom, timeTo}
    API.postOrder(data)
  }

  const { orderers } = useOrderers()
  
  const postSuccessOrder = (id) => {
    API.getOrdersById(id)
      .then(res => {
        API.postSuccessOrder(res.data)
      })

    API.deleteOrder(id)
  }

  const postCancelledOrder = (id) => {
    API.getOrdersById(id)
      .then(res => {
        API.postCancelledOrders(res.data)
      })

    API.deleteOrder(id)
  }


  return (
    <Box 
      width={'100%'}
      display={'flex'}
    >
      <Box
        width={'1900px'}
        padding={'15px'}
        paddingLeft={'100px'}
      >
        <Button
          onClick={() => setShowSide(!showSide)}
          style={{
            width: '250px',
            background: '#1976d2',
            color: 'white'
          }}
        >
          Добавить заказ
        </Button>

        
        <SideOrderer 
          showSide={showSide} 
          setShowSide={setShowSide} 
          setName={setName} 
          setNumber={setNumber}
          setCar={setCar} 
          setTimeFrom={setTimeFrom} 
          setTimeTo={setTimeTo} 
          addOrder={addOrder}
        />

        <Card
          style={{
            width: '78%',
            height: '50vh',
            margin: '25px 0',
            padding: '25px',
            overflowY: 'scroll',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px'
          }}
        >
          {
            orderers ? orderers.map(({id, car, name, number, timeFrom, timeTo}, i) => (
              <Card
                key={id}
                style={{
                  width: '350px',
                  height: '200px',
                  padding: '25px',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexDirection: 'column',
                  overflowY: 'scroll'
                }}
              >
                <Typography variant='p'>
                  {car}
                </Typography>
                <Typography variant='h6'>
                  {name}
                </Typography>
                <Typography variant='h6'>
                  {number}
                </Typography>
                <Typography variant='p'>
                  Время от: {timeFrom} до: {timeTo}
                </Typography>
                <Box 
                  marginTop={'15px'}
                >
                  <Button 
                    style={{
                      width: '50%',
                      background: 'green',
                      color: 'white'
                    }}
                    onClick={() => postSuccessOrder(id)}
                  >
                    Успешно
                  </Button>
                  <Button 
                    style={{
                      width: '50%',
                      background: 'red',
                      color: 'white'
                    }}
                    onClick={() => postCancelledOrder(id)}
                  >
                    Отменено
                  </Button>
                </Box>
              </Card>
            )) : 
            <Typography 
              variant='h5'
              fontFamily={'montserrat'}
            >
              Заказов нету!
            </Typography>
          }
        </Card>
      </Box>
      <Calendars />
    </Box>
  )
}

export default AddOrderer