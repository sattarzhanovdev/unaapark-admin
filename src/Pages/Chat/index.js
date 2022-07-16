import { Card } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { set } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { API } from '../../API'

const Chat = () => {
  const [ messages, setMessages ] = React.useState(null)
  const auth = JSON.parse(localStorage.getItem('auth'))

  const navigate = useNavigate()
  
  React.useEffect(() => {
    API.getMessages()
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              id,
              ...item
            }
          })

        setMessages(result)
      })

    if(auth){
      navigate('/chat')
    }else{
      navigate('/auth/login')
    }
  }, [auth, messages])

  return (
    <Box>
      {
        messages && messages.map(({ name, message }) => (
          <Card>
            <h3>
              {name}
            </h3>
            <p>
              {message}
            </p>
          </Card>
        ))
      }
    </Box>
  )
}

export default Chat