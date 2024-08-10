import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../assets/bot.png'
import DefaultCard from '../DefaultCard/DefaultCard'
import styles from './HomePage.module.css'
import InputBox from '../InputBox/InputBox'
import ChatCard from '../ChatCard/ChatCard'

import data from '../../apiData/SampleData.json'
import AiChatCard from '../AiChatCard/AiChatCard'
import Feedback from '../Feedback/Feedback'

function HomePage() {



  const sampleData = [
    {
      "id": 1,
      "question": "What's the difference between GET and POST requests?",
      "response": "GET requests are used to retrieve data from the server, and are visible in the URL. POST requests are used to send data to the server to create/update resources, and the data is included in the body of the request, not visible in the URL."
    },
    {
      "id": 2,
      "question": "Can you explain RESTful APIs?",
      "response": "RESTful APIs are designed around the REST (Representational State Transfer) architecture, which uses HTTP requests to access and manipulate data. They follow a stateless, client-server, cacheable communications protocol."
    },
    {
      "id": 3,
      "question": "What is a Promise in JavaScript?",
      "response": "A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code that is more readable and efficient."
    },
    {
      "id": 4,
      "question": "How do you handle errors in async/await?",
      "response": "Errors in async/await can be handled using try/catch blocks. You wrap your await call inside a try block, and catch any errors that occur in the catch block."
    }
  ]

  const [selectedChatId, setSelectedChatId] = useState(null)
  const [scrollToBottom, setScrollToBottom] = useState(false)
  const [chatId, setChatId] = useState(1)
  const [chat, setChat] = useState([])


  const generateResponse = (input) => {

    const response = data.find(item => input.toLowerCase() == item.question.toLowerCase())

    let answer = "Sorry, Did not understand your query!"

    if (response != undefined) {
        answer = response.response
    }

    setChat(prev => ([...prev,
    {
        type: 'Human',
        text: input,
        time: new Date(),
        id: chatId
    },
    {
        type: 'AI',
        text: answer,
        time: new Date(),
        id: chatId + 1
    }
    ]))

    setChatId(prev => prev + 2)

}

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      width: '78vw',
      justifyContent: 'flex-end',
      height: '95vh',
      paddingBottom: '20px',
      // padding: theme.spacing(2)
    }}>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%', // Ensures content doesn't overflow horizontally
      }}>
        {/* testing */}
        {/* <ChatCard user={you}/> */}
        <ChatCard />
        <AiChatCard />      
        {/* <Feedback /> */}

        {/* testing */}
        <Typography sx={{
          font: "Ubuntu",
          fontWeight: 700,
          fontSize: '28px',
          lineHeight: '32px',
          color: '#000000',
          textAlign: 'center',
          marginBottom: '20px',
          marginTop: '30px',
          textWrap:'wrap',
          marginLeft:'70px'
        }}>
          How Can I Help You Today?
        </Typography>
        <Box component='img' src={logo} sx={{
          // width: '134.38px',
          // height: '142px',
          width: {xs:'90px',  sm:'110px', md:'120px', lg:'134.38px'},
          height: {xs:'90px',  sm:'115px', md:'125px', lg:'142px'},
          transition: 'width, height 0.3s ease',
          top:' 240px',
          left: '679.72px',
          borderRadius: '50%',
          marginLeft:'70px'
        }}/>
        <Box className={styles.DefaultCardContainer} sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '20px',
          width: {xs:'', md:'40%', sm:'60%', lg:'80%', xl:'100%'},
          marginLeft: '70px',
          // maxWidth: '1200px',
        }}>
          {sampleData.map((data) => (
            <DefaultCard key={data.id} question={data.question} response={data.response} />
          ))}

        </Box>
        <Box sx={{
         
        }}>
          <InputBox />
        </Box>
      </Box>
        
    </Box>
  )
}

export default HomePage