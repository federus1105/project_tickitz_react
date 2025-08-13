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
    cinema: null,
    date: "",
    time: "",
    location: "",
    selectedSeat: [],
    pricePerSeat: 10,
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
    // clearSelectedMovie: (state) => {
    //   state.selectedMovie = null;
    //   state.bookingInfo = {
    //     cinema: null,
    //     date: "",
    //     time: "",
    //     location: "",
    //     selectedSeat: [],
    //     pricePerSeat: 10,
    //   };
    // },
  },
});

export const {
  setCinema,
  setSelectedMovie,
  clearSelectedMovie,
  setBookingInfo,
  toggleSeat,
  clearSeats,
} = orderSlice.actions;

export default orderSlice.reducer;
