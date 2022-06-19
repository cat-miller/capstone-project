import { createSlice } from '@reduxjs/toolkit';
import setPassportReducer from '../reducers/setPassportReducer';
import setThemeReducer from '../reducers/setThemeReducer';

const initialState = {
  island: { user: '', name: '', fruit: 'Peach' },
  code: { switch: '', dreamId: '', creatorId: '' },
  theme: {},
};

export const passportSlice = createSlice({
  name: 'passport',
  initialState,
  reducers: {
    setPassport: setPassportReducer,
    setTheme: setThemeReducer,
  },
});

export const { setPassport, setTheme } = passportSlice.actions;
export const selectPassport = state => state.passport;

export default passportSlice.reducer;
