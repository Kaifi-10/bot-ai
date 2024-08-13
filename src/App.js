import { Box, Grid } from '@mui/material';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import SideBar from './Components/SideBar/SideBar';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import History from './Components/History/History';

function App() {

  const [showChat, setShowChat] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);

  const handleReturnHome = () => {
    setShowChat(false);
    setSelectedQuestion(null);
    setChatHistory([]);
  };
  return (
    <Router>

<div className="App">
      <Grid container >
        
        <Grid item xs={2}>
          <Box sx={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'row',  // Changed to row
            // background:'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)', 
          }}>
            <Box sx={{ 
              width: '80%',
              }}>  
              
              <SideBar 
              showChat={showChat}
              setShowChat={setShowChat}
              handleReturnHome={handleReturnHome}
               />
            </Box>
            <Box sx={{ 
              width: '20%'  
               }}> 
              <Navbar />
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={10} 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          // background:'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)', 
        }}
        >
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            // background:'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)',
            }}>
            <Routes>
                <Route path="/" element={
                  <HomePage 
                    showChat={showChat}
                    setShowChat={setShowChat}
                    selectedQuestion={selectedQuestion}
                    setSelectedQuestion={setSelectedQuestion}
                    chatHistory={chatHistory}
                    setChatHistory={setChatHistory}
                  />
                } />
                <Route path="/history" element={<History />} />
              </Routes>
          </Box>
          
        </Grid>
      </Grid>
    </div>

    </Router>
    
  );
}

export default App;