import { Box, Typography } from '@mui/material';
import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Time from '../Time';
import './calendar.css'

const Calendars = () => {
  const [ date, setDate ] = React.useState(new Date())

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <div 
        className='app'
        style={{
          margin: '15px 100px'
        }}
      >
        <Typography 
          variant='h5'
          fontFamily={'montserrat'}
          marginBottom={'15px'}
        >
          Календарь
        </Typography>
        <div className='calendar-container'>
          <Calendar
            onChange={setDate}
            value={date}
            selectRange={true}
          />
        </div>
      </div>
      <Time />
    </Box>
  )
}

export default Calendars