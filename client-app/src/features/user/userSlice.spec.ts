import counterReducer, {
    UserState,
    updateName
  } from './userSlice';
  
  describe('messages reducer', () => {
    const initialState: UserState = {
      name: "elwin"
    };
    it('should handle initial state', () => {
      expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
        name: ''
    });
    });
  
    it('should handle updateName', () => {
        const newMessage = { from: "Eve", content: "" };
      const actual = counterReducer(initialState, updateName("edwina"));
      expect(actual.name).toEqual('edwina')
    });  
  });
  