import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { connectSocketIO } from '../messages/messageAPI';
import { selectUserName } from '../user/userSlice';

export function MessageComposer() {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectUserName);
  const [currentMessage, setCurrentMessage] = useState('');

  const server = connectSocketIO(name, dispatch)

  function sendMessage(): React.MouseEventHandler<HTMLButtonElement> | undefined {
    return (e) => {
      const message = { from: name, content: currentMessage };
      server.sendMessage(message)
      setCurrentMessage("")
      e.preventDefault()
    };
  }

  return (
    <form onSubmit={sendMessage} >
      <input
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <button type="submit" onClick={sendMessage()} >Send</button>
    </form>
  );


}
