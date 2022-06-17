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

export const seaCreatureSlice = createSlice({
  name: 'seaCreatures',
  initialState,
  reducers: {
    setSeaCreatures: setDataReducer,
    toggleCaught: toggleCaughtReducer,
    toggleDonated: toggleDonatedReducer,
    setView: setViewReducer,
  },
});

export const { toggleCaught, toggleDonated, setSeaCreatures, setView } =
  seaCreatureSlice.actions;
export const selectSeaCreatures = state => state.seaCreatures;

export default seaCreatureSlice.reducer;
