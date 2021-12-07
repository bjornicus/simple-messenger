import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addMessage } from '../messages/messagesSlice';
import { selectUserName } from '../user/userSlice';

export function MessageComposer() {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectUserName);
  const [currentMessage, setCurrentMessage] = useState('');

  function sendMessage(): React.MouseEventHandler<HTMLButtonElement> | undefined {
    return () => {
      dispatch(addMessage({ from: name, content: currentMessage }))
      setCurrentMessage("")
    };
  }

  return (
    <div>
      <input
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <button onClick={sendMessage()} >Send</button>
    </div>
  );


}
