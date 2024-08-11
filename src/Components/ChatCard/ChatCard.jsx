import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './ChatCard.module.css'
import person from '../../assets/person.png'

function ChatCard({question}) {

    const date = new Date();
  return (
    <Box sx={{
        marginTop: '20px',
    }}>
        <Box className={styles.chatCardardContainer}>
            <Box component='img' src={person} alt='person' className={styles.cardPerson} />
            <Box className={styles.chatCardardText}>
                <Typography>
                    You
                </Typography>
                <Typography>
                   {question}
                </Typography>
                <Typography>
                    {date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                </Typography>
            </Box>

        </Box>
        
    </Box>
  )
}

export default ChatCard