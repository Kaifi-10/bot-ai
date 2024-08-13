import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SideBar from '../SideBar/SideBar'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <Box sx={{ width: '20%' }}>
        {/* <SideBar /> */}
      </Box>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Box sx={{ width: '80%', display: 'flex', alignItems: 'flex-start' }}>
          <Typography sx={{
              width:'50px',
            color: '#9785BA',
            fontFamily: 'Ubuntu, sans-serif',
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '32px',
            letterSpacing: '0.1px',
          //   marginLeft: '25px',
            marginTop:'20px',
            marginBottom:'20px',
            marginLeft: {
              xs: '10px', 
              sm: '-20px', 
              md: '100px',
              lg: '150px',
            
          },
          transition: 'margin-left 0.3s ease',
          whiteSpace: 'nowrap',
          }}>
            Bot AI
          </Typography>
        </Box>
      </Link>
      
    </Box>
  )
}

export default Navbar