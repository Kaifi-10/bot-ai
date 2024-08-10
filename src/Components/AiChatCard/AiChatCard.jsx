import { Box, Modal, Rating, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from './AiChatCard.module.css'
import aiChat from '../../assets/newchat.png'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';  
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Feedback from '../Feedback/Feedback';

function AiChatCard() {

    const [thumbUp, setThumbUp] = useState(false);
    const [thumbDown, setThumbDown] = useState(false);
    const [rating, setRating] = useState(0);
    const [value, setValue] = useState(0);
    const [hasResponse, setHasResponse] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedbackText, setFeedbackText] = useState('');

    const handleThumbUp = () => {
        setThumbUp(!thumbUp);
        setThumbDown(false);
        setHasResponse(!thumbUp);
    };

    const handleThumbDown = () => {
        setThumbDown(!thumbDown);
        setThumbUp(false);
        setHasResponse(!thumbDown);
        setIsModalOpen(true);
    };

    const handleRatingChange = (event, newValue) => {
        setValue(newValue);
        setHasResponse(newValue > 0);
    };

    const handleRating = (e) =>{
        setRating(e.target.value);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleFeedbackSubmit = (text) => {
        setFeedbackText(text);
        setIsModalOpen(false);
    };

    const date = new Date();
  return (
    <Box>
        <Box className={styles.chatCardardContainer}>
            <Box component='img' src={aiChat} alt='person' className={styles.cardPerson} />
            <Box className={styles.chatCardardText}>
                <Typography>
                    Soul Ai
                </Typography>
                <Typography className={styles.contentText}>
                RESTful APIs are designed around the REST (Representational State Transfer) architecture, which uses HTTP requests to access and manipulate data. They follow a stateless, client-server, cacheable communications protocol.
                
                </Typography>
                <Typography sx={{
                    display: 'flex',
                    marginRight: '10px',
                }}>
                    {date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                    <Box className={`${styles.thumbs} ${hasResponse ? styles.visible : ''}`}>
                    {thumbUp ? (
                                <>
                                <ThumbUpIcon onClick={handleThumbUp} style={{ color: 'black' }} />
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                    setValue(newValue);
                                    }}
                                />

                                </>
                                
                            ) : (
                                <ThumbUpOffAltIcon onClick={handleThumbUp} />
                            )}
                            {thumbDown ? (
                                <>
                                <ThumbDownIcon onClick={handleThumbDown} style={{ color: 'black' }} />
                                {/* <Feedback /> */}
                                
                                </>
                                
                            ) : (
                                <ThumbDownOffAltIcon onClick={handleThumbDown} />
                            )}
                    </Box> 
                </Typography>

                {feedbackText && (
                    <Typography className={styles.feedbackText}>
                        Feedback: {feedbackText}
                    </Typography>
                )}
                
            </Box>
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="feedback-modal"
                aria-describedby="feedback-form"
            >
                <Box>
                    <Feedback onSubmit={handleFeedbackSubmit} onClose={handleCloseModal} />
                </Box>
            </Modal>

        </Box>
        
    </Box>
  )
}

export default AiChatCard