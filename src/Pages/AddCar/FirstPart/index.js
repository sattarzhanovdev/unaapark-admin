import React from 'react'
import { Box, FormControl, FormGroup, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { selectList } from '../../../Components/Utils'

const FirstPart = () => {
  return (
    <Box>
      <FormGroup>
        <Box
          display={'flex'}
          flexDirection={'column'}
        >
          <Typography variant='label' >
            Выберите название <span style={{color: 'red'}}>*</span>
          </Typography>
          <FormControl
            style={{
              marginTop: '10px'
            }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              placeholder='Название машины'
              style={{
                width: '350px'
              }}
            >
              <MenuItem 
                selected 
                disabled
              >
                Название машины
              </MenuItem>
              {
                selectList.map(({id, title}) => (
                  <MenuItem value={title}>{title}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Box>        
        <Box
          display={'flex'}
          flexDirection={'column'}
          style={{
            marginTop: '10px'
          }}
        >
          <Typography variant='label' >
            Выберите модель <span style={{color: 'red'}}>*</span>
          </Typography>
          <FormControl
            style={{
              marginTop: '10px'
            }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              placeholder='Название машины'
              style={{
                width: '350px'
              }}
            >
              <MenuItem 
                selected 
                disabled
              >
                Название машины
              </MenuItem>
              {
                selectList.map(({id, title}) => (
                  <MenuItem value={title}>{title}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Box> 
      </FormGroup>
    </Box>
  )
}

export default FirstPart