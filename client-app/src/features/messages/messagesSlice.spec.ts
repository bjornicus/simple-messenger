import counterReducer, {
    MessagesState,
    addMessage
  } from './messagesSlice';
  
  describe('counter reducer', () => {
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
      const actual = counterReducer(initialState, addMessage({from: "Eve", content: ""}));
      expect(actual.history).toHaveLength(3);
    });
  
  });
  