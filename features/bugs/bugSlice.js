import { createSlice } from '@reduxjs/toolkit';
import setDataReducer from '../reducers/setDataReducer';
import toggleCaughtReducer from '../reducers/toggleCaughtReducer';
import toggleDonatedReducer from '../reducers/toggleDonatedReducer';
import setViewReducer from '../reducers/setViewReducer';

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
    setView: setViewReducer,
  },
});

export const { toggleCaught, toggleDonated, setBugs, setView } =
  bugSlice.actions;
export const selectBugs = state => state.bugs;

export default bugSlice.reducer;
