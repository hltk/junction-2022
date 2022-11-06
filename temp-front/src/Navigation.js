import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { ReactComponent as LogoSvg } from './pear.svg';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function LinkItem({ name, url }) {
  return (
    <Box sx={{ float: 'left' }}>
      <Button href={url} variant="text" sx={{ my: 1, mx: 1.5 }}>
        {name}
      </Button>
    </Box>
  );
}

function Navigation() {
  const loggedIn = window.localStorage.getItem('user');

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        alignitems="center"

        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}

      >
        <Toolbar sx={{ justifyContent: 'center', width: '100%' }}>
          { /* <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Company name
                </Typography> */ }

          <Box
            sx={{
              maxWidth: '100%', width: '50em', p: 1, bgcolor: 'background.paper', borderRadius: 1,
            }}
          >
            <Button variant="outlined" sx={{ float:'left', my: 1, mx: 1.5 }}>
              <Box style={{display:'flex'}}>
                <Box sx={{ display:'flex', alignItems:'center', width:'1.5em'}}><LogoSvg /></Box>
                PearSupport
              </Box>
            </Button>
            <LinkItem name="Home" url="/" />
            <LinkItem name="Start a chat" url="/chat" />
            <LinkItem name="Chats" url="/chats" />
            <Box sx={{ float: 'right' }}>
              { !loggedIn
              && (
              <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Login
              </Button>
              )}
              { loggedIn
              && (
              <Button startIcon={<AccountCircleIcon />} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Logged in as
                {' '}
                {JSON.parse(loggedIn).username}
              </Button>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
