import { Box } from '@mui/system'
import React from 'react'

const JivoChat = () => {
  return (
    <Box
      paddingTop={'64px'}
      paddingLeft={'35px'}
    >
      <iframe
        src='https://app.jivo.ru/chat/inbox?cid=340279560.1657266356&dh=jivo.ru&ewv=1&form_url=index&lang=ru&pricelist_id=10105&referrer=yandex.ru&utm_campaign=organic&utm_medium=search&utm_source=yandex&visitor_id=95627845&ycid=1657266356176284278'
        width={'100%'}
        style={{
          height: '100vh'
        }}
      >

      </iframe>
    </Box>
  )
}

export default JivoChat