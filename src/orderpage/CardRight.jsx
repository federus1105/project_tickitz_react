import React, { useState } from "react";

function Seat({ id, name, selectedSeats, onChange }) {
  return (
    <>
      <div className=" w-7 h-7">
        <label
          htmlFor={id}
          className={`block h-full rounded-sm ${
            selectedSeats.includes(name) ? "bg-blue-700" : "bg-gray-400"
          } cursor-pointer`}
        ></label>
        <input
          id={id}
          name={name}
          onChange={onChange}
          type="checkbox"
          className="hidden"
        ></input>
      </div>
    </>
  );
}

function CardRight() {
  const [selectedSeats, setSelectedSeats] = useState([]);
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
              {(function () {
                const result = [];
                for (let i = 0; i < 49; i++) {
                  result.push(
                    <Seat
                      key={i}
                      id={i}
                      name={`seat-${i}`}
                      selectedSeats={selectedSeats}
                      onChange={(e) => {
                        setSelectedSeats((selectedSeats) => {
                          if (selectedSeats.includes(e.target.name)) {
                            return selectedSeats.filter(
                              (seat) => seat !== e.target.name
                            );
                          }
                          return [...selectedSeats, e.target.name];
                        });
                      }}
                    />
                  );
                }
                return result;
              })()}
            </div>
            <div className="grid grid-cols-7 mt-5">
              <span className="text-center">1</span>
              <span className="text-center">2</span>
              <span className="text-center">3</span>
              <span className="text-center">4</span>
              <span className="text-center">5</span>
              <span className="text-center">6</span>
              <span className="text-center">7</span>
            </div>
          </div>
          <div className="two">
            <div className="grid grid-cols-7 grid-rows-7 gap-y-2 gap-x-1">
              {(function () {
                const result = [];
                for (let i = 49; i < 98; i++) {
                  result.push(
                    <Seat
                      key={i}
                      id={i}
                      name={`seat-${i}`}
                      selectedSeats={selectedSeats}
                      onChange={(e) => {
                        setSelectedSeats((selectedSeats) => {
                          if (selectedSeats.includes(e.target.name)) {
                            return selectedSeats.filter(
                              (seat) => seat !== e.target.name
                            );
                          }
                          return [...selectedSeats, e.target.name];
                        });
                      }}
                    />
                  );
                }
                return result;
              })()}
            </div>
            <div className="grid grid-cols-7 mt-5">
              <span className="text-center">8</span>
              <span className="text-center">9</span>
              <span className="text-center">10</span>
              <span className="text-center">11</span>
              <span className="text-center">12</span>
              <span className="text-center">13</span>
              <span className="text-center">14</span>
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
