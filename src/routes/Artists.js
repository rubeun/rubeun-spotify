import React, { useEffect, useState } from 'react';
import { searchForArtist } from '../api/spotify';

import { 
  Box, 
  Typography, 
  TextField,
} from '@mui/material';
import Background from '../components/Background';
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
    <Background>
      <Typography variant='h3'>Artist Search</Typography>

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
    </Background>    
  );
};

export default Artists;
