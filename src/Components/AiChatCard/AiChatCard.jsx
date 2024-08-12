import { Box, Modal, Rating, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './AiChatCard.module.css'
import aiChat from '../../assets/newchat.png'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';  
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Feedback from '../Feedback/Feedback';

function AiChatCard({response, localFeedback, localRating, id}) {
    const [thumbUp, setThumbUp] = useState(false);
    const [thumbDown, setThumbDown] = useState(false);
    const [rating, setRating] = useState(0);
    const [hasResponse, setHasResponse] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedbackText, setFeedbackText] = useState('');

    // useEffect(() => {
        
    //     const savedRating = localStorage.getItem(`rating_${id}`);
    //     if (savedRating) {
    //         setRating(Number(savedRating));
    //         setThumbUp(true);
    //         setHasResponse(true);
    //     }
    // }, [id]);

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

    const handleRating = (event, newValue) => {
        setRating(newValue);
        setThumbUp(true);
        setHasResponse(true);
        localRating(id, newValue);
        
        // localStorage.setItem(`rating_${id}`, newValue);
    }

    const handleFeedbackSubmit = (text) => {
        setFeedbackText(text);
        localFeedback(id, text);
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
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
                        {response}
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
                                        value={rating}
                                        onChange={handleRating}
                                    />
                                </>
                            ) : (
                                <ThumbUpOffAltIcon onClick={handleThumbUp} />
                            )}
                            {thumbDown ? (
                                <ThumbDownIcon onClick={handleThumbDown} style={{ color: 'black' }} />
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