import React, { useEffect, useState } from "react";
import { OrderSeat } from "./Seat";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedSeats, toggleSeat } from "../redux/slice/orderSlice";
import axios from "axios";
import { data } from "react-router";

function CardRight() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [seatsData, setSeatsData] = useState([]);
  const id = useSelector((state) => state.order.bookingInfo.cinema?.id);
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

  useEffect(() => {
    if (!id) return;

    const fetchSeats = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BE_HOST}/seats/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setSeatsData(response.data); // asumsi: bentuk array [{ id: 1, codeseat: "A1", is_sold: true }, ...]
      } catch (err) {
        console.error("Failed fetching seats", err);
      }
    };

    fetchSeats();
  }, [id]);

  const leftSeats = generateSeats(1);
  const rightSeats = generateSeats(8);
  // const leftSeats = seatsData.filter((seat) => {
  //   const col = parseInt(seat.codeseat.slice(1)); // "A1" → 1
  //   return col >= 1 && col <= 7;
  // });

  // const rightSeats = seatsData.filter((seat) => {
  //   const col = parseInt(seat.codeseat.slice(1));
  //   return col >= 8 && col <= 14;
  // });

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
                  key={seatId.codeseat}
                  id={seatId.codeseat}
                  name={seatId.codeseat}
                  selectedSeats={selectedSeats}
                  onChange={handleChange}
                  isSold={seatId.is_sold}
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
