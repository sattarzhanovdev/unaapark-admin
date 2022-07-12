import { Button, FormGroup, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form'
import { API } from '../../API'

const AddCarForm = () => {
  const [ mark, setMark ] = React.useState('')
  const [ model, setModel ] = React.useState('')
  const [ year, setYear ] = React.useState('')
  const [ photo, setPhoto ] = React.useState('')
  const [ leftPhoto, setLeftPhoto ] = React.useState('')
  const [ backPhoto, setBackPhoto ] = React.useState('')
  const [ salonPhoto, setSalonPhoto ] = React.useState('')
  const [ color, setColor ] = React.useState('')
  const [ transmission, setTransmission ] = React.useState('')
  const [ fuel, setFuel ] = React.useState('')
  const [ petrol, setPetrol ] = React.useState('')
  const [ maxSpeed, setMaxSpeed ] = React.useState('')
  const [ horseStrong, setHorseStrong ] = React.useState('')
  const [ price, setPrice ] = React.useState('')
  const [ gas, setGas ] = React.useState('')
  const [ type, setType ] = React.useState('')
  
  const data = {mark, model, year, photo: {
    backPh: backPhoto, salonPh: salonPhoto
  }}

  const onSubmit = () => {
    console.log(data);
  }

  return (
    <Box>
      <Typography
        variant='h3'
        fontFamily={'montserrat'}
      >
        
      </Typography>
    </Box>
  )
}

export default AddCarForm