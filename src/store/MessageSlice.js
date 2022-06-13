import {createSlice} from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: 'Initial message',
    isOpen: false,
  },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    setOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const {setMessage, setOpen} = messageSlice.actions;
export default messageSlice.reducer;
