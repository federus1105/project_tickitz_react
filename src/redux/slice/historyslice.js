import { createSlice } from '@reduxjs/toolkit';
import { fetchHistory } from '../thunk/historyThunk'; // pastikan path-nya sesuai

const historySlice = createSlice({
  name: 'history',
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default historySlice.reducer;
