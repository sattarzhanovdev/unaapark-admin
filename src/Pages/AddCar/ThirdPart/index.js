import { Box, Button, TextField, Typography } from '@mui/material';
import { color } from '@mui/system';
import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { API } from '../../../API';

const ThirdPart = ({database, ID, setID}) => {
  const [ backPh, setBackPh ] = React.useState('')
  const [ salonPh, setSalonPh ] = React.useState('')
  const [ sidePh, setSidePh ] = React.useState('')
  const [ url, setUrl ] = React.useState('')
  
  const data = {
    ...database, 
    photo: {
      backPh,
      salonPh,
      sidePh,
      url
    },
    isBroned: false
  }

  const postData = () => {
    setID(ID += 1)
    API.postCar(data)
  }

  return (
    <Box
      marginTop={'15px'}
    >
      <Box
        display={'flex'}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          marginRight={'10px'}
        >
          <Typography
            variant='label'
          >
            Фото сзади <span style={{color: 'red'}}>*</span>
          </Typography>
          <TextField 
            style={{
              width: '350px',
              margin: '10px 0',
            }}
            onChange={e => setBackPh(e.target.value)}
          />
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          marginRight={'10px'}
        >
          <Typography
            variant='label'
          >
            Фото с салона <span style={{color: 'red'}}>*</span>
          </Typography>
          <TextField 
            style={{
              width: '350px',
              margin: '10px 0',
            }}
            onChange={e => setSalonPh(e.target.value)}
          />
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          marginRight={'10px'}
        >
          <Typography
            variant='label'
          >
            Фото слева <span style={{color: 'red'}}>*</span>
          </Typography>
          <TextField 
            style={{
              width: '350px',
              margin: '10px 0',
            }}
            onChange={e => setSidePh(e.target.value)}
          />
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
        >
          <Typography
            variant='label'
          >
            Фото машины <span style={{color: 'red'}}>*</span>
          </Typography>
          <TextField 
            style={{
              width: '350px',
              margin: '10px 0',
            }}
            onChange={e => setUrl(e.target.value)}
          />
        </Box>
      </Box>
      <Box
        marginTop={'25px'}
      >
        <Button
          style={{
            width: '250px',
            background: '#1976d2',
            color: 'white'
          }}
          onClick={() => setID(ID -= 1)}
        >
          <AiOutlineLeft /> Назад
        </Button>
        <Button
          style={{
            width: '250px',
            background: '#1976d2',
            color: 'white',
            marginLeft: '15px'
          }}
          onClick={() => {
            postData()
          }}
        >
          Далее <AiOutlineRight />
        </Button>
      </Box>
    </Box>
  )
}

export default ThirdPart;