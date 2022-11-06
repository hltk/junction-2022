import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

const footers = [
  {
    title: 'Company',
    description: ['Team', 'About us', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'End-to-end encryption',
      'Simple design',
      'For developers ',
      'Technologies',
    ],
  },
  {
    title: 'Resources',
    description: ['Support', 'Security', 'Blog', 'Feedback'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        PearSupport
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
function Footer() {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        p: 2,
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul style={{paddingLeft:0}}>
              {footer.description.map((item) => (
                <li style={{listStyle:'none'}} key={item}>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>

  );
}

export default Footer;
