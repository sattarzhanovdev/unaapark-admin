import React from 'react'
import { Box, Button, Card, Typography } from '@mui/material'
import { API } from '../../API'
import { useNavigate } from 'react-router-dom'

const CancelledOrders = () => {
  const [ database, setDatabase ] = React.useState(null)

  const navigate = useNavigate()

  React.useEffect(() => {
    API.getCancelledOrders()
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              id,
              ...item
            }
          })

        setDatabase(result)
      })

    const auth = JSON.parse(localStorage.getItem('auth'))

    if(auth){
      navigate('/cancelledOrders')
    }else{
      navigate('/auth/login')
    }
  }, [])

  return (
    <Box
      padding={'100px'}
      display={'flex'}
      flexWrap={'wrap'}
      gap={'15px'}
    >
      {
        database ? database.map(({id, car, name, number, timeFrom, timeTo}, i) => (
          <Card
            key={id}
            style={{
              width: '350px',
              height: '150px',
              display: 'flex',
              padding: '25px',
              justifyContent: 'flex-start',
              flexDirection: 'column',
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
          </Card>
        )) : <Typography variant='h5' fontFamily={'montserrat'}>Ничего не найдено!</Typography>
      }
    </Box>
  )
}

export default CancelledOrders