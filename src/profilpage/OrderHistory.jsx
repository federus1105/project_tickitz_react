import React, { useState } from "react";
import OrderNot from "./OrderNot";
import OrderResult from "./OrderResult";
import { useSelector } from "react-redux";


function OrderHistory() {
  const movie = useSelector((state) => state.order.selectedMovie);
  const bookingInfo = useSelector((state) => state.order.bookingInfo);

  const [Active, SetActive] = useState(false);
  const [Tab, SetTab] = useState(false);
  return (
    <>
      <section>
        <div class="bg-white mt-5 rounded-md w-210 max-lg:w-155">
          <div class="grid grid-cols-2 py-5 mx-10 gap-110 max-lg:flex max-lg:gap-0 max-lg:flex-col max-lg:items-center">
            <div className="w-96">
              <p className="text-gray-400 max-lg:text-center">
                {new Date(bookingInfo.date).toLocaleDateString("en-GB", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                - {bookingInfo.time}pm
              </p>
              <h3 className="text-3xl font-bold">{movie.title}</h3>
            </div>
            <div>
              <img src="/src/public/cineOne21.svg" alt="" />
            </div>
          </div>
          <hr className="border-t-gray-400" />
          <div class="py-7 px-10 flex gap-5 max-lg:flex-col">
            <p className="bg-green-200 rounded-md text-green-600 px-10 py-1 max-lg:py-3 max-lg:text-center">
              Ticket in active
            </p>
            <p className="bg-red-200 rounded-md text-red-600 px-15 py-1 max-lg:py-3 max-lg:text-center">
              Not Paid
            </p>
            <div
              className="flex items-center max-lg:justify-center cursor-pointer "
              onClick={() => SetActive((prev) => !prev)}
            >
              <p className="flex text-gray-400">
                Show Detail
                <img
                  src="/src/public/dropdown.svg"
                  className="max-lg:pl-1 pl-1"
                />
              </p>
            </div>
          </div>
          {Active && <OrderNot />}
        </div>

        <div class="bg-white mt-5 rounded-md w-210 max-lg:w-155 mb-20">
          <div class="grid grid-cols-2 py-5 mx-10 gap-110 max-lg:flex max-lg:flex-col max-lg:gap-0 max-lg:items-center">
            <div className="w-96 max-lg:text-center">
              <p className="text-gray-400">Monday, 14 June 2020-02.20pm</p>
              <h3 className="text-3xl font-bold">Avengers: End Game</h3>
            </div>
            <div>
              <img
                src="/src/public/ebv.id.png"
                alt=""
                className="max-lg:w-30"
              />
            </div>
          </div>
          <hr className="border-t-gray-400" />
          <div class="py-7 px-10 flex gap-5 max-lg:flex-col">
            <p className="bg-gray-200 rounded-md text-gray-600 px-10 py-1 max-lg:py-3 max-lg:text-center">
              Ticket Used
            </p>
            <p className="bg-blue-200 rounded-md text-blue-600 px-15 py-1 max-lg:py-3 max-lg:text-center">
              Paid
            </p>
            <div
              className="flex items-center max-lg:justify-center cursor-pointer"
              onClick={() => SetTab((tab) => !tab)}
            >
              <p className="flex text-gray-400">
                Show Detail
                <img
                  src="/src/public/dropdown.svg"
                  className="max-lg:pl-1 pl-1"
                />
              </p>
            </div>
          </div>
          {Tab && <OrderResult />}
        </div>
      </section>
      <section />
    </>
  );
}

export default OrderHistory;
