import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { thunk } from "redux-thunk";

export const fetchHistory = createAsyncThunk(
  'history/fetchHistory',
  async (token, thunkAPI) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BE_HOST}/history`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data)
      return res.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

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