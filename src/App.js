import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { getAuth } from './api/spotify';

function App() {
  const [authorised, setAuthorised] = useState(false);

  useEffect(() => {
    getAuth().then((token) => {
      window.spotify_auth_token = token;
      setAuthorised(true);
    });
  }, []);

  if (!authorised) return null;

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rubeun's Spotify App
        </p>
      </header>
    </div>
  );
}

export default App;
