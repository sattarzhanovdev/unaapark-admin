import React from 'react'
import { Box } from '@mui/material'
import Headers from '../../Components/Header'
import Statistics from '../../Components/Statistics'
import AddOrderer from '../../Components/AddOrderer'
import { useNavigate } from 'react-router-dom'
import { API } from '../../API'
  
const Home = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth'))

    if(auth){
      navigate('/')
    }else{
      navigate('/auth/login')
    }
  }, [])

  return (
    <Box>
      
      <main>
        <Statistics />
        <AddOrderer />
      </main>
    </Box>
  )
}

export default Home