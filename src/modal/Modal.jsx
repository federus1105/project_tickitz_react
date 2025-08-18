import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../redux/slice/orderSlice";
import { toast } from "sonner";

function Modal() {
  toast.success("Pembayaran Berhasil");
  const bookingInfo = useSelector((state) => state.order.bookingInfo);
  const seatPrice = useSelector(selectTotalPrice);
  return (
    <>
      <section className="">
        <div
          id="payment-info"
          className="absolute shadow-2xl bg-white w-180 h-115 rounded-lg mx-9 max-lg:w-138 max-lg:mx-0"
        >
          <div id="fill-payment" className="py-5 px-10">
            <h3 className="text-center text-2xl mb-10 font-bold">
              Payment Info
            </h3>
            <div id="fill-data" className="grid grid-cols-2 text-lg">
              <div className="text-gray-500">
                <span>No. Rekening Virtual</span>
                <p className="pt-10">Total Payment</p>
              </div>
              <div className="pl-14 max-lg:ml-[-82px]">
                <h3 className="text-lg inline font-bold">12321328913829724</h3>
                <span className="border-1 border-blue-700 rounded-sm py-2.5 px-4 text-blue-600 ml-3">
                  Copy
                </span>
                <p className="text-blue-700 flex justify-end pt-10 text-xl font-bold">
                  ${seatPrice}
                </p>
              </div>
            </div>
            <div id="descpay" className="pt-8">
              <p className="text-gray-500 text-lg">
                Pay this payment bill before it is due,{" "}
                <span className="text-red-600">
                  on{" "}
                  {new Date(bookingInfo.date).toLocaleDateString("en-GB", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  .{" "}
                </span>
                If the bill has not been paid by the specified time, it will be
                forfeited
              </p>
            </div>
            <div className="pt-10 text-center">
              <div className="bg-blue-700 text-white h-10 pt-2 rounded-sm hover:bg-blue-500">
                <Link to="../ticketresult">Check Payment</Link>
              </div>
              <div className="pt-5 text-blue-700 font-bold">Pay Later</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Modal;
