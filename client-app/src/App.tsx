import React from 'react';
import './App.css';
import { MessageComposer } from './features/messageComposer/MessageComposer';
import { Messages } from './features/messages/Messages';

function App() {
  return (
    <div className="App">
        <Messages />
        <MessageComposer />
    </div>
  );
}

export default App;
