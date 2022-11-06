import React, { useEffect, useState } from 'react';

import List from '@mui/material/List';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Page from './Page';

import getMessages from './getMessages';

function Chats() {
  const [messages, setMessages] = useState({});
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const { token } = JSON.parse(window.localStorage.getItem('user'));
    getMessages(token).then((res) => setMessages(res.data));
  }, []);

  const myName = JSON.parse(window.localStorage.getItem('user')).username;

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const Christmas = new Date(`${today.getFullYear()}-12-25`);
      const diffMs = (Christmas - today); // milliseconds between now & Christmas
      const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
      const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
      const diffSeconds = Math.round(((diffMs % 86400000) % (3600000 / 60)) / (1000)); // Seconds
      setTimeString(`${String(diffHrs).padStart(2, '0')}:${String(diffMins).padStart(2, '0')}:${String(diffSeconds).padStart(2, '0')}`);
    });
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Page>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box width="40em" maxWidth="100%">
          <Card sx={{ padding: '0.75em', marginTop: '1em' }}>
            <Box sx={{
              width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}
            >
              <Box>
                <Typography sx={{
                  fontWeight: 500, fontSize: '15px', p: '5px', color: 'text.secondary',
                }}
                >
                  You may start a new chat in
                  {' '}
                  { timeString }
                  {' '}
                  hours.
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Button
                variant="contained"
                size="large"
                sx={{ m: '5px' }}
                disabled
              >
                Start a new chat
              </Button>
            </Box>

          </Card>
          <Card sx={{ marginTop: '1em' }}>
            <Box sx={{ p: 2, display: 'flex' }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>Your active chats</Typography>
            </Box>

            <Divider />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {
                Object.keys(messages).map((friend) => (
                  <Box key={friend}>

                    <ListItem alignItems="flex-start" button component="a" href={`/chat/${friend}`}>
                      <ListItemAvatar>
                        <Avatar src="/static/images/avatar/1.jpg" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={friend.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ')}
                        secondary={(
                          <>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {messages[friend].slice(-1)[0].sender === myName ? <i>you</i> : messages[friend].slice(-1)[0].sender.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ')}
                            </Typography>
                            {' — '}
                            {messages[friend].slice(-1)[0].body}
                          </>
          )}
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </Box>
                ))
}
            </List>
          </Card>
        </Box>
      </Grid>
    </Page>
  );
}

export default Chats;
