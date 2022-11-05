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
import CardMedia from '@mui/material/CardMedia';

import Page from './Page';

const cards = [1, 2, 3, 4, 5, 6];
const reason = ['Secure', 'Simple', 'Anonymous', 'Easy-to-relate', 'Social', 'Fast'];

const explanation = ['End-to-end encyption.', 'You know how to use before even starting!',
  'Your identity is known to no one.', 'You get to talk to people with similar problems.',
  'Our main mission is to make socializing to people with similar issues easier!',
  'Our backend is extremely fast and effective (hopefully).'];

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
      <Box mt={20} />

      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        fontWeight="600"
        gutterBottom
      >
        Why us?
      </Typography>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: '0%',
                    flexGrow: 1,
                  }}
                  image="https://th.bing.com/th/id/OIP.blM45LqX5lcpTGiwOEEIhgHaHZ?pid=ImgDet&rs=1"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 5 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {reason[card - 1]}
                  </Typography>
                  <Typography>
                    {explanation[card - 1]}
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
