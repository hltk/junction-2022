import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import CardHeader from '@mui/material/CardHeader';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
  Avatar,
  IconButton,
} from '@mui/material';

import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import Page from './Page';

import getMessages from './getMessages';
import getUserinfo from './getUser';

function Chat() {
  const [isConnectionOpen, setConnectionOpen] = React.useState(false);
  const [messageBody, setMessageBody] = React.useState('');
  const [userinfo, setUserinfo] = useState();

  const [messages, setMessages] = useState([]);

  const { username: receiver } = useParams();

  useEffect(() => {
    const { token } = JSON.parse(window.localStorage.getItem('user'));
    getMessages(token).then((res) => setMessages(res.data[receiver] ? res.data[receiver] : []));
  }, []);

  useEffect(() => {
    const { token } = JSON.parse(window.localStorage.getItem('user'));
    getUserinfo(token, receiver).then((res) => setUserinfo(res.data));
  });

  const ws = useRef();
  const myName = JSON.parse(window.localStorage.getItem('user')).username;

  const sendMessage = (event) => {
    event.preventDefault();
    if (messageBody) {
      const newMessage = {
        id: Date.now(),
        sender: myName,
        receiver,
        body: messageBody,
      };
      setMessages((cur) => [...cur, newMessage]);
      ws.current.send(
        JSON.stringify(newMessage),
      );
      setMessageBody('');
    }
  };

  React.useEffect(() => {
    ws.current = new WebSocket('ws://localhost:5001');

    // Opening the ws connection

    ws.current.onopen = () => {
      console.log('Connection opened');
      setConnectionOpen(true);
      ws.current.send(
        JSON.stringify({ sender: myName }),
      );
    };

    ws.current.onclose = () => {
      console.log('Connection closed. Sorry :/');
      setConnectionOpen(false);
    };

    // Listening on ws new added messages

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((cur) => [...cur, data]);
    };

    return () => {
      console.log('Cleaning up...');
      ws.current.close();
    };
  }, []);

  function formatTime(time) {
    const date = new Date(time * 1000);
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = `0${date.getMinutes()}`;

    return `${hours}:${minutes.substr(-2)}`;
  }

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
          <Card sx={{ width: '100%', marginBottom: '1em', color: 'secondary.main' }}>
            <Button sx={{ margin: '10px' }} href="/chats" variant="outlined" startIcon={<ArrowBackIcon />}>
              Back to chats
            </Button>
          </Card>
          <Card sx={{ width: '100%' }}>
            <CardHeader
              avatar={(
                <Avatar aria-label="recipe">
                  {receiver.toUpperCase()[0]}
                  {/* FIXME */}
                </Avatar>
            )}
              action={(
                <Box>
                  <Button sx={{ margin: '10px' }} variant="outlined" startIcon={<NoAccountsIcon />}>
                    De-Anonymize
                  </Button>
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                </Box>
            )}
              title={receiver.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ')}
              subheader={(
                <i>
                  {'... '}
                  {userinfo}
                </i>
)}
            />
            <CardContent style={{ paddingTop: 0, marginTop: 0 }}>
              <Card style={{
                overflowY: 'auto', height: 'min(40em,50vh)', background: '#00000044', marginBottom: 20,
              }}
              >
                {messages.map((message) => (
                  <Box
                    key={message.id}
                    sx={{
                      display: 'flex',
                      justifyContent: message.sender === myName ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <Card style={{
                      minWidth: '10em', maxWidth: '70%', margin: '10px', padding: '7px',
                    }}
                    >
                      {message.body}
                      <Box sx={{ color: 'text.secondary' }}>{formatTime(message.time)}</Box>
                    </Card>
                    {' '}

                  </Box>
                ))}
              </Card>
              <form onSubmit={sendMessage}>

                <Box sx={{
                  width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
                }}
                >

                  <TextField
                    type="text"
                    placeholder="Type your message here..."
                    value={messageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                    required
                    sx={{ paddingRight: '10px', flexGrow: 1 }}
                  />
                  <Button
                    disabled={!isConnectionOpen}
                    type="submit"
                    variant="contained"
                    size="large"
                  >
                    send
                  </Button>
                </Box>

              </form>
            </CardContent>

          </Card>
        </Box>
      </Grid>
    </Page>
  );
}

export default Chat;
