import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import Page from './Page';

function Home() {
  return (
    <Page>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Looking for someone to talk to?
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Slogan slogan slogan. With our service blah blah You get to ??? ??? ??? What's unique to us is that asd asd asd asd
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
        >
          <Card>
            <CardHeader
              title="title"
              subheader="subheader"
              titleTypographyProps={{ align: 'center' }}
              action={<StarIcon />}
              subheaderTypographyProps={{
                align: 'center',
              }}
              sx={{
                backgroundColor: (theme) => (theme.palette.mode === 'light'
                  ? theme.palette.grey[200]
                  : theme.palette.grey[700]),
              }}
            />
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'baseline',
                  mb: 2,
                }}
              >
                <Typography component="h2" variant="h3" color="text.primary">
                  $69
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  /mo
                </Typography>
              </Box>
              <ul>
                <Typography
                  component="li"
                  variant="subtitle1"
                  align="center"
                  key="asd"
                >
                  asd
                </Typography>
              </ul>
            </CardContent>
            <CardActions>
              <Button fullWidth variant="outlined">
                lol
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}

export default Home;
