import React from 'react'
import { Box, Typography } from '@mui/material'
import { useGetCars } from '../../Helpers'
import CarCard from '../../Components/CarsCard'

const CarsPage = () => {
  const { base } = useGetCars()

  return (
    <Box
      padding={'100px'}
    >
      <Typography
        variant='h5'
        fontFamily={'montserrat'}
      >
        Все машины
      </Typography>
      <CarCard />
    </Box>
  )
}

export default CarsPage