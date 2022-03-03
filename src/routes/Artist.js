import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { getArtistInfo } from '../api/spotify';

import Background from '../components/Background';

const Artist = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [noArtist, setNoArtist] = useState(false);

  useEffect(() => {
    if (!artistId) return;

    getArtistInfo(artistId).then((response) => {
      console.log(response);
      if (response) {
        setArtist(response);
      }
    })
    .catch(error => {
      console.log("Error: ", error);
      setNoArtist(true);
    });
  }, [artistId]);
  
  if (!artist) {
    return (
      <Background>
        {noArtist ? 
            <Typography variant='h5'>No result for this artist</Typography> 
          : <Typography variant='h5'>Loading…</Typography>
        }
      </Background>
    );
  }

  return (
    <Background>
      <Typography variant='h3'>{artist.name}</Typography>


    </Background>    
  );
};

export default Artist;
