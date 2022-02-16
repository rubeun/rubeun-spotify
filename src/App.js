import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { getAuth } from './api/spotify';

import Home from './routes/Home';

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
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
