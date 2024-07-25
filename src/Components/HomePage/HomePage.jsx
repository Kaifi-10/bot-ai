import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/bot.png'

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

  return (
    <Box backgroundColor='linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)'>
        <Typography sx={{
          font: "Ubuntu",
          fontWeight: 700,
          fontSize: '28px',
          lineHeight: '32px',
          color: '#000000',
          textAlign: 'center',
          marginBottom: '20px',
        }}>
          How Can I Help You Today?
        </Typography>
        <Box component='img' src={logo} sx={{
          width: '134.38px',
          height: '142px',
          top:' 240px',
          left: '679.72px',
          borderRadius: '50%',
        }}/>
    </Box>
  )
}

export default HomePage