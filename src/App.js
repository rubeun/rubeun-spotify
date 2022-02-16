import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
import { getAuth } from './api/spotify';

import Home from './routes/Home';

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
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          
        </Routes>
      </Router>
    </ThemeProvider>    
  );
}

export default App;
