import React, { useState } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { addMessage } from '../messages/messagesSlice';

export function MessageComposer() {
  const dispatch = useAppDispatch();
  const [currentMessage, setCurrentMessage] = useState('');

  function sendMessage(): React.MouseEventHandler<HTMLButtonElement> | undefined {
    return () => {
      dispatch(addMessage({ from: "Alice", content: currentMessage }))
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
