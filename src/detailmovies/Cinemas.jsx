import { useState } from "react";

const cinemas = [
  { name: "EBV.id", img: "/src/public/ebv.id.png" },
  { name: "Hiflix", img: "/src/public/hiflix3.png" },
  { name: "CineOne", img: "/src/public/cineone.png" },
  { name: "EBV", img: "/src/public/ebv.id.png" },
];

export default function Cinemas() {
  const [selectedCinema, setSelectedCinema] = useState("");

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
              checked={selectedCinema === cinema.name}
              onChange={() => setSelectedCinema(cinema.name)}
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
