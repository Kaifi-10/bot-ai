import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import feedback from '../../assets/image.png'
import styles from './Feedback.module.css'
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';





function Feedback() {
  return (
    <Box>
        <Box className={styles.feedbackContainer}>
            <Box className={styles.feedbackHeader}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'end',
                    gap: '30px',
                }}>
                    <Box component='img' src={feedback} width={45}/>
                    <Typography className={styles.feebackText}>
                    Provide Additional Feedback
                    </Typography>
                </Box>
                
                <CloseIcon />
            </Box>
            <Box>
            <TextField
                multiline
                rows={7}
                // placeholder="Minimum 3 rows"
                fullWidth
                variant="outlined"
                className={styles.feedbackTextField}
                sx={{
                    width: '716px',
                    '& .MuiInputBase-root': {
                        height: '187px',
                    },
                    margin:'15px'
                }}
            />

            </Box>
            <Box sx={{
                 display: 'flex',
                 justifyContent: 'end',
                 margin:'15px 25px'
            }}>
            <Button variant='contained' className={styles.feedbackButton}>Submit</Button> 

            </Box>
                      
            

        </Box>
    </Box>
  )
}

export default Feedback