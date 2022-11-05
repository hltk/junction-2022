import React, { useRef } from 'react';
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

import {
  Avatar,
  IconButton,
  Collapse,
} from '@mui/material';

import Page from './Page';

function Chat() {
  const [messages, setMessages] = React.useState([]);
  const [isConnectionOpen, setConnectionOpen] = React.useState(false);
  const [messageBody, setMessageBody] = React.useState('');

  const { username: receiver } = useParams();

  const ws = useRef();
  const myName = 'react';

  const sendMessage = (event) => {
    event.preventDefault();
    if (messageBody) {
      ws.current.send(
        JSON.stringify({
          sender: myName,
          receiver,
          body: messageBody,
        }),
      );
      setMessageBody('');
    }
  };

  React.useEffect(() => {
    ws.current = new WebSocket('ws://localhost:5000');

    // Opening the ws connection

    ws.current.onopen = () => {
      console.log('Connection opened');
      setConnectionOpen(true);
      ws.current.send(
        JSON.stringify({ sender: myName }),
      );
    };

    // Listening on ws new added messages

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      setMessages((_messages) => [..._messages, data.body]);
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
          <Grid sx={{ padding: '5px' }}>
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
              <CardMedia
                image="https://material-ui.com/static/images/cards/paella.jpg"
                title="Paella dish"
              />
              <CardContent>
                <ul>{messages.map((mess) => <li key={mess}>{mess}</li>)}</ul>

                <form onSubmit={sendMessage}>
                  <TextField
                    type="text"
                    placeholder="Type your message here..."
                    value={messageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                    required
                  />
                  <Button
                    disabled={!isConnectionOpen}
                    type="submit"
                  >
                    send
                  </Button>
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
          </Grid>
        </Box>
      </Grid>
    </Page>
  );
}

export default Chat;
