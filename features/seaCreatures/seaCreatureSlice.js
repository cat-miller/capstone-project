import { createSlice } from '@reduxjs/toolkit';
import toggleCaughtReducer from '../reducers/toggleCaughtReducer';
import toggleDonatedReducer from '../reducers/toggleDonatedReducer';

const initialState = {
  caught: [],
  donated: [],
};

export const seaCreatureSlice = createSlice({
  name: 'seaCreatures',
  initialState,
  reducers: {
    toggleCaught: toggleCaughtReducer,
    toggleDonated: toggleDonatedReducer,
  },
});

export const { toggleCaught, toggleDonated } = seaCreatureSlice.actions;
export const selectSeaCreatures = state => state.seaCreatures;

export default seaCreatureSlice.reducer;
