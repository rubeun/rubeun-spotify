import React from 'react';
import logo from '../logo.svg';
import { Typography } from '@mui/material';
import Background from '../components/Background';

const Home = () => (
  <Background>
    <img src={logo} className='App-logo' alt='Spotify logo' />
    <Typography variant='h3'>
      Rubeun's Spotify App
    </Typography>
  </Background>
);

export default Home;
