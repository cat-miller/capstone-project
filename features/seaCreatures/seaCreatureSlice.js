import { createSlice } from '@reduxjs/toolkit';
import setDataReducer from '../reducers/setDataReducer';
import toggleCaughtReducer from '../reducers/toggleCaughtReducer';
import toggleDonatedReducer from '../reducers/toggleDonatedReducer';

const initialState = {
  data: [],
  caught: [],
  donated: [],
};

export const seaCreatureSlice = createSlice({
  name: 'seaCreatures',
  initialState,
  reducers: {
    setSeaCreatures: setDataReducer,
    toggleCaught: toggleCaughtReducer,
    toggleDonated: toggleDonatedReducer,
  },
});

export const { toggleCaught, toggleDonated, setSeaCreatures } =
  seaCreatureSlice.actions;
export const selectSeaCreatures = state => state.seaCreatures;

export default seaCreatureSlice.reducer;
