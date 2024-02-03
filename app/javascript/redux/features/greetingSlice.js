import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phrase: 'Hello',
  language: 'English',
  isLoading: true,
  isError: true,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
});

console.log(greetingSlice);

export default greetingSlice.reducer;