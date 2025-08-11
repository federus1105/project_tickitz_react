import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMovie: null,
  bookingInfo: {
    date: "",
    time: "",
    seat: [],
  },
};

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setBookingInfo: (state, action) => {
      state.bookingInfo = { ...state.bookingInfo, ...action.payload };
    },
    addSeat: (state, action) => {
      if (!state.seat.includes(action.payload)) {
        state.seat.push(action.payload);
      }
    },
    removeSeat: (state, action) => {
      state.seat = state.seat.filter((seat) => seat !== action.payload);
    },
    cleearSelectedMovie: (state) => {
      state.selectedMovie = null;
    },
  },
});

export const { setSelectedMovie, cleearSelectedMovie, setBookingInfo, addSeat, removeSeat } =
  OrderSlice.actions;
export default OrderSlice.reducer;
