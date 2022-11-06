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
import CircularProgress from '@mui/material/CircularProgress';
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

function Loader() {
  setTimeout(function() {
    window.location.replace('/chat/anonymous ant');
  }, 3000);
  
  return (
    <Page>
      <Box mt={25} />
      <Box style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Box style={{display:'flex',flexDirection:'column'}}>
        <Box style={{marginBottom:'10px',display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}}s><CircularProgress /></Box>
          <Typography sx={{color:'text.secondary'}}>
            Finding you someone to talk to
          </Typography>
        </Box>
      </Box>
    </Page>
  );
}

export default Loader;
