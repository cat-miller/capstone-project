import { configureStore } from '@reduxjs/toolkit';
import seaCreatureReducer from '../features/seaCreatures/seaCreatureSlice';

export const store = configureStore({
  reducer: {
    seaCreatures: seaCreatureReducer,
  },
});
