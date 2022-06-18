import { configureStore } from '@reduxjs/toolkit';
import seaCreatureReducer from '../features/seaCreatures/seaCreatureSlice';
import bugReducer from '../features/bugs/bugSlice';
import fishReducer from '../features/fishes/fishSlice';
import villagerReducer from '../features/villagers/villagerSlice';
import passportReducer from '../features/passport/passportSlice';

export const store = configureStore({
  reducer: {
    seaCreatures: seaCreatureReducer,
    bugs: bugReducer,
    fishes: fishReducer,
    villagers: villagerReducer,
    passport: passportReducer,
  },
});
