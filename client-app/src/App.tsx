import React from 'react';
import './App.css';
import { useAppSelector } from './app/hooks';
import { User } from './features/user/User'
import { selectUserName } from './features/user/userSlice';
import { Messenger } from './Messenger';

function App() {
  const userName = useAppSelector(selectUserName);

  return (
    <div className="App">
      {
        userName === '' ? <User /> : < Messenger />
      }
    </div>
  );
}

export default App;
