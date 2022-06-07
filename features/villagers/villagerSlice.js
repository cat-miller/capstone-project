import { createSlice } from '@reduxjs/toolkit';
import toggleFavoriteReducer from '../reducers/toggleFavoriteReducer';
import toggleNeighborReducer from '../reducers/toggleNeighborReducer';

const initialState = {
  favorites: [],
  neighbors: [],
};

export const villagerSlice = createSlice({
  name: 'villagers',
  initialState,
  reducers: {
    toggleFavorites: toggleFavoriteReducer,
    toggleNeighbors: toggleNeighborReducer,
  },
});

export const { toggleFavorites, toggleNeighbors } = villagerSlice.actions;
export const selectVillagers = state => state.villagers;

export default villagerSlice.reducer;
