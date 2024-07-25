import { Box, Grid } from '@mui/material';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import SideBar from './Components/SideBar/SideBar';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
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
              zIndex: 1, 
              }}>  
              
              <SideBar />
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
            <HomePage />
          </Box>
          
        </Grid>
      </Grid>
    </div>
  );
}

export default App;