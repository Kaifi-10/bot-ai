import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SideBar from '../SideBar/SideBar'

function Navbar() {
  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <Box sx={{ width: '20%' }}>
        <SideBar />
      </Box>
      <Box sx={{ width: '80%', display: 'flex', alignItems: 'flex-start' }}>
        <Typography sx={{
          color: '#9785BA',
          fontFamily: 'Ubuntu, sans-serif',
          fontWeight: 700,
          fontSize: '28px',
          lineHeight: '32px',
          letterSpacing: '0.1px',
        //   marginLeft: '25px',
          marginTop:'20px',
          marginLeft: {
            xs: '10px', 
            sm: '25px', 
           
        },
        }}>
          Bot AI
        </Typography>
      </Box>
    </Box>
  )
}

export default Navbar