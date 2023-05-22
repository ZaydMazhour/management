// dataSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {post} from '../components/First';

interface DataState {
  dataArray: post[];
}

const initialState: DataState = {
  dataArray: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDataArray: (state, action: PayloadAction<post[]>) => {
      state.dataArray = action.payload;
    },
  },
});

export const {setDataArray} = dataSlice.actions;

export default dataSlice.reducer;
