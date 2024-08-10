import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import feedback from '../../assets/image.png'
import styles from './Feedback.module.css'
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';





function Feedback({ onSubmit, onClose }) {
    const [feedbackText, setFeedbackText] = useState('');

    const handleTextChange = (event) => {
        setFeedbackText(event.target.value);
    };

    const handleSubmit = () => {
        onSubmit(feedbackText);
    };

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // zIndex: 9999,
    }}>
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
                
                <CloseIcon onClick={onClose} style={{ cursor: 'pointer' }} />
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
                value={feedbackText}
                onChange={handleTextChange}
            />

            </Box>
            <Box sx={{
                 display: 'flex',
                 justifyContent: 'end',
                 margin:'15px 25px'
            }}>
            <Button variant='contained' className={styles.feedbackButton} onClick={handleSubmit}>
                Submit
            </Button> 

            </Box>
                      
            

        </Box>
    </Box>
  )
}

export default Feedback