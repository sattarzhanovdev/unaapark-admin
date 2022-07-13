import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Auth = () => {
  const [ login, setLogin ] = React.useState('')
  const [ password, setPassword ] = React.useState('')
  const [ error, setError ] = React.useState('')

  const navigate = useNavigate()

  const auth = JSON.parse(localStorage.getItem('auth'))
  React.useEffect(() => {

    if(auth){
      navigate('/')
    }else{
      navigate('/auth/login')
    }
  }, [auth])

  const loginFunc = () => {
    if(login === 'admin' || password === 'admin'){
      setError('Успешно!')
      localStorage.setItem('auth', JSON.stringify(true))
    }else{
      setError('Неверный логин или пароль!')
      localStorage.setItem('auth', JSON.stringify(false))
    }
 
    setTimeout(() => {
      window.location.reload()
    }, [1000])
  }

  return (
    <Box
      padding={'100px'}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
      >
        <Typography 
          variant='label'
        >
          Введите ваш логин <span style={{color: 'red'}}>*</span>
        </Typography>
        <TextField
          style={{
            width: '350px',
            marginTop: '10px'
          }}
          onChange={e => setLogin(e.target.value)}
        />
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        marginTop={'15px'}
      >
        <Typography 
          variant='label'
        >
          Введите ваш пароль <span style={{color: 'red'}}>*</span>
        </Typography>
        <TextField
          type={'password'}
          style={{
            width: '350px',
            marginTop: '10px'
          }}
          onChange={e => setPassword(e.target.value)}
        />
        <Typography
          variant='p'
        >
          {error}
        </Typography>
      </Box>
      <Button
        style={{
          width: '350px',
          marginTop: '15px',
          background: '#1976d2',
          color: 'white'
        }}
        onClick={() => loginFunc()}
      >
        Войти
      </Button>
    </Box>
  )
}

export default Auth