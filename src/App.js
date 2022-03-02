import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
import { getAuth } from './api/spotify';
import VideoBackground from './components/VideoBackground';

import Home from './routes/Home';
import Artists from './routes/Artists';

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#222'
        }
      }
    }
  }
});

const navRoutes = [
  {
    title: 'Home', 
    url: '/'
  }, 
  {
    title: 'Artists', 
    url: '/artists'
  }
];

function App() {
  const [authorised, setAuthorised] = useState(false);

  useEffect(() => {
    getAuth().then((token) => {
      window.spotify_auth_token = token;
      setAuthorised(true);
    });
  }, []);

  if (!authorised) return null;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar navLinks={navRoutes} />
        <Routes>
          <Route exact path={navRoutes[0].url} element={<Home />} />
          <Route exact path={navRoutes[1].url} element={<Artists />} />          
        </Routes> 
      </Router>
      <VideoBackground />
    </ThemeProvider>    
  );
}

export default App;
