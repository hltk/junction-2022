import React, { useEffect, useState } from 'react';

import List from '@mui/material/List';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import Link from '@mui/material/Link';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Page from './Page';

import getMessages from './getMessages';

function Chats() {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const { token } = JSON.parse(window.localStorage.getItem('user'));
    getMessages(token).then((res) => setMessages(res.data));
  }, []);
  
  const myName = JSON.parse(window.localStorage.getItem('user')).username;

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
          <Card>
            <Box sx={{ p: 2, display: 'flex' }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>Your active chats</Typography>
            </Box>

            <Divider />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {
                Object.keys(messages).map((friend) => <Box key={friend}>
              
              <ListItem alignItems="flex-start" button component={"a"} href={`/chat/${friend}`}>
                <ListItemAvatar>
                  <Avatar alt={friend} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={friend}
                  secondary={(
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {messages[friend].slice(-1)[0].sender === myName ? "you" : messages[friend].slice(-1)[0].sender}
                      </Typography>
                      {" — "}
                      {messages[friend].slice(-1)[0].body}
                    </>
          )}
                />
              </ListItem>
              <Divider variant="inset" component="li" /></Box>)}
            </List>
          </Card>
        </Box>
      </Grid>
    </Page>
  );
}

export default Chats;
