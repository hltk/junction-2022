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
    explanation: 'Bleeding-edge techonologies. End-to-end encyption. We got it all.',
  },
  {
    reason: 'Simple',
    image: 's.png',
    explanation: 'We aim to eliminate all distractions!',
  },
  {
    reason: 'Anonymous',
    image: 'a.png',
    explanation: 'Your identity is known to no one.',
  }, {
    reason: 'Social',
    image: 'r.png',
    explanation: 'Solve your problems through socialization.',
  },
  {
    reason: 'Easy-to-relate',
    image: 'p.png',
    explanation: 'You get to talk to people who struggle with similar subjects.',
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
          Our anonymous messaging platform is the solution.
          Once a day, we connect you to a new person with similar issues.
          The combination of the new perspective with the shared experience
          yields unforeseen realisations.
        </Typography>

      </Container>

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button href="/chat" size="large" variant="outlined">
          Sign up now
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

      <Container sx={{ py: 2 }} maxWidth="md">
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

      <Box mt={20} />

      <Container style={{ width: '100%', display: 'flex' }}>
        <img
          src="m1.png"
          style={{
            alignSelf: 'center',
            width: '30vw',
            paddingRight: '50px',
          }}
        />
        <Box>
          <Typography style={{ fontWeight: 600, fontSize: '35px', paddingBottom: '0.75em' }}>Find other people with similar problems!</Typography>
          <Typography sx={{ color: 'primary.main' }}>
            Once a day, our platform connects you to a person with alike issues.
            The messaging is anonymous both ways, whichs makes the threshold for starting a conversation low!
            Even though you started from a shared trouble, the topic of conversation is, by no means,
            limited to that.
          </Typography>
        </Box>
      </Container>

      <Box mt={15} />

      <Container style={{ width: '100%', display: 'flex' }}>
        <Box>
          <Typography style={{
            fontWeight: 600, fontSize: '35px', paddingRight: '50px', paddingBottom: '0.75em',
          }}
          >
            Build trust through anonym chatting!
          </Typography>
          <Typography sx={{ color: 'primary.main', paddingRight: '50px' }}>
            Discussing personal issues is hard. We are here to make it easier: your identity
            is hidden! If, however, you truly start to trust the person in the other end, you can –
            with both parties' agreement – de-anonymize yourselfs!
          </Typography>
        </Box>
        <img src="m1.png" style={{ alignSelf: 'center', width: '30vw' }} alt="chat window." />
      </Container>

      <Box mt={25} />

      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        fontWeight="600"
        gutterBottom
      >
        Are you ready for a taboo-free conversation?
      </Typography>

      <Box sx={{
        width: '100%', display: 'flex', justifyContent: 'center',
      }}
      >
        <Button href="/chat" size="large" variant="contained" color="secondary">
          Start chatting!
        </Button>
      </Box>

    </Page>
  );
}

export default Home;
