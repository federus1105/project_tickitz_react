import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMovie: null,
  bookingInfo: {
    cinema: null,
    date: "",
    time: "",
    location: "",
    seat: [],
  },
};

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCinema: (state, action) => {
      state.cinema = action.payload
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setBookingInfo: (state, action) => {
      state.bookingInfo = { ...state.bookingInfo, ...action.payload };
    },
    addSeat: (state, action) => {
      if (!state.bookingInfo.seat.includes(action.payload)) {
        state.bookingInfo.seat.push(action.payload);
      }
    },
    removeSeat: (state, action) => {
      state.bookingInfo.seat = state.bookingInfo.seat.filter(
        (seat) => seat !== action.payload
      );
    },
    cleearSelectedMovie: (state) => {
      state.selectedMovie = null;
      state.bookingInfo = {date: "", time: "", location:""}
    },
  },
});

export const {
  setCinema,
  setSelectedMovie,
  cleearSelectedMovie,
  setBookingInfo,
  addSeat,
  removeSeat,
} = OrderSlice.actions;
export default OrderSlice.reducer;
