import React from 'react';

import Grid from '@mui/material/Grid';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/system';
import Footer from './Footer';
import Navigation from './Navigation';

export const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#dc4c4b',
      dark: '#860408',
      light: '#c0291e',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#580000',
      paper: '#690508',
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontFamily: '"Fira Sans", "Helvetica", "Arial", sans-serif',
  },
});

function Page({ children }) {
  return (
    <ThemeProvider theme={themeOptions}>
      <Grid
        style={{ Height: '100%', background: 'linear-gradient(#460000, #7B171A)' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Navigation />
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box width="60em" maxWidth="93%" style={{ boxSizing: 'border-box', padding: '10px' }}>{ children }</Box>
          </Grid>
          <Box
            component="footer"
            sx={{
              p: 2,
              px: 2,
              mt: 'auto',
            }}
          >
            <Footer />
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default Page;
