import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './DefaultCard.module.css'

function DefaultCard({question, response}) {
  return (
    <Box>
        <Box className={styles.cardContainer} sx={{
            width: {xs:'350px', md:'720px', sm:'500px'},
            height: {xs:'100px', md:'120px', sm:'100px'},
            transition: 'width, height 0.3s ease',
            // transition: 'margin 0.2s ease',
        }}>
            <Typography className={styles.question} >
                {question} 
            </Typography>
            <Typography className={styles.aiGenerated}>
            Get immediate AI generated response
            </Typography>
        </Box>
        
    </Box>
  )
}

export default DefaultCard