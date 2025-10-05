import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory } from "../redux/thunk/historyThunk";
import { Link } from "react-router";

function OrderResult() {
  const [active, SetActive] = useState({});
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const history = useSelector((state) => state.history?.data || []);

  useEffect(() => {
    if (token) {
      dispatch(fetchHistory(token));
    }
  }, [token, dispatch]);

  // Toggle per card
  const toggleActive = (id) => {
    SetActive((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {history.length === 0 ? (
        <p className="mt-10 mx-auto max-w-xl text-center text-base text-gray-700 bg-blue-50 px-6 py-4 rounded-lg shadow-md">
          📭 Kamu belum memiliki riwayat pembelian.
          <Link to={"../listmovies"}>
            <span className="text-blue-700"> Ayo pesan tiket sekarang!</span>
          </Link>
        </p>
      ) : (
        history.map((item) => (
          <div
            key={item.id_order}
            className="bg-white my-5 rounded-md w-220 max-lg:w-155"
          >
            <div className="grid grid-cols-2 py-5 mx-10 gap-110 max-lg:flex max-lg:flex-col max-lg:gap-0 max-lg:items-center">
              <div className="w-96 max-lg:text-center">
                <p className="text-gray-400">
                  {/* You can render formatted date/time here */}
                  <p className="text-gray-400">
                    {" "}
                    {/* {new Date(date).toLocaleDateString("en-GB", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "} */}
                    {item.time}pm
                  </p>
                </p>
                <h3 className="text-3xl font-bold">{item.movie_title}</h3>
              </div>
              <div>
                <img
                  src={item.cinema?.img}
                  alt={item.cinema}
                  className="max-w-40 pt-5"
                />
              </div>
            </div>

            <hr className="border-t-gray-400" />
            <div className="py-7 px-10 flex gap-5 max-lg:flex-col">
              <p
                className={`rounded-md px-10 py-1 max-lg:py-3 max-lg:text-center
        ${
          item.paid
            ? "bg-green-200 text-green-600"
            : "bg-yellow-200 text-yellow-600"
        }`}
              >
                {item.paid ? "Used" : "Ticket In Active"}
              </p>

              <p
                className={`rounded-md px-15 py-1 max-lg:py-3 max-lg:text-center
      ${item.paid ? "bg-blue-200 text-blue-600" : "bg-red-200 text-red-600"}`}
              >
                {item.paid ? "Paid" : "Not Paid"}
              </p>

              <div
                className="flex items-center max-lg:justify-center cursor-pointer"
                onClick={() => toggleActive(item.id_order)}
              >
                <p className="flex text-gray-400">
                  {active[item.id_order] ? "Hide" : "Show"} Detail
                  <img src="/dropdown.svg" className="pl-1" />
                </p>
              </div>
            </div>

            {active[item.id_order] && (
              <div className="px-10">
                <h3 className="font-bold text-lg mb-4">Ticket Information</h3>
                <div className="flex gap-8 items-start">
                  {/* QR Code */}
                  <img
                    src="/QR Code 1.svg"
                    alt="QR Code"
                    className="w-32 h-32 object-contain"
                  />

                  {/* Ticket Info */}
                  <div className="flex gap-8 mb-15">
                    {/* Left */}
                    <div className="space-y-4">
                      <div className="flex justify-between gap-10">
                        <div>
                          <h4 className="text-gray-400">Category</h4>
                          <p>PG-13</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400">Time</h4>
                          <p>{item.time}</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400">Seats</h4>
                          <p>{item.seat}</p>
                        </div>
                      </div>

                      <div className="flex gap-10">
                        <div>
                          <h4 className="text-gray-400">Movie</h4>
                          <p>
                            {item.movie_title.length > 12
                              ? item.movie_title.substring(0, 12) + "..."
                              : item.movie_title}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-gray-400">Date</h4>
                          <p>{item.date}</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400">Count</h4>
                          <p>{item.total_seats} pcs</p>
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-xl">Total</p>
                      <h2 className="text-xl font-bold">
                        Rp{item.total.toLocaleString()}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </>
  );
}

export default OrderResult;
