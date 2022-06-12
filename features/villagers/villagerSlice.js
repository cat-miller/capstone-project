import { createSlice } from '@reduxjs/toolkit';
import toggleFavoriteReducer from '../reducers/toggleFavoriteReducer';
import toggleNeighborReducer from '../reducers/toggleNeighborReducer';
import setDataReducer from '../reducers/setDataReducer';

const initialState = {
  data: [],
  favorites: [],
  neighbors: [],
};

export const villagerSlice = createSlice({
  name: 'villagers',
  initialState,
  reducers: {
    setVillagers: setDataReducer,
    toggleFavorites: toggleFavoriteReducer,
    toggleNeighbors: toggleNeighborReducer,
  },
});

export const { toggleFavorites, toggleNeighbors, setVillagers } =
  villagerSlice.actions;

export const selectVillagers = state => state.villagers;

export default villagerSlice.reducer;
