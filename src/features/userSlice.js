import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status: 'idle',
}; 

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
