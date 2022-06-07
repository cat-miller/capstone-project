import { createSlice } from '@reduxjs/toolkit';
import toggleBookmark from '../generalReducers/toggleBookmark';

const initialState = {
  caught: [],
};

export const seaCreatureSlice = createSlice({
  name: 'seaCreatures',
  initialState,
  reducers: {
    toggleCaught: toggleBookmark,
  },
});

export const { toggleCaught } = seaCreatureSlice.actions;
export const selectSeaCreatures = state => state.seaCreatures;

export default seaCreatureSlice.reducer;
