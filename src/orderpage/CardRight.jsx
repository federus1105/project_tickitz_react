import React from "react";
import { OrderSeat } from "./Seat";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedSeats, toggleSeat } from "../redux/slice/orderSlice";

function CardRight() {
  const dispatch = useDispatch();
  // ambil data kursi dipilih
  const selectedSeats = useSelector(selectSelectedSeats);

  const rows = ["A", "B", "C", "D", "E", "F", "G"];

  const generateSeats = (startCol) => {
    const seats = [];
    for (let row of rows) {
      for (let col = startCol; col < startCol + 7; col++) {
        seats.push(`${row}${col}`);
      }
    }
    return seats;
  };

  const leftSeats = generateSeats(1);
  const rightSeats = generateSeats(8);

  const handleChange = (e) => {
    dispatch(toggleSeat(e.target.name));
  };

  return (
    <>
      <main>
        <div className="mx-5 pb-8 text-2xl">
          <h2>Choose Your Seat</h2>
        </div>
        <div>
          <span className="flex justify-center text-gray-500 pb-5">Screen</span>
          <hr className="pb-5 mx-18 border-t-3 border-gray-200" />
        </div>

        <div className="grid grid-cols-2 ml-18 mr-17 gap-23 max-lg:gap-10 max-lg:mx-8">
          <div className="one">
            <div className="grid grid-cols-7 grid-rows-7 gap-y-2 gap-x-1">
              {leftSeats.map((seatId) => (
                <OrderSeat
                  key={seatId}
                  id={seatId}
                  name={seatId}
                  selectedSeats={selectedSeats}
                  onChange={handleChange}
                />
              ))}
            </div>

            <div className="grid grid-cols-7 mt-5">
              {Array.from({ length: 7 }, (_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 text-sm text-center text-gray-700"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="two">
            <div className="grid grid-cols-7 grid-rows-7 gap-y-2 gap-x-1">
              {rightSeats.map((seatId) => (
                <OrderSeat
                  key={seatId}
                  id={seatId}
                  name={seatId}
                  selectedSeats={selectedSeats}
                  onChange={handleChange}
                />
              ))}
            </div>
            <div className="grid grid-cols-7 mt-5">
              {Array.from({ length: 7 }, (_, i) => (
                <div
                  key={i + 7}
                  className="w-8 h-8 text-sm text-center text-gray-700"
                >
                  {i + 8}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 ml-6 pb-17">
          <h2 className="text-xl">Seating key</h2>
          <div className="flex gap-20 pt-4 pl-10 max-lg:gap-8">
            <div>
              <h4>Available</h4>
            </div>
            <div className="flex gap-1">
              <div className="bg-blue-700 w-6 h-6 rounded-sm"></div>
              <h3>Selected</h3>
            </div>
            <div className="flex gap-1">
              <div className="bg-pink-500 w-6 h-6 rounded-sm"></div>
              <h3>Love Nest</h3>
            </div>
            <div className="flex gap-1">
              <div className="bg-gray-600 w-6 h-6 rounded-sm"></div>
              <h3>Sold</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CardRight;
