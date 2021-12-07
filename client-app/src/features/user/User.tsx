import React, { useState } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { updateName } from './userSlice';

export function User() {
  const dispatch = useAppDispatch();
  const [nameContent, setNameContent] = useState('');
    
  return (
    <div>
      <div> Who are you?</div>
      <input
        value={nameContent}
        onChange={(e) => setNameContent(e.target.value) }/>
      <button onClick={() => dispatch(updateName(nameContent))}>Continue</button>
    </div>
  );
}
