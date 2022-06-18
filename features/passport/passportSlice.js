import { createSlice } from '@reduxjs/toolkit';
import setPassportReducer from '../reducers/setPassportReducer';

const initialState = {
  island: { user: '', name: '', fruit: 'Peach' },
  code: { switch: '', dreamId: '', creatorId: '' },
};

export const passportSlice = createSlice({
  name: 'passport',
  initialState,
  reducers: {
    setPassport: setPassportReducer,
  },
});

export const { setPassport } = passportSlice.actions;
export const selectPassport = state => state.passport;

export default passportSlice.reducer;
