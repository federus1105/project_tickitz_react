import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookingInfo } from "../redux/slice/orderSlice";

function Books() {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const bookingInfo = useSelector((state) => state.order.bookingInfo);

  const handleFilter = () => {
    dispatch(setBookingInfo({ date, time, location }));
  };
  return (
    <>
      <section>
        <div id="books">
          <div>
            <h2 className="inline-block my-8 text-3xl max-lg:text-2xl">
              Books Tickets
            </h2>
          </div>
          <div
            id="info"
            className="grid grid-cols-4 gap-9 max-lg:flex max-lg:flex-wrap"
          >
            <div>
              <p className="pb-3">Choose date</p>
              <input
                type="date"
                value={bookingInfo.date}
                onChange={(e) =>
                  dispatch(
                    setBookingInfo({ ...bookingInfo, date: e.target.value })
                  )
                }
                className="w-58 h-12 bg-gray-200 px-5 rounded-md"
              />
            </div>
            <div>
              <p className="pb-3">Choose Time</p>
              <input
                type="time"
                value={bookingInfo.time}
                onChange={(e) =>
                  dispatch(
                    setBookingInfo({ ...bookingInfo, time: e.target.value })
                  )
                }
                className="w-58 h-12 bg-gray-200 px-5 rounded-md"
              />
            </div>
            <div className="flex flex-col w-60 relative">
              <label htmlFor="" className="pb-3">
                Choose Location
              </label>
              <select
                value={bookingInfo.location}
                onChange={(e) =>
                  dispatch(
                    setBookingInfo({ ...bookingInfo, location: e.target.value })
                  )
                }
                className="w-full h-12 bg-gray-200 px-5 rounded-md appearance-none"
              >
                <option value="Jakarta">Jakarta</option>
                <option value="Bandung">Bandung</option>
                <option value="Bogor">Bogor</option>
                <option value="Jogja">Jogja</option>
              </select>
              <img
                src="/icons8-dropdown-50.png"
                alt="dropdown icon"
                className="absolute right-4 top-12.5 w-5 h-5"
              />
            </div>

            <div>
              <button
                onClick={handleFilter}
                className="bg-blue-700 text-white w-40 h-12 rounded-md mt-9"
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Books;
