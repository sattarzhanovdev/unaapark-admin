import React from 'react'
import { Box, Typography } from '@mui/material'
import { useGetCars } from '../../Helpers'
import CarCard from '../../Components/CarsCard'
import { useNavigate } from 'react-router-dom'

const CarsPage = () => {
  const { base } = useGetCars()

  const navigate = useNavigate()

  const auth = JSON.parse(localStorage.getItem('auth'))
  React.useEffect(() => {
    if(auth){
      navigate('/cars')
    }else{
      navigate('/auth/login')
    }
  }, [auth])

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