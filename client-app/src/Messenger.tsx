import React, { Fragment } from 'react';
import { MessageComposer } from './features/messageComposer/MessageComposer';
import { Messages } from './features/messages/Messages';

export function Messenger() {
  return (
    <Fragment>
      <Messages />
      <MessageComposer />
    </Fragment>
  );
}
