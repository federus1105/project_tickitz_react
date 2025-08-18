import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCinema } from "../redux/slice/orderSlice";

const cinemas = [
  { name: "EBV.id", img: "/ebv.id.png" },
  { name: "Hiflix", img: "/hiflix 2.png" },
  { name: "CineOne21", img: "/cineone.png" },
  { name: "Cinepolis", img: "/cinepolis.png" },
];

export default function Cinemas() {
  const dispatch = useDispatch();
  const selectedCinema = useSelector((state) => state.order.cinema);
  return (
    <section>
      <div className="flex gap-8 mt-10 items-center">
        <p className="font-semibold">Choose Cinema</p>
        <span className="text-gray-400">39 Result</span>
      </div>

      <div className="grid grid-cols-4 mt-5 gap-6 max-lg:grid-cols-2">
        {cinemas.map((cinema, index) => (
          <label
            key={index}
            className={`border border-gray-400 py-5 px-5 max-lg:h-20 rounded-sm flex justify-center items-center cursor-pointer transition-all duration-500 ${
              selectedCinema?.name === cinema.name ? "bg-blue-700" : "bg-white"
            }`}
          >
            <input
              type="radio"
              name="cinema"
              value={cinema}
              checked={selectedCinema?.name === cinema.name}
              onChange={() => dispatch(setCinema(cinema))}
              className="hidden"
            />
            <img
              src={cinema.img}
              alt={cinema.name}
              className="w-60 h-auto pointer-events-none max-lg:w-40 max-lg:h-auto"
            />
          </label>
        ))}
      </div>
    </section>
  );
}
