import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  caught: [],
};

export const seaCreatureSlice = createSlice({
  name: 'seaCreatures',
  initialState,
  reducers: {
    toggleCaught: (state, action) => {
      if (state.caught.includes(action.payload.id)) {
        state.caught.filter(id => action.payload.id != id);
      }
      state.caught = [...state.caught, action.payload.id];
    },
  },
});

export const { toggleCaught } = seaCreatureSlice.actions;

export default seaCreatureSlice.reducer;
