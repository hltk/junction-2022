import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';

import TextField from '@mui/material/TextField';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

import {
  Avatar,
  IconButton,
} from '@mui/material';

import { CompressOutlined } from '@mui/icons-material';
import Page from './Page';

import getMessages from './getMessages';

function Chat() {
  const [isConnectionOpen, setConnectionOpen] = React.useState(false);
  const [messageBody, setMessageBody] = React.useState('');

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { token } = JSON.parse(window.localStorage.getItem('user'));
    getMessages(token).then((res) => setMessages(res.data[receiver] ? res.data[receiver] : []));
  }, []);

  const { username: receiver } = useParams();

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
      setMessages((cur) => [...cur, newMessage])
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
                  RS
                  {/* FIXME */}
                </Avatar>
            )}
              action={(
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
            )}
              title={receiver}
              subheader={<i>... is looking for someone to chat with about his problems regarding...</i>}
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
                    minWidth: '10em', maxWidth: '70%', margin: '10px', padding: '3px',
                  }}
                  >
                    {message.body}
                  </Card>
                  {' '}

                </Box>))}
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
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Page>
  );
}

export default Chat;
