import { createSlice } from '@reduxjs/toolkit';
import toggleCaughtReducer from '../reducers/toggleCaughtReducer';
import toggleDonatedReducer from '../reducers/toggleDonatedReducer';

const initialState = {
  caught: [],
  donated: [],
};

export const bugSlice = createSlice({
  name: 'bugs',
  initialState,
  reducers: {
    toggleCaught: toggleCaughtReducer,
    toggleDonated: toggleDonatedReducer,
  },
});

export const { toggleCaught, toggleDonated } = bugSlice.actions;
export const selectBugs = state => state.bugs;

export default bugSlice.reducer;
