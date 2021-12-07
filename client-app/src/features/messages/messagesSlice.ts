import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';

interface Message {
    from: string;
    content: string;
}


export interface MessagesState {
  history: Message[];
}

const initialState: MessagesState = {
    history: [
        {from: "Alice", content: "hello Bob"},
        {from: "Bob", content: "hi Alice"}
    ]
};


export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.history.push(action.payload);
    }
  },
});

export const { addMessage } = messagesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectMessageHistory = (state: RootState) => state.messages.history;

export default messagesSlice.reducer;
