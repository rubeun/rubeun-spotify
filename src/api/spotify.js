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