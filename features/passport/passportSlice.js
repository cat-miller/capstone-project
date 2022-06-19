import { createSlice } from '@reduxjs/toolkit';
import setPassportReducer from '../reducers/setPassportReducer';
import setThemeReducer from '../reducers/setThemeReducer';
import user from '../../user.json';

const initialState = {
  island: user.passport.island,
  code: user.passport.code,
  theme: 'spring',
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
