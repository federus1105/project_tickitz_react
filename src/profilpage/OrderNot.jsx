import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function OrderNot() {
  const bookingInfo = useSelector((state) => state.order.bookingInfo);
  return (
    <>
      <div class="px-10">
        <h3 className="font-bold text-lg pb-7">Ticket Information</h3>
        <div class="grid grid-rows-2 grid-cols-2 gap-y-5 max-lg:gap-x-17">
          <p className="text-gray-500">No. Rekening Virtual</p>
          <p className="font-bold text-end">
            12321328913829724
            <span className="border border-blue-700 py-2 px-4 rounded-sm text-blue-700 ml-2 font-normal">
              Copy
            </span>
          </p>
          <p className="text-gray-500">Total Payment</p>
          <p className="text-blue-700 font-bold text-end">$30</p>
        </div>
        <p className="text-gray-500 pt-3">
          Pay this payment bill before it is due, on
          <span className="text-red-700 font-medium">
            {" "}
            {new Date(bookingInfo.date).toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          . If the bill has not been paid by the specified time, it will be
          forfeited
        </p>
        <Link to="./ticketresult">
          <button className="bg-blue-700 text-white rounded-sm py-2 px-9 mt-4 mb-8">
            Cek Pembayaran
          </button>
        </Link>
      </div>
    </>
  );
}

export default OrderNot;