import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './Navigation';

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
    <>
      <Navigation />
      <p>Chat page</p>
      <p><i>messages:</i></p>
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
    </>
  );
}

export default Chat;
