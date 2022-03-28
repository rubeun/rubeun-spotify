import React from 'react';
import { Container, Box } from '@mui/material';
import '../App.css';

const Background = ({ children }) => (
  <Container className='homeContainer' maxWidth='lg'>
    <Box sx={{ 
      bgcolor: 'black', 
      opacity: 0.8, 
      color: 'white', 
      textAlign: 'center', 
      padding: '4em',
      borderRadius: '10px',
      marginTop: '10%'
     }}>
       {children}
    </Box>
  </Container>
);

export default Background;


