import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

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
            <LinkItem name="Home" url="/" />
            <LinkItem name="Start a chat" url="/chat" />
            <LinkItem name="Chats" url="/chats" />
            <Box sx={{ float: 'right' }}>
              <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Login
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
