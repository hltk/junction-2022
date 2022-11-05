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
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';

import Page from './Page';

const cards = [
  {
    reason: 'Secure',
    image: 'l.png',
    explanation: 'End-to-end encyption.',
  },
  {
    reason: 'Simple',
    image: 's.png',
    explanation: 'You know how to use before even starting!',
  },
  {
    reason: 'Anonymous',
    image: 'a.png',
    explanation: 'Your identity is known to no one.',
  }, {
    reason: 'Social',
    image: 'r.png',
    explanation: 'Your identity is known to no one.',
  },
  {
    reason: 'Easy-to-relate',
    image: 'p.png',
    explanation: 'You get to talk to people with similar problems.',
  }, {
    reason: 'Fast',
    image: 'h.png',
    explanation: 'Our chat is fast and lightweight.',
  },
];

function Home() {
  return (
    <Page>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Box mt={5} />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          fontWeight="600"
          gutterBottom
        >
          Looking for someone to talk to?
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Slogan slogan slogan. With our service blah blah You get to ??? ??? ???
          What's unique to us is that asd asd asd asd
        </Typography>
      </Container>

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button href="/chat" size="large" variant="outlined">
          Start chatting
        </Button>
      </Box>

      {/* Added vertical space with the Box. Maybe bad practise(?) */}
      <Box mt={30} />

      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        fontWeight="600"
        gutterBottom
      >
        Our platform is
      </Typography>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.reason} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <Box sx={{
                  width: '100%', display: 'flex', justifyContent: 'center', py: 2,
                }}
                >
                  <img style={{ height: '8em' }} src={card.image} />
                </Box>
                <Divider />
                <CardContent sx={{ flexGrow: 5 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.reason}
                  </Typography>
                  <Typography>
                    {card.explanation}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </Page>
  );
}

export default Home;
