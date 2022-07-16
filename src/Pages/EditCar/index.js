import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import EditCarNum from '../../Components/EditCarNum'

const EditCar = () => {
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
      <EditCarNum />
    </Box>
  )
}

export default EditCar