import * as React from 'react';
import { 
  ImageList,
  ImageListItem,
  ImageListItemBar,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';


const ImageLink = styled(Link)(({ theme }) => ({
  color: '#50df84',
  textDecoration: 'none',
  '&:hover': {
    color: 'white',
  }
}))

const ArtistImage = styled('img')(({ theme }) => ({
  width: '160px',
  height: '160px',
  objectFit: 'contain',
  '&:hover': {
    opacity: 0.7,
  }
}))



const RelatedArtistsGrid = ({ relatedArtists }) => {
  console.log(relatedArtists);
  return (
    <ImageList cols={4} gap={8}>
      {relatedArtists.map((artist, index) => (
        <ImageLink to={`/artist/${artist.id}`}>
          <ImageListItem key={index}>
            <ArtistImage
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
        </ImageLink>
      ))}
    </ImageList>
  );
}

export default RelatedArtistsGrid;
