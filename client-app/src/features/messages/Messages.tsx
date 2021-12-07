import React from 'react';

import { useAppSelector } from '../../app/hooks';
import {
  selectMessageHistory,
} from './messagesSlice';
import styles from './Messages.module.css';

export function Messages() {
  const history = useAppSelector(selectMessageHistory);

  return (
    <div>
      {history.map((message, key) => <div key={key}>{message.from}: {message.content}</div>)}
    </div>
  );
}
