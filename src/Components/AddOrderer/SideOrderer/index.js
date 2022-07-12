import { Button, FormGroup, TextField } from '@mui/material'
import React from 'react'

const SideOrderer = ({showSide, setShowSide, setName, setCar ,setTimeFrom, setTimeTo, setNumber, addOrder}) => {
  return (
    <FormGroup
      style={
        showSide
        ?
        {
          width: '350px',
          display: 'flex',
          flexDirection: 'column',
          transition: '.5s',
          marginTop: '15px',      
          padding: '25px 15px',
          background: '#d6e8f9',
          borderRadius: '5px',
          position: 'absolute',
          zIndex: '100'
        }
        :
        {
          display: 'none',
          transition: '.5s',
          marginTop: '15px',
          padding: '15px',
        }
      }
    >
      <TextField 
        id="outlined-basic" 
        label="ФИО" 
        variant="outlined" 
        style={{
          marginBottom: '15px',
          fontFamily: 'montserrat'
        }}
        onChange={e => setName(e.target.value)}
      />
      <TextField 
        id="outlined-basic" 
        label="Номер телефона" 
        variant="outlined" 
        style={{
          marginBottom: '15px',
          fontFamily: 'montserrat'
        }}
        onChange={e => setNumber(e.target.value)}
      />
      <TextField 
        id="outlined-basic" 
        label="Машина" 
        variant="outlined" 
        style={{
          marginBottom: '15px',
          fontFamily: 'montserrat'
        }}
        onChange={e => setCar(e.target.value)}
      />
      <TextField 
        id="outlined-basic" 
        label="Время от дд.мм.гг --:--" 
        variant="outlined" 
        style={{
          marginBottom: '15px',
          fontFamily: 'montserrat'
        }}
        onChange={e => setTimeFrom(e.target.value)}
      />
      <TextField 
        id="outlined-basic" 
        label="Время до дд.мм.гг --:--" 
        variant="outlined" 
        style={{
          marginBottom: '15px',
          fontFamily: 'montserrat'
        }}
        onChange={e => setTimeTo(e.target.value)}
      />

      <Button
        onClick={() => {
          addOrder()
          setShowSide(false)
        }}
        style={{
          background: '#1976d2',
          color: 'white'
        }}
      >
        Добавить
      </Button>
    </FormGroup>
  )
}

export default SideOrderer