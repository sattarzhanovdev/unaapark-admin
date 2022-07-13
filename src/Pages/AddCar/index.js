import { Box } from '@mui/system'
import React from 'react'
import AddCarNum from '../../Components/AddCarNum'
import { useNavigate } from 'react-router-dom'

const AddCar = () => {
  const navigate = useNavigate()

  const auth = JSON.parse(localStorage.getItem('auth'))
  React.useEffect(() => {
    if(auth){
      navigate('/addCar')
    }else{
      navigate('/auth/login')
    }
  }, [auth])
  return (
    <Box
      padding={'100px'}
    >
      
      <AddCarNum />
    </Box>
  )
}

export default AddCar