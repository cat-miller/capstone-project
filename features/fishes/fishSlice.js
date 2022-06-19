import { createSlice } from '@reduxjs/toolkit';
import setDataReducer from '../reducers/setDataReducer';
import toggleCaughtReducer from '../reducers/toggleCaughtReducer';
import toggleDonatedReducer from '../reducers/toggleDonatedReducer';
import setViewReducer from '../reducers/setViewReducer';
import user from '../../user.json';

const initialState = {
  data: [],
  caught: user.fishes.caught,
  donated: user.fishes.caught,
  view: { showCaught: false, showDonated: false },
};

export const fishSlice = createSlice({
  name: 'fishes',
  initialState,
  reducers: {
    setFishes: setDataReducer,
    toggleCaught: toggleCaughtReducer,
    toggleDonated: toggleDonatedReducer,
    setView: setViewReducer,
  },
});

export const { toggleCaught, toggleDonated, setFishes, setView } =
  fishSlice.actions;
export const selectFishes = state => state.fishes;

export default fishSlice.reducer;
