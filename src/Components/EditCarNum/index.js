import React from 'react'
import { Box, Button, Card } from '@mui/material'
import { AddCarObject } from '../Utils'
import './Btns.scss'
import FirstPart from '../../Pages/AddCar/FirstPart'
import SecondPart from '../../Pages/AddCar/SecondPart'
import ThirdPart from '../../Pages/AddCar/ThirdPart'

const EditCarNum = () => {

  const [ ID, setID ] = React.useState(1)

  return (
    <Box>
      <Box 
        display={'flex'}
        marginBottom={'25px'}
      >
        {
          AddCarObject.map(({id, title}) => (
            <Button
              className='box'
              key={id}
              display={'flex'}
              alignItems={'center'}
              margin={'0 15px'}
              disabled={id === ID ? false : true}
              style={{
                cursor: 'pointer'
              }}

            >
              <Card
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {id}
              </Card>
              <li
                style={{
                  listStyle: 'none',
                  margin: '0 15px'
                }}
              >
                {title}
              </li>
              <span 
                className={'line'}
              >
              </span>
            </Button>
          ))
        }
      </Box>
      <Box>
        <FirstPart ID={ID} setID={setID}  />
      </Box>
    </Box>
  )
}

export default EditCarNum;