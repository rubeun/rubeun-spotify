import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, styled, Typography } from '@mui/material';
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

  const imageURL = artist.images.length > 0 ? artist.images[0].url : '';

  const ImageItem = styled('img')({
    width: '100%',
  });

  return (
    <Background>
      <Grid container>
        <Grid item xs={4}>
          <ImageItem src={imageURL} alt={artist.name} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant='h3'>{artist.name}</Typography>
          <br />
          {artist.genres.map((genre, i) => <Typography key={i} variant='h5'>{genre}</Typography>)}
          <br />
          <Typography variant='body'>Followers: {artist.followers.total}</Typography>
        </Grid>
      </Grid>

    </Background>    
  );
};

export default Artist;
