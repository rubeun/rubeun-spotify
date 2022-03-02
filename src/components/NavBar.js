import React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import { Button, styled } from '@mui/material';

const NavBar = ({ navLinks }) => {

  const MenuButton = styled(Button)(({ theme }) => ({
    marginLeft: '2em',
    color: '#50df84',
    '&:hover': {
      backgroundColor: '#50df84',
      color: 'black',
    }
  }))

  return (
    <AppBar position='static'>
      <Toolbar>
        <Avatar alt='Avatar of Rubeun' src='http://portfolio.rubeun.com/img/favicon-96x96.png' />
        <nav className='nav-menu'>
          {navLinks.map((navLink, i) => {
            return (
              <MenuButton
                key={`nav-menu-button-${i}`}
                variant='outlined'
                href={navLink.url}
                color='success'
                size='large'
              >
                {navLink.title}
              </MenuButton>
            );
          })}
        </nav>
      </Toolbar>
    </AppBar>  
  );
};

export default NavBar;
