import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUserName, updateName } from './userSlice';

export function User() {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectUserName);
  
  return (
    <div>
      <input
        value={name}
        onChange={(e) => {dispatch(updateName(e.target.value))}}
      />
    </div>
  );
}
