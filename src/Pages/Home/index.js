import React from 'react'
import { Box } from '@mui/material'
import Headers from '../../Components/Header'
import Statistics from '../../Components/Statistics'
import AddOrderer from '../../Components/AddOrderer'
import Calendars from '../../Components/Calendar'

const Home = () => {
  return (
    <Box>
      
      <main>
        <Statistics />
        <AddOrderer />
      </main>
    </Box>
  )
}

export default Home