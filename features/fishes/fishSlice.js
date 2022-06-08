import { createSlice } from '@reduxjs/toolkit';
import toggleCaughtReducer from '../reducers/toggleCaughtReducer';
import toggleDonatedReducer from '../reducers/toggleDonatedReducer';

const initialState = {
  caught: [],
  donated: [],
};

export const fishSlice = createSlice({
  name: 'fishes',
  initialState,
  reducers: {
    toggleCaught: toggleCaughtReducer,
    toggleDonated: toggleDonatedReducer,
  },
});

export const { toggleCaught, toggleDonated } = fishSlice.actions;
export const selectFishes = state => state.fishes;

export default fishSlice.reducer;
