import React, { useState } from 'react';
import {
  Button, FormControl, Input, InputLabel,
} from '@mui/material';

import Page from './Page';

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    console.log(username, password);
  };

  return (
    <Page>
      <form className="form">
        <FormControl>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
        </FormControl>

        <Button type="button" color="primary" className="form__custom-button" onClick={() => login()}>
          Log in
        </Button>
      </form>
    </Page>
  );
}

export default Login;
