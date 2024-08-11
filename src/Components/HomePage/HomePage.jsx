import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../assets/bot.png'
import DefaultCard from '../DefaultCard/DefaultCard'
import styles from './HomePage.module.css'
import InputBox from '../InputBox/InputBox'
import ChatCard from '../ChatCard/ChatCard'

import data from '../../apiData/SampleData.json'
import AiChatCard from '../AiChatCard/AiChatCard'
import Feedback from '../Feedback/Feedback'
import SideBar from '../SideBar/SideBar'

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
  const [selectedQuestion , setSelectecdQuestion] = useState(null)
  const [showChat, setShowChat] = useState(false)
  const [chatHistory, setChatHistory] = useState([])

  const handleDefaultCardClick = (question, response) => {
    setShowChat(true)
    setChatHistory(prevHistory => [
      ...prevHistory,
      { type: 'Human', text: question, id: chatId },
      { type: 'AI', text: response, id: chatId + 1 }
    ])
    setChatId(prev => prev + 2)
  }

  console.log(chatHistory)

  const generateResponse = (input) => {
    const response = data.find(item => input.toLowerCase() === item.question.toLowerCase())
    let answer = response ? response.response : "Sorry, I did not understand your query!"
    setChatHistory(prevHistory => [
      ...prevHistory,
      { type: 'Human', text: input, id: chatId },
      { type: 'AI', text: answer, id: chatId + 1 }
    ])
    setChatId(prev => prev + 2)
    setShowChat(true)
  }



const homepageView = () => {
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
      marginTop: '-220px',
      paddingBottom: '150px'
    }}>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%', // Ensures content doesn't overflow horizontally
      }}>
        {/* testing */}
        {/* <ChatCard user={you}/> */}
        {/* <ChatCard />
        <AiChatCard />       */}
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
            <DefaultCard
             key={data.id} 
             question={data.question} 
             response={data.response} 
             onClick={() => handleDefaultCardClick(data.question, data.response)}/>
          ))}

        </Box>
        <Box sx={{
         
        }}>
          {/* <InputBox onSend={generateResponse} /> */}
        </Box>
      </Box>
        
    </Box>
    
  )
}

const chatView = () => {
    return(
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        width: '78vw',
        height: '95vh',
        paddingBottom: '20px',
        overflowY: 'auto',
      }}>
        {chatHistory.map(item => 
          item.type === 'Human' 
            ? <ChatCard key={item.id} question={item.text} /> 
            : <AiChatCard key={item.id} response={item.text} />
        )}
        {/* <InputBox onSend={generateResponse} /> */}
      </Box>
    )
  }

const handleReturnHome = () => {
  setShowChat(false)
  setSelectecdQuestion(null)
  setChatHistory([])
}

  return (
    <Box>
      {/* {homepageView()} */}
      {/* {showChat ? chatView() : homepageView()} */}
      {/* <SideBar 
        showChat={showChat}
        setShowChat={setShowChat}
        setSelectedQuestion={setSelectecdQuestion}
        setChatHistory={setChatHistory}
      /> */}
  
      {showChat ? (
        <>
          {/*  Added a "Return Home" button */}
          <Button onClick={handleReturnHome}>Return Home</Button>
          {chatView()}
        </>
      ) : (
        homepageView()
      )}
      <Box sx={{
        marginTop: '-150px',
        paddingTop: '20px',
      }}>
        <InputBox onSend={generateResponse} />
      </Box>
      
    </Box>
  )
}

export default HomePage