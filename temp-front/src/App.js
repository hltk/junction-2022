import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Chat from './Chat';
import Chats from './Chats';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/chat" element={<Chat />} exact />
        <Route path="/chats" element={<Chats />} exact />
        <Route path="/login" element={<Login />} exact />
      </Routes>
    </Router>
  );
}

export default App;
