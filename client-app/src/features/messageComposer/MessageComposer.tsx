import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addMessage } from '../messages/messagesSlice';
import { selectUserName } from '../user/userSlice';

export function MessageComposer() {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectUserName);
  const [currentMessage, setCurrentMessage] = useState('');

  function sendMessage(): React.MouseEventHandler<HTMLButtonElement> | undefined {
    return (e) => {
      dispatch(addMessage({ from: name, content: currentMessage }))
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
