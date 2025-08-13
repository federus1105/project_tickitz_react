import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

// untuk data Kursi
export const selectSelectedSeats = createSelector(
  (state) => state.order.bookingInfo.selectedSeat,
  (selectedSeat) => selectedSeat
);

// untuk data Total kursi
export const selectTotalPrice = createSelector(
  (state) => state.order.bookingInfo,
  (bookingInfo) => bookingInfo.selectedSeat.length * bookingInfo.pricePerSeat
);

const initialState = {
  selectedMovie: null,
  bookingInfo: {
    date: "",
    time: "",
    location: "",
    selectedSeat: [],
    pricePerSeat: 10,
    payment: null,
    fullname: "",
    phone: "",
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCinema: (state, action) => {
      state.cinema = action.payload;
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setBookingInfo: (state, action) => {
      state.bookingInfo = { ...state.bookingInfo, ...action.payload };
    },
    toggleSeat: (state, action) => {
      const seat = action.payload;
      const seatList = state.bookingInfo.selectedSeat;
      if (seatList.includes(seat)) {
        state.bookingInfo.selectedSeat = seatList.filter((s) => s !== seat);
      } else {
        state.bookingInfo.selectedSeat.push(seat);
      }
    },
    clearSeats: (state) => {
      state.selectedSeat = [];
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
  },
});

export const {
  setCinema,
  setSelectedMovie,
  setBookingInfo,
  toggleSeat,
  clearSeats,
  setPayment,
} = orderSlice.actions;

export default orderSlice.reducer;
