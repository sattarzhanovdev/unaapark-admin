import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { StatisticsBase } from '../../Helpers'

const Statistics = () => {
  const { StatisticsList } = StatisticsBase()

  return (
    <Box
      display={'flex'}
      padding={'100px'}
      paddingLeft={'100px'}
    >
      {
        StatisticsList.map(({id, title, icon, count}) => (
          <Card 
            key={id}
            style={{
              marginBottom: '35px',
              marginRight: '15px',
              width: '150px',
              height: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box 
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'column'}
              style={{
                width: '50px',
                height: '50px',
              }}
            >
              <span
                style={{
                  fontSize: '35px',
                  color: '#1976d2'
                }}
              >
                {icon}
              </span>
              <Typography variant='p'>
                {title}
              </Typography>

              <Typography 
                variant='p'
                marginTop={'10px'}
              >
                {count}
              </Typography>
            </Box>
          </Card>
        ))
      }
    </Box>
  )
}

export default Statistics