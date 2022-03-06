import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const RelatedArtistsGrid = ({ relatedArtists }) => {
  console.log(relatedArtists);
  return (
    <ImageList cols={4} gap={8}>
      {relatedArtists.map((artist, index) => (
        <ImageListItem key={index}>
          <img
            src={artist.images[2].url}
            alt={artist.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={artist.name}
            subtitle={<span>followers: {artist.followers.total}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default RelatedArtistsGrid;
