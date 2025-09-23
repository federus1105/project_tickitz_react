import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../redux/slice/orderSlice";

function CardLeft() {
  const movie = useSelector((state) => state.order.selectedMovie);
  const cinema = useSelector((state) => state.order.cinema);
  const seatPrice = useSelector(selectTotalPrice);
  const { date, time, selectedSeat } = useSelector(
    (state) => state.order.bookingInfo
  );
  return (
    <>
      <section className="bg-white h-full w-110 rounded-md">
        <div className="px-4">
          <div className="pt-5 pb-10 flex flex-col justify-center items-center">
            <img src={cinema?.img} alt={cinema?.name} className="max-w-30" />
            <p className="text-3xl">{cinema?.name} Cinema</p>
          </div>
          <div className="grid grid-rows-4 h-45 mb-10">
            {/* <div className="flex flex-col gap-4"> */}
            <div className="grid grid-cols-2">
              <p>Movie Selected</p>
              <p className="flex justify-end">
                {movie.title.substring(0, 12)}...
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="">
                {new Date(date).toLocaleDateString("en-GB", {
                  weekday: "long",
                  // year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="flex justify-end ">{time}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>One ticket price</p>
              <p className="flex justify-end">$10</p>
            </div>
            <div className="grid grid-cols-2 ">
              <p>Seat choosed</p>
              <p className="inline text-wrap max-w-50 text-end  ">
                {selectedSeat.join(", ")}
              </p>
            </div>
          </div>
          <hr className="border-gray-400 border-t-2" />
          <div className="pt-7 flex text-xl gap-53.5 pb-15">
            <h3>Total Payment</h3>
            <p className="font-bold text-blue-700">${seatPrice}</p>
          </div>
        </div>
        <Link to="../paymentmodal">
          <button className="bg-blue-700 w-110 h-12 text-white rounded-md mt-10 absolute cursor-pointer hover:bg-blue-500 ">
            Checkout now
          </button>
        </Link>
      </section>
    </>
  );
}

export default CardLeft;
