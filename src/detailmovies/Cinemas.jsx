import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCinema } from "../redux/slice/orderSlice";

const cinemas = [
  { name: "EBV.id", img: "/src/public/ebv.id.png" },
  { name: "Hiflix", img: "/src/public/hiflix 2.png" },
  { name: "CineOne21", img: "/src/public/cineone.png" },
  { name: "Cinepolis", img: "/src/public/cinepolis.png" },
];

export default function Cinemas() {
  const dispatch = useDispatch();
  const selectedCinema = useSelector((state) => state.order.cinema);
  const [showPopup, setShowPopup] = useState(false);
  // const [selectedCinema, setSelectedCinema] = useState("");
  const handleContinuw = () => {
    if (!selectedCinema) {
      setShowPopup(true);
      return;
    }
  };
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
            className={`border border-gray-400 py-5 px-5 rounded-sm flex justify-center items-center cursor-pointer transition-all duration-500 ${
              selectedCinema === cinema.name ? "bg-blue-700" : "bg-white"
            }`}
          >
            <input
              type="radio"
              name="cinema"
              value={cinema.name}
              checked={selectedCinema?.name === cinema.name}
              onChange={() => dispatch(setCinema(cinema.name))}
              className="hidden"
            />
            <img
              src={cinema.img}
              alt={cinema.name}
              className="w-60 h-auto pointer-events-none"
            />
          </label>
        ))}
      </div>
    </section>
  );
}
