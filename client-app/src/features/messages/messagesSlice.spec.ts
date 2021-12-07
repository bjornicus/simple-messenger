import counterReducer, {
    MessagesState,
    addMessage
  } from './messagesSlice';
  
  describe('messages reducer', () => {
    const initialState: MessagesState = {
        history: [
            {from: "Alice", content: "hello Bob"},
            {from: "Bob", content: "hi Alice"}
        ]
    };
    it('should handle initial state', () => {
      expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
        history: [
            {from: "Alice", content: "hello Bob"},
            {from: "Bob", content: "hi Alice"}
        ]
    });
    });
  
    it('should handle addMessage', () => {
        const newMessage = { from: "Eve", content: "" };
      const actual = counterReducer(initialState, addMessage(newMessage));
      expect(actual.history).toHaveLength(3);
      expect(actual.history[2]).toEqual(newMessage)
    });  
  });
  