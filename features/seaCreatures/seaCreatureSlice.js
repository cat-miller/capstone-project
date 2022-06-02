import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  caught: [],
};

export const seaCreatureSlice = createSlice({
  name: 'seaCreatures',
  initialState,
  reducers: {
    toggleCaught: (state, action) => {
      console.log(action.payload);
      console.log(state.caught);
      if (state.caught.includes(action.payload)) {
        state.caught = state.caught.filter(id => action.payload != id);
      } else {
        state.caught = [...state.caught, action.payload];
      }
    },
  },
});

export const { toggleCaught } = seaCreatureSlice.actions;
export const selectSeaCreatures = state => state.seaCreatures;

export default seaCreatureSlice.reducer;
