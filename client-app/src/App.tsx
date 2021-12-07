import React, { Fragment } from 'react';
import './App.css';
import { useAppSelector } from './app/hooks';
import { MessageComposer } from './features/messageComposer/MessageComposer';
import { Messages } from './features/messages/Messages';
import { User } from './features/user/User'
import { selectUserName } from './features/user/userSlice';

function App() {
  const userName = useAppSelector(selectUserName);

  return (
    <div className="App">
      {
        userName == '' ? <User /> : 
          <Fragment >
          <Messages />
          <MessageComposer />
          </Fragment>
      }
    </div>
  );
}

export default App;
