import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  phrase: 'Hello',
  language: 'English',
  isLoading: true,
  isError: true,
};

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    try {
      console.log('sending request to fetch greetings');
      const response = await fetch('/greetings');
      const data = await response.json();
      console.log('fetched greeting');
      console.log({ data });
      return data.greeting;
    } catch (error) {
      throw new Error('Failed to fetch greeting');
    }
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.language = action.payload.language;
        state.phrase = action.payload.phrase;
        state.isError = false;
      })
      .addCase(fetchGreeting.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default greetingSlice.reducer;
