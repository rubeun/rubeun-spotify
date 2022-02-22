import React, { useEffect, useState } from 'react';
import { searchForArtist } from '../api/spotify';

import { 
  Container, 
  Box, 
  Typography, 
  TextField,
} from '@mui/material';

import ArtistResults from '../components/ArtistResults';


const Artists = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const onTextChange = (e) => setSearchText(e.target.value);

  useEffect(() => {
    if (!searchText) return;

    searchForArtist(searchText).then((response) => {
      if (response.artists.items.length > 0) {
        setSearchResults(response.artists.items);
        setNoResults(false);
      } else {
        setNoResults(true);
      }
    });
  }, [searchText]);

  return (
    <Container className='artistsContainer' maxWidth='md'>
      <Box 
        sx={{ 
          bgcolor: 'black', 
          opacity: 0.5, 
          color: 'white', 
          textAlign: 'center', 
          padding: '4em',
          borderRadius: '10px',
          marginTop: '10%',    
        }}>

        <Typography variant='h3'>Artists</Typography>

        <TextField
          color='info'
          label='Search for Artist'
          value={searchText}
          onChange={onTextChange}
          fullWidth
          sx={{
            marginTop: '2em',
            bgcolor: 'white',
            color: 'black'
          }}
        />

        {searchText !== '' ?
          noResults ?
            <Typography variant='error'>No Artist Found</Typography>
            :
            <Box
              sx={{
                padding: '1em',
              }}
            >
              <ArtistResults searchResults={searchResults} /> 
            </Box>
          : <Typography variant='caption'>Please type in an artist name above</Typography>
        }
      </Box>


    </Container>
  );
};

export default Artists;
