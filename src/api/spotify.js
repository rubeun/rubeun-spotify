import axios from 'axios';
import qs from 'qs';

export const getAuth = () => {
  const spotifyClientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const spotifyClientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: spotifyClientID,
      password: spotifyClientSecret,
    },
  };

  const params = {
    grant_type: 'client_credentials',
  };

  return axios
    .post('https://accounts.spotify.com/api/token', qs.stringify(params), headers)
    .then(({ data }) => data.access_token);
};

export const searchForArtist = (searchText, type = 'artist') => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${window.spotify_auth_token}`,
  };

  const params = {
    q: encodeURI(searchText),
    type,
    limit: 10,
    market: 'US',
  };

  return axios
    .get('https://api.spotify.com/v1/search', {
      headers,
      params,
    })
    .then(({ data }) => data);
};

export const getArtistInfo = artistId => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${window.spotify_auth_token}`,
  };

  return axios
    .get(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers,
    })
    .then(({ data }) => data);  
};

export const getRelatedArtists = artistId => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${window.spotify_auth_token}`,
  };

  return axios
    .get(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, {
      headers,
    })
    .then(({ data }) => data);  
};