import React from 'react';
import './App.css';
import { MessageComposer } from './features/messageComposer/MessageComposer';
import { Messages } from './features/messages/Messages';
import { User } from './features/user/User'

function App() {
  return (
    <div className="App">
      <User />
      <Messages />
      <MessageComposer />
    </div>
  );
}

export default App;
