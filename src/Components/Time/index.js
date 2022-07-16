import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Time = () => {  
  const [ time, setTime ] = React.useState(0)

  React.useEffect(() => {
    function showTime () {
      var date = new Date()
      var h = date.getHours()
      var m = date.getMinutes()
      var s = date.getSeconds()
  
      var session = 'AM'
  
      if(h === 0){
        h = 12;
      }
  
      if(h > 12){
        h = h - 12;
        session = 'PM'
      }
  
      h = h < 10 ? '0' + h : h
      m = m < 10 ? '0' + m : m
      s = s < 10 ? '0' + s : s
  
      var TIME = h + ':' + m + ':' + s + '' + session
      setTime(TIME)
  
      setTimeout(showTime, 1000);
    }
  
    showTime()
  }, [time])

  return (
    <Box>
      <Typography
        variant='h5'
        fontFamily={'montserrat'}
        marginBottom={'15px'}
      >
        Время
      </Typography>
      <Card
        style={{
          width: '400px',
          height: '35px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {time}
      </Card>
    </Box>
  )
}

export default Time