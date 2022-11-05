import React from 'react';

import Navigation from './Navigation';
import Footer from './Footer';

function Chats() {
  return (
    <>
      <Navigation />
      <p>Chats page</p>
      <ul><li><a href="/chat">a chat</a></li></ul>
      <Footer />
    </>
  );
}

export default Chats;
