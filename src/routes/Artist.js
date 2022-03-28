import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, styled, Typography } from '@mui/material';
import { getArtistInfo, getRelatedArtists } from '../api/spotify';

import Background from '../components/Background';
import RelatedArtistsGrid from '../components/RelatedArtistsGrid';

const Artist = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [relatedArtists, setRelatedArtists] = useState(null);
  const [noArtist, setNoArtist] = useState(false);

  useEffect(() => {
    if (!artistId) return;

    getArtistInfo(artistId).then((response) => {
      if (response) {
        setArtist(response);
      }
    })
    .catch(error => {
      console.log("Artist Error: ", error);
      setNoArtist(true);
    });

    getRelatedArtists(artistId).then((response) => {
      if (response) {
        setRelatedArtists(response);
      }
    })
    .catch(error => {
      console.log("Related Artists Error: ", error);
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
        <Grid item sm={4} xs={12}>
          <ImageItem src={imageURL} alt={artist.name} />
        </Grid>
        <Grid item sm={8} xs={12}>
          <Typography variant='h3'>{artist.name}</Typography>
          <br />
          {artist.genres.map((genre, i) => <Typography key={i} variant='h5'>{genre}</Typography>)}
          <br />
          <Typography variant='body'>Followers: {artist.followers.total}</Typography>
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h4'>Related Artists</Typography>
          {relatedArtists ? 
            <RelatedArtistsGrid relatedArtists={relatedArtists.artists} />
            : <Typography variant='body'>Loading Related Artists</Typography>
          }
          
        </Grid>
      </Grid>

    </Background>    
  );
};

export default Artist;
