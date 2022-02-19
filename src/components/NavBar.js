import React from 'react';
import SearchBar from './SearchBar';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';

const NavBar = () => (
  <AppBar position='static'>
    <Toolbar>
      <Avatar alt='Avatar of Rubeun' src='http://portfolio.rubeun.com/img/favicon-96x96.png' />
      <SearchBar />
    </Toolbar>
  </AppBar>
);

export default NavBar;
