import { Box, Button, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import styles from './InputBox.module.css'

function InputBox() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', lg:'row' },
        alignItems: 'center',
        justifyContent: 'center',
        width: '1380px',
        maxWidth: '1380px',
        margin: '20px auto',
        gap: theme.spacing(2),
        padding: theme.spacing(0, 2),
      }}
    >
     <Box
        component='input'
        placeholder='Ask your question here...'
        sx={{
        //   width: '100%',
        width: {xs:'21%',  sm:'32%', md:'48%', lg:'34%', xl:'100%'},
        marginLeft: { xs: '60px', sm: '55px', md:'65px', lg: '70px', xl: '0' },
          maxWidth: isLargeScreen ? '1180px' : '100%',
          borderRadius: '8px',
          boxShadow: '0px 4px 4px 0px #00000040',
          border: '1px solid #00000073',
          padding: '10px 20px',
          fontSize: '16px',
          '&:focus': {
            outline: 'none',
            borderColor: theme.palette.primary.main,
          },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', sm: 'row' },
          gap: theme.spacing(2),
          marginTop: { xs: theme.spacing(2), sm: 0 },
        //   width: {xs:'20%', md:'40%', sm:'60%', lg:'50%', xl:'100%'},
        marginLeft: { xs: '60px', sm: '55px', md:'65px', lg: '10px', xl: '0' },
        }}
      >
        <Button 
          variant='contained' 
          className={styles.inputButton}
          fullWidth={isMobile}
          sx={{
            width: {xs:'20%', md:'40%', sm:'60%', lg:'50%', xl:'100%'},
          }}
        >
          Ask
        </Button>
        <Button 
          variant='contained' 
          className={styles.inputButton}
          fullWidth={isMobile}
          sx={{
            width: {xs:'20%', md:'40%', sm:'60%', lg:'50%', xl:'100%'},
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  )
}

export default InputBox