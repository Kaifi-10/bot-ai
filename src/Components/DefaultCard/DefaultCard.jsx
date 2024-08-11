import { Box, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from './DefaultCard.module.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function DefaultCard({question, response, onClick}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Box>
        <Box className={styles.cardContainer} 
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)} 
        onClick={onClick}
        sx={{
            width: {xs:'350px', md:'720px', sm:'500px'},
            height: {xs:'100px', md:'120px', sm:'100px'},
            transition: 'width, height 0.3s ease',
            // transition: 'margin 0.2s ease',
            "&:hover": {
              bgcolor: "#fafafa",
              cursor: 'pointer',
           },
        }}>
            <Typography className={styles.question} >
                {question} 
            </Typography>
            <Typography className={styles.aiGenerated}>
            Get immediate AI generated response
            </Typography>
            <Box sx={{
               display: 'flex', 
               justifyContent: 'flex-end',
               marginTop: '10px',
               alignItems: 'center',
              //  padding: '10px',
              // marginRight:'50px',
              marginTop:'-50px',
              zIndex: 1,
               "&:hover": {
                             color: "#9785BA",
                          },
                 }}>
            {isHovering && (
              <IconButton size="small" sx={{ color: 'grey', transition: 'opacity 400ms ease',  }}>
                <ArrowUpwardIcon fontSize="inherit" />
              </IconButton>
            )}

            </Box>
            
        </Box>
        
        
    </Box>
  )
}

export default DefaultCard