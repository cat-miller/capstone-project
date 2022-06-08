import { createSlice } from '@reduxjs/toolkit';
import setDataReducer from '../reducers/setDataReducer';
import toggleCaughtReducer from '../reducers/toggleCaughtReducer';
import toggleDonatedReducer from '../reducers/toggleDonatedReducer';

const initialState = {
  data: [],
  caught: [],
  donated: [],
};

export const fishSlice = createSlice({
  name: 'fishes',
  initialState,
  reducers: {
    setFishes: setDataReducer,
    toggleCaught: toggleCaughtReducer,
    toggleDonated: toggleDonatedReducer,
  },
});

export const { toggleCaught, toggleDonated, setFishes } = fishSlice.actions;
export const selectFishes = state => state.fishes;

export default fishSlice.reducer;
