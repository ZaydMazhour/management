import {configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import dataSlice from '../slices/dataSlice';

export const store = configureStore({
  reducer: {
    dataSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
