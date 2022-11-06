import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button, TextField, Box, Avatar, Typography, FormControlLabel, Grid, Link, Checkbox,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

import Page from './Page';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const resp = await axios.post('http://localhost:5000/auth', { username, password });

    window.localStorage.setItem('user', JSON.stringify({ username, token: resp.data.access_token }));
    navigate('/');
  };

  return (
    <Page>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="off"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            onClick={login}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/" variant="body2">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Page>
  );
}

export default Login;
