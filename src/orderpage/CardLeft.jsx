import React from 'react'
import { Link } from "react-router-dom";

function CardLeft() {
  return (
    <>
      <section className="bg-white h-full rounded-md">
        <div className="px-4">
          <div className="pt-5 pb-10 flex flex-col justify-center items-center">
            <img src="/src/public/CineOne21.svg" alt="" />
            <p className="text-3xl">CineOne21 Cinema</p>
          </div>
          <div className="grid grid-cols-2 pb-10">
            <div className="flex flex-col gap-4">
              <p>Movie Selected</p>
              <p>Tuesday, 07 July 2020</p>
              <p>One ticket price</p>
              <p>Seat choosed</p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <p>Spider-Man: Homecoming</p>
              <p>13:00pm</p>
              <p>$10</p>
              <p>C4, C5, C6</p>
            </div>
          </div>
          <hr className="border-gray-400 border-t-2" />
          <div className="pt-7 flex text-xl gap-53.5 pb-15">
            <h3>Total Payment</h3>
            <p className="font-bold text-blue-700">$30</p>
          </div>
        </div>
        <Link to="../paymentmodal">
          <button className="bg-blue-700 w-101 h-12 text-white rounded-md mt-10 absolute cursor-pointer hover:bg-blue-500 ">
            Checkout now
          </button>
        </Link>
      </section>
    </>
  );
}

export default CardLeft