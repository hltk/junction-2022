import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
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
      <p>Chat page</p>
      <Grid>
        <Card
          sx={{ width: '100%' }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              Messages
            </Typography>
            <Typography>
              This is a media card. You can use this section to describe the
              content.
            </Typography>

            <ul>{messages.map((mess) => <li>{mess}</li>)}</ul>
            <form onSubmit={sendMessage}>
              <input
                type="text"
                placeholder="Type your message here..."
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
                required
              />
              <button
                disabled={!isConnectionOpen}
                type="submit"
              >
                send
              </button>
            </form>
          </CardContent>

          {/* <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Edit</Button>
                </CardActions> */}
        </Card>
      </Grid>
    </Page>
  );
}

export default Chat;
