import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { API } from '../../../API';
import Valuta from '../../../Components/valuta';
import ThirdPart from '../ThirdPart';

const SecondPart = ({data, ID, setID}) => {
  const [ id, setId ] = React.useState('')
  const [ from, setFrom ] = React.useState('')
  const [ to, setTo ] = React.useState('')
  const [ price, setPrice ] = React.useState('')
  const [ valute, setValute ] = React.useState('')
  
  React.useEffect(() => {
    API.get()
    .then(res => {
        setFrom(res.data.length - 1)
        setTo(res.data.length)
        const result = Object.entries(res.data)
        .slice(from, to).map(([id]) => {
          return {
            id
          }
        })
        
        setId(result.reverse())
      })
    }, [])
      
  
  const database = {...data, price, valute}
      
  return (
    <Box>
      {
        ID === 2 ?
        <Box
          marginTop={'15px'}
          width={'350px'}
        >   
          <Box
            display={'flex'}
            flexDirection={'column'}
          >
            <Typography variant='label' >
              Цена машины <span style={{color: 'red'}}>*</span>
            </Typography>
            <Box
              display={'flex'}
              alignItems={'center'}
            >
              <TextField 
                style={{
                  width: '350px',
                  margin: '10px 0'
                }}
                onChange={e => setPrice(e.target.value)}
              />
              <Valuta setValute={setValute} />
            </Box>
          </Box>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            marginTop={'25px'}
          >
            <Button
              onClick={() => setID(ID -= 1)}
              style={{
                width: '200px',
                background: '#1976d2',
                color: 'white',
                marginRight: '5px'
              }}
            >
              <AiOutlineLeft /> Назад
            </Button>
            <Button
              onClick={() => {
                setID(ID += 1)
              }}
              style={{
                width: '200px',
                background: '#1976d2',
                color: 'white',
              }}
            >
              Далее <AiOutlineRight />
            </Button>
          </Box>
        </Box>
        :
        <ThirdPart database={database} ID={ID} setID={setID} />
        
      }
    </Box>
  )
}

export default SecondPart;