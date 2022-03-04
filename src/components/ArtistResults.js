import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';

const ArtistResults = ({ searchResults }) => {

  return (
    <List sx={{ width: '100%' }}>
      {searchResults.map(result => {
        let imageURL = result.images.length > 0 ? result.images[0].url : '';
        let artistGenres = result.genres.length > 0 ? result.genres.join(', ') : 'Unknown Genre';
        return (
          <ListItem 
            alignItems="flex-start" 
            key={result.id}
            component={Link}
            to={`/artist/${result.id}`}
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={result.name} src={imageURL} />
              </ListItemAvatar>
              <ListItemText
                primary={result.name}
                secondary={
                  <Typography
                    sx={{ textTransform: 'capitalize' }}
                    variant='body2'
                  >{artistGenres}</Typography>
                }
                sx={{
                  color: 'white',
                }}
              />
            </ListItemButton>
          </ListItem>   
        )   
      })}
    </List>
  );
}
export default ArtistResults;