import React, { useEffect, useRef, useState } from 'react';
import { searchForArtist } from '../api/spotify';
import ClearIcon from '@mui/icons-material/Clear';

import { 
  Box, 
  Typography, 
  Input,
  IconButton,
  InputAdornment,
} from '@mui/material';
import Background from '../components/Background';
import ArtistResults from '../components/ArtistResults';


const Artists = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const searchInputRef = useRef();

  const onTextChange = (e) => setSearchText(e.target.value);
  const handleClearSearch = () => {
    setSearchText('');
    searchInputRef.current.focus();
  }

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

      <Input
        color='info'
        placeholder='Artist Name'
        value={searchText}
        onChange={onTextChange}
        fullWidth
        autoFocus={true}
        inputRef={searchInputRef}
        sx={{
          marginTop: '2em',
          bgcolor: 'white',
          color: 'black',
          height: '50px',
          paddingLeft: '1em',
          fontSize: '1.5em',
        }}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='clear search icon'
              onClick={handleClearSearch}
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        }
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
