import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';




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
        <Toolbar sx={{ justifyContent: "center" }}
        >
          { /* <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Company name
                </Typography> */ }
              
          <nav>

            <Link
              variant="button"
              color="text.primary"
              href="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/chats"
              sx={{ my: 1, mx: 1.5 }}
            >
              Chats
            </Link>
          </nav>
          <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
