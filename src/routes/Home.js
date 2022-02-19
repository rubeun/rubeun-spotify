import React from 'react';
import logo from '../logo.svg';
import { Container, Box, Typography } from '@mui/material';
import '../App.css';

const Home = () => (
  <Container className='homeContainer' maxWidth='md'>
    <Box sx={{ 
      bgcolor: 'black', 
      opacity: 0.5, 
      color: 'white', 
      textAlign: 'center', 
      padding: '4em',
      borderRadius: '10px',
      marginTop: '10%'
     }}>
      <img src={logo} className='App-logo' alt='Spotify logo' />
      <Typography variant='h3'>
        Rubeun's Spotify App
      </Typography>
    </Box>
  </Container>
);

export default Home;
