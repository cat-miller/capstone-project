import { createSlice } from '@reduxjs/toolkit';
import setDataReducer from '../reducers/setDataReducer';
import toggleCaughtReducer from '../reducers/toggleCaughtReducer';
import toggleDonatedReducer from '../reducers/toggleDonatedReducer';

const initialState = {
  data: [],
  caught: [],
  donated: [],
  view: { showCaught: false, showDonated: false },
};

export const bugSlice = createSlice({
  name: 'bugs',
  initialState,
  reducers: {
    setBugs: setDataReducer,
    toggleCaught: toggleCaughtReducer,
    toggleDonated: toggleDonatedReducer,
  },
});

export const { toggleCaught, toggleDonated, setBugs } = bugSlice.actions;
export const selectBugs = state => state.bugs;

export default bugSlice.reducer;
