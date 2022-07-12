import React from 'react'
import { Box, Button, Card } from '@mui/material'
import { AddCarObject } from '../Utils'
import './Btns.scss'

const AddCarNum = () => {
  const [ ID, setID ] = React.useState(1)

  return (
    <Box>
      <Box 
        display={'flex'}
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
      {
        AddCarObject.map(({id, element}) => (
          <Box 
            marginTop={'25px'}
          >
            {
              id === ID ? element : ''  
            }
          </Box>
        ))
      }
    </Box>
  )
}

export default AddCarNum;