import React, { useState } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { addMessage } from '../messages/messagesSlice';

export function MessageComposer() {
  const dispatch = useAppDispatch();
  const [currentMessage, setcurrentMessage] = useState('');

  function sendMessage(): React.MouseEventHandler<HTMLButtonElement> | undefined {
    return () => {
      dispatch(addMessage({ from: "Alice", content: currentMessage }))
      setcurrentMessage("")
    };
  }

  return (
    <div>
      <input
        value={currentMessage}
        onChange={(e) => setcurrentMessage(e.target.value)}
      />
      <button onClick={sendMessage()} >Send</button>
    </div>
  );


}
