import { Box, Modal, Rating, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from '../AiChatCard/AiChatCard.module.css'
import aiChat from '../../assets/newchat.png'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';  
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Feedback from '../Feedback/Feedback';
import person from '../../assets/person.png'

function AiHistoryCard({response, localFeedback, localRating, id, initialRating, initialFeedback, date, time, type}) {

    const [rating, setRating] = useState(initialRating || 0);  
    const [hasResponse, setHasResponse] = useState(initialRating > 0);  
    const [feedbackText, setFeedbackText] = useState(initialFeedback || ''); 

    useEffect(() => {
        console.log("date", date, "Time", time, "response", response)
    })
    return (
        <Box>
            <Box className={styles.chatCardardContainer}>
                {type === "Human" ? (
                     <Box component='img' src={person} alt='person' className={styles.cardPerson} />
                ) : (
                    <Box component='img' src={aiChat} alt='person' className={styles.cardPerson} />
                ) }
                
                <Box className={styles.chatCardardText}>
                    <Typography>
                        {type === "Human" ? "You" : "Soul AI"}
                       
                    </Typography>
                    <Typography className={styles.contentText}>
                        {type === "Human" ? response : response}
                        {/* {response} */}
                    </Typography>
                    <Typography sx={{
                        display: 'flex',
                        marginRight: '10px',
                    }}>
                        {/* {time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} */}
                        {time}

                        {type === "Human" ? ( "") : (
                            <Box className={`${styles.thumbs} ${hasResponse ? styles.visible : ''}`}>
                            {rating ? (
                                <>
                                    <ThumbUpIcon  style={{ color: 'black' }} />
                                    <Rating name="read-only" value={rating} readOnly />
                                </>
                            ) : (
                                <>
                                <ThumbUpOffAltIcon  />
                                <Rating name="read-only" value={rating} readOnly />
                                </>
                                
                            )}
                            {feedbackText ? (
                                <ThumbDownIcon  style={{ color: 'black' }} />
                            ) : (
                                <ThumbDownOffAltIcon  />
                            )}
                        </Box> 

                        )}
                        
                    </Typography>
                    {feedbackText && (
                        <Typography className={styles.feedbackText}>
                            Feedback: {feedbackText}
                        </Typography>
                    )}
                </Box>
                
            </Box>
        </Box>
    )
}

export default AiHistoryCard