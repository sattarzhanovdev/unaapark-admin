import React from 'react'
import { Box, Button, FormControl, FormGroup, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { chevroletsMarks, countries, hondasMarks, hyunadisMarks, kuzovList, mercedesesMarks, selectList, teslasMarks, toplivoList, toyotasMarks } from '../../../Components/Utils'
import { AiOutlineRight } from 'react-icons/ai'
import SecondPart from '../SecondPart'

const FirstPart = ({ID, setID}) => {
  const [ model, setModel ] = React.useState('')
  const [ mark, setMark ] = React.useState('')
  const [ country, setCountry ] = React.useState('')
  const [ year, setYear ] = React.useState('')
  const [ color, setColor ] = React.useState('')
  const [ type, setType ] = React.useState('')
  const [ fuel, setFuel ] = React.useState('')
  const [ maxSpeed, setMaxSpeed ] = React.useState('')
  const [ horseStrong, setHorseStrong ] = React.useState('')
  const [ gas, setGas ] = React.useState('')
  const [ transmission, setTransmission ] = React.useState('')

  const data = {model, mark, country, year, color, type, fuel, maxSpeed, horseStrong, gas, transmission}
  
  return (
    <Box>
      {
        ID === 1 ?
        <Box>
          <Box 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              style={{
                marginTop: '10px',
                marginRight: '10px'
              }}
            >
              <Typography variant='label'>
                Выберите марку машины <span style={{color: 'red'}}>*</span>
              </Typography>
              <FormControl
                style={{
                  marginTop: '10px'
                }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  placeholder='Марка машины'
                  style={{
                    width: '350px'
                  }}
                  onChange={e => setModel(e.target.value)}
                >
                  <MenuItem 
                    selected 
                    disabled
                  >
                    Выберите марку машины
                  </MenuItem>
                  {
                    selectList.map(({id, title}) => (
                      <MenuItem key={id} value={title}>{title}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Box>        
            <Box
              display={'flex'}
              flexDirection={'column'}
              style={{
                marginTop: '10px',
                marginRight: '10px'
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
                  onChange={e => setMark(e.target.value)}
                >
                  <MenuItem 
                    selected 
                    disabled
                  >
                    Модель машины
                  </MenuItem>
                  {
                    model === 'Toyota' 
                    ?
                    toyotasMarks.map(({id, title}) => (
                      <MenuItem
                        value={title}
                        key={id}
                      >
                      {title}
                    </MenuItem>
                    ))
                    :
                    model === 'Mercedes-Benz' 
                    ?
                    mercedesesMarks.map(({id, title}) => (
                      <MenuItem
                        value={title}
                        key={id}
                      >
                      {title}
                    </MenuItem>
                    ))
                    :
                    model === 'Honda' 
                    ?
                    hondasMarks.map(({id, title}) => (
                      <MenuItem
                        value={title}
                        key={id}
                      >
                      {title}
                    </MenuItem>
                    ))
                    :
                    model === 'Tesla' 
                    ?
                    teslasMarks.map(({id, title}) => (
                      <MenuItem
                        value={title}
                        key={id}
                      >
                      {title}
                    </MenuItem>
                    ))
                    :
                    model === 'Hyundai' 
                    ?
                    hyunadisMarks.map(({id, title}) => (
                      <MenuItem
                        value={title}
                        key={id}
                      >
                      {title}
                    </MenuItem>
                    ))
                    :
                    model === 'Chevrolet' 
                    ?
                    chevroletsMarks.map(({id, title}) => (
                      <MenuItem
                        key={id}
                        value={title}
                      >
                      {title}
                    </MenuItem>
                    ))
                    :
                    ''
                  }
                </Select>
              </FormControl>
            </Box> 
            <Box
              display={'flex'}
              flexDirection={'column'}
              style={{
                marginTop: '10px',
                marginRight: '10px'
              }}
            >
              <Typography variant='label' >
                Выберите страну производства <span style={{color: 'red'}}>*</span>
              </Typography>
              <FormControl
                style={{
                  marginTop: '10px'
                }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  placeholder='Страна произодства машины'
                  style={{
                    width: '350px'
                  }}
                  onChange={e => setCountry(e.target.value)}
                >
                  <MenuItem 
                    selected 
                    disabled
                  >
                    Страна произодства машины
                  </MenuItem>
                  {
                    countries.map(({id, title}) => (
                      <MenuItem key={id} value={title}>{title}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>  
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              style={{
                marginTop: '10px',
                marginRight: '10px'
              }}
            >
              <Typography variant='label' >
                Год производства <span style={{color: 'red'}}>*</span>
              </Typography>
              <FormControl
                style={{
                  marginTop: '10px'
                }}
              >
                <TextField
                  placeholder='Год производства'
                  style={{
                    width: '350px'
                  }}
                  onChange={e => setYear(e.target.value)}
                />
              </FormControl>  
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              style={{
                marginTop: '10px',
                marginRight: '10px'
              }}
            >
              <Typography variant='label' >
                Цвет машины <span style={{color: 'red'}}>*</span>
              </Typography>
              <FormControl
                style={{
                  marginTop: '10px'
                }}
              >
                <TextField
                  placeholder='Цвет машины'
                  style={{
                    width: '350px'
                  }}
                  onChange={e => setColor(e.target.value)}
                />
              </FormControl>  
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              style={{
                marginTop: '10px',
                marginRight: '10px'
              }}
            >
              <Typography variant='label' >
                Коробка передачи <span style={{color: 'red'}}>*</span>
              </Typography>
              <FormControl
                style={{
                  marginTop: '10px'
                }}
              >
                <TextField
                  placeholder='Коробка передачи'
                  style={{
                    width: '350px'
                  }}
                  onChange={e => setTransmission(e.target.value)}
                />
              </FormControl>  
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              style={{
                marginTop: '10px',
                marginRight: '10px'
              }}
            >
              <Typography variant='label' >
                Объём двигателя <span style={{color: 'red'}}>*</span>
              </Typography>
              <FormControl
                style={{
                  marginTop: '10px'
                }}
              >
                <TextField
                  placeholder='Объем двигателя'
                  style={{
                    width: '350px'
                  }}
                  onChange={e => setFuel(e.target.value)}
                />
              </FormControl>  
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              style={{
                marginTop: '10px',
                marginRight: '10px'
              }}
            >
              <Typography variant='label' >
                Объём топливного бака <span style={{color: 'red'}}>*</span>
              </Typography>
              <FormControl
                style={{
                  marginTop: '10px'
                }}
              >
                <TextField
                  placeholder='Объем топливного бака'
                  style={{
                    width: '350px'
                  }}
                  onChange={e => setFuel(e.target.value)}
                />
              </FormControl>  
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              style={{
                marginTop: '10px',
                marginRight: '10px'
              }}
            >
              <Typography variant='label' >
                Макс скорость машины <span style={{color: 'red'}}>*</span>
              </Typography>
              <FormControl
                style={{
                  marginTop: '10px'
                }}
              >
                <TextField
                  placeholder='Макс скорость машины'
                  style={{
                    width: '350px'
                  }}
                  onChange={e => setMaxSpeed(e.target.value)}
                />
              </FormControl>  
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              style={{
                marginTop: '10px',
                marginRight: '10px'
              }}
            >
              <Typography variant='label' >
                Лошадиные силы в машине <span style={{color: 'red'}}>*</span>
              </Typography>
              <FormControl
                style={{
                  marginTop: '10px'
                }}
              >
                <TextField
                  placeholder='Лошадиные силы в машине'
                  style={{
                    width: '350px'
                  }}
                  onChange={e => setHorseStrong(e.target.value)}
                />
              </FormControl>  
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              style={{
                marginTop: '10px',
                marginRight: '10px'
              }}
            >
              <Typography variant='label'>
                Тип топлива <span style={{color: 'red'}}>*</span>
              </Typography>
              <FormControl
                style={{
                  marginTop: '10px'
                }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  placeholder='Тип топлива'
                  style={{
                    width: '350px'
                  }}
                  onChange={e => setGas(e.target.value)}
                >
                  <MenuItem 
                    selected 
                    disabled
                  >
                    Выберите тип топлива машины
                  </MenuItem>
                  {
                    toplivoList.map(({id, title}) => (
                      <MenuItem key={id} value={title}>{title}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Box>      
            <Box
              display={'flex'}
              flexDirection={'column'}
              style={{
                marginTop: '10px',
                marginRight: '10px'
              }}
            >
              <Typography variant='label'>
                Тип кузова <span style={{color: 'red'}}>*</span>
              </Typography>
              <FormControl
                style={{
                  marginTop: '10px'
                }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  placeholder='Тип кузова'
                  style={{
                    width: '350px'
                  }}
                  onChange={e => setType(e.target.value)}
                >
                  <MenuItem 
                    selected 
                    disabled
                  >
                    Выберите тип кузова машины
                  </MenuItem>
                  {
                    kuzovList.map(({id, title}) => (
                      <MenuItem key={id} value={title}>{title}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Button
            style={{
              width: '350px',
              marginTop: '25px',
              background: '#1976d2',
              color: 'white'
            }}
            onClick={() => {
              if(mark.length && model.length && year.length && country.length < 0){
                alert('Заполните все поля!')
              }else{
                setID(ID += 1)
              }
            }}
          >
            Далее <AiOutlineRight />
          </Button>
        </Box>
        :
        <SecondPart data={data} ID={ID} setID={setID} />
      }
    </Box>
  )
}

export default FirstPart