import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';


export interface UserState {
  name: string;
}

const initialState: UserState = {
  name: ''
};


export const messagesSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  },
});

export const { updateName } = messagesSlice.actions;

export const selectUserName = (state: RootState) => state.user.name;

export default messagesSlice.reducer;
