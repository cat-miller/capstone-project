import { createSlice } from '@reduxjs/toolkit';
import toggleFavoriteReducer from '../reducers/toggleFavoriteReducer';
import toggleNeighborReducer from '../reducers/toggleNeighborReducer';
import setDataReducer from '../reducers/setDataReducer';
import setViewReducer from '../reducers/setViewReducer';
import user from '../../user.json';

const initialState = {
  data: [],
  favorites: user.villagers.favorites,
  neighbors: user.villagers.neighbors,
  view: { showFavorites: false, showNeighbors: false },
};

export const villagerSlice = createSlice({
  name: 'villagers',
  initialState,
  reducers: {
    setVillagers: setDataReducer,
    toggleFavorites: toggleFavoriteReducer,
    toggleNeighbors: toggleNeighborReducer,
    setView: setViewReducer,
  },
});

export const { toggleFavorites, toggleNeighbors, setVillagers, setView } =
  villagerSlice.actions;

export const selectVillagers = state => state.villagers;

export default villagerSlice.reducer;
