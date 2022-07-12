import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { sideList } from '../Utils'
import './side.css'

const SideBar = ({ show, setShow }) => {
  const [ navId, setId ] = React.useState(1)
  
  return (
    <Box
      height={'92vh'}
      className={'sidebar'}
    >
      {
        sideList.map(({id, icon, title, path}) => (
          <Link 
            to={path}
            key={id}
            className={id === navId ? 'active' : ''}
          >
            <li 
              style={
                show
                ?
                {
                  padding: '15px',
                  paddingRight: '50px',
                  listStyle: 'none',
                  cursor: 'pointer'
                }
                :
                {
                  padding: '15px',
                  paddingRight: '15px',
                  listStyle: 'none',
                  cursor: 'pointer'
                }
              }
              onClick={() => {
                setShow(false)
                setId(id)
              }}
            >
              
                {icon}
                <span 
                  style={
                    show ?
                    {
                      display: 'block',
                      marginLeft: '15px'
                    }
                    :
                    {
                      display: 'none',
                    }
                  }
                >
                  {title}
                </span>
            </li>
          </Link>
        ))
      }
    </Box>
  )
}

export default SideBar