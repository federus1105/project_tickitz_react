import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookingInfo } from "../redux/slice/orderSlice";
import { useParams } from "react-router";
// import Cinemas from "../detailmovies/Cinemas";
import { setCinema } from "../redux/slice/orderSlice";
import { toast } from "sonner";

function Books() {
  const token = useSelector((state) => state.auth.token);
  const { id } = useParams();
  const dispatch = useDispatch();
  const bookingInfo = useSelector((state) => state.order.bookingInfo);
  const [scheduleOptions, setScheduleOptions] = useState([]);
  const selectedCinema = useSelector((state) => state.order.bookingInfo.cinema);
  const [filteredCinemas, setFilteredCinemas] = useState([]);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BE_HOST}/schedule/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const result = await res.json();
        if (res.ok) {
          setScheduleOptions(result.data);
        }
      } catch (err) {
        console.error("Failed fetch schedules:", err);
      }
    })();
  }, [id]);
  const handleFilter = () => {
    // Pastikan semua field dipilih
    if (!bookingInfo.date || !bookingInfo.time || !bookingInfo.location) {
      toast.info("Silakan pilih tanggal, waktu, dan lokasi terlebih dahulu.");
      setFilteredCinemas([]);
      return;
    }

    const filteredSchedules = scheduleOptions.filter((sch) => {
      return (
        sch.date === bookingInfo.date &&
        sch.time === bookingInfo.time &&
        sch.tocation === bookingInfo.location
      );
    });

    const uniqueCinemas = Array.from(
      new Map(
        filteredSchedules.map((sch) => [
          sch.name,
          { id: sch.id_cinema, name: sch.cinema, image: sch.image_cinema },
        ])
      ).values()
    );

    setFilteredCinemas(uniqueCinemas);
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
            <div className="flex flex-col w-60 relative">
              <label className="pb-3">Choose date</label>
              <select
                className="w-full h-12 bg-gray-200 px-5 rounded-md appearance-none"
                onChange={(e) =>
                  dispatch(
                    setBookingInfo({ ...bookingInfo, date: e.target.value })
                  )
                }
                value={bookingInfo.date}
              >
                <option value=""> Pilih tanggal </option>
                {scheduleOptions.map((sch) => (
                  <option key={sch.Id} value={sch.date}>
                    {sch.date}
                  </option>
                ))}
              </select>
              <img
                src="/icons8-dropdown-50.png"
                alt="dropdown icon"
                className="absolute right-4 top-12.5 w-5 h-5"
              />
            </div>
            <div className="flex flex-col w-60 relative">
              <label className="pb-3">Choose Time</label>
              <select
                className="w-full h-12 bg-gray-200 px-5 rounded-md appearance-none"
                onChange={(e) =>
                  dispatch(
                    setBookingInfo({ ...bookingInfo, time: e.target.value })
                  )
                }
                value={bookingInfo.time}
              >
                <option value=""> Pilih Waktu </option>
                {scheduleOptions.map((sch) => (
                  <option key={sch.Id} value={sch.time}>
                    {sch.time}
                  </option>
                ))}
              </select>
              <img
                src="/icons8-dropdown-50.png"
                alt="dropdown icon"
                className="absolute right-4 top-12.5 w-5 h-5"
              />
            </div>
            <div className="flex flex-col w-60 relative">
              <label htmlFor="" className="pb-3">
                Choose Location
              </label>
              <select
                onChange={(e) =>
                  dispatch(
                    setBookingInfo({ ...bookingInfo, location: e.target.value })
                  )
                }
                value={bookingInfo.location}
                className="w-full h-12 bg-gray-200 px-5 rounded-md appearance-none"
              >
                <option value=""> Pilih lokasi </option>
                {scheduleOptions.map((sch) => (
                  <option key={sch.Id} value={sch.tocation}>
                    {sch.tocation}
                  </option>
                ))}
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
                className="bg-blue-700 text-white w-40 h-12 rounded-md mt-9 cursor-pointer"
              >
                Filter
              </button>
            </div>
          </div>
        </div>
        <section>
          <div className="flex gap-8 mt-10 items-center">
            <p className="font-semibold">Choose Cinema</p>
            <span className="text-gray-400">
              {filteredCinemas.length} Result
            </span>
          </div>

          <div className="grid grid-cols-4 mt-5 gap-6 max-lg:grid-cols-2">
            {filteredCinemas.map((cinema, index) => (
              <label
                key={index}
                className={`border border-gray-400 py-5 px-5 max-lg:h-20 rounded-sm flex justify-center items-center cursor-pointer transition-all duration-500 ${
                  selectedCinema?.name === cinema.name
                    ? "bg-blue-700 text-white"
                    : "bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="cinema"
                  value={cinema.name}
                  checked={selectedCinema?.name === cinema.name}
                  onChange={() => dispatch(setCinema(cinema))}
                  className="hidden"
                />

                {cinema.image_cinema ? (
                  <img
                    src={cinema.image_cinema}
                    alt={cinema.name}
                    className="w-60 h-auto pointer-events-none max-lg:w-40 max-lg:h-auto"
                  />
                ) : (
                  <span className="text-lg font-semibold pointer-events-none">
                    {cinema.name}
                  </span>
                )}
              </label>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
export default Books;
