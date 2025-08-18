import { createSlice } from "@reduxjs/toolkit";


// untuk ambil data Kursi dari kursi
export const selectSelectedSeats = (state) =>
  state.order.bookingInfo.selectedSeat;


// untuk hitung total harga
export const selectTotalPrice = (state) =>
  state.order.bookingInfo.selectedSeat.length *
  state.order.bookingInfo.pricePerSeat;


const initialState = {
  selectedMovie: null,
  bookingInfo: {
    date: "",
    time: "",
    location: "",
    selectedSeat: [],
    pricePerSeat: 10,
    fullname: "",
    phone: "",
    payment: null,
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCinema: (state, action) => {
      state.cinema = action.payload;
    },
    setDataFullname: (state, action) => {
      state.bookingInfo.fullname = action.payload;
    },
    setDataPhone: (state, action) => {
      state.bookingInfo.phone = action.payload;
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
  setDataFullname,
  setDataPhone,
  setSelectedMovie,
  setBookingInfo,
  toggleSeat,
  clearSeats,
  setPayment,
} = orderSlice.actions;

export default orderSlice.reducer;
