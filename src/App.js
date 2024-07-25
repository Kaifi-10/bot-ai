
import { Stack } from '@mui/material';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import SideBar from './Components/SideBar/SideBar';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Stack direction={'column'}>
        <Navbar />
      {/* <SideBar /> */}
      {/* <HomePage /> */}

      </Stack>
      
    </div>
  );
}

export default App;
