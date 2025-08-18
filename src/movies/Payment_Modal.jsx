import React, { useState } from "react";
import Modal from "../modal/Modal";
import Payment from "../modal/Payment";
import { useSelector, useDispatch } from "react-redux";
import {
  setDataFullname,
  setDataPhone,
  selectTotalPrice,
} from "../redux/slice/orderSlice";


function Payment_Modal() {
  const movie = useSelector((state) => state.order.selectedMovie);
  const cinema = useSelector((state) => state.order.cinema);
  const seatPrice = useSelector(selectTotalPrice);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { date, time, selectedSeat, fullname, phone } = useSelector(
    (state) => state.order.bookingInfo
  );
  const dispatch = useDispatch();


  const [Active, SetActive] = useState(false);

  return (
    <>
      <main className="relative bg-gray-200">
        {Active && <div className="absolute inset-0 backdrop-brightness-50" />}
        <div
          id="container"
          className="max-w-lg w-full mx-auto rounded-xl p-5 flex flex-col "
        >
          {/* Stepper Section */}
          <header
            id="card-step"
            className="flex justify-center items-center gap-4 flex-wrap"
          >
            {/* Step 1 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-1">
                <img src="/Vector.png" alt="Step 1 icon" />
              </div>
              <div className="text-xs text-gray-800">Dates And Time</div>
            </div>

            {/* Line 1 */}
            <div className="w-[50px] border border-dashed border-gray-400 mb-[15px]"></div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-1">
                <img src="/Vector.png" alt="Step 2 icon" />
              </div>
              <div className="text-xs text-gray-800">Seat</div>
            </div>

            {/* Line 2 */}
            <div className="w-[50px] border border-dashed border-gray-400 mb-[15px]"></div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-1">
                3
              </div>
              <div className="text-xs text-gray-800">Payment</div>
            </div>
          </header>
        </div>

        <section className="flex justify-center">
          <div
            id="container-payment"
            className="bg-white rounded-md mb-20 h-340 w-220 max-lg:w-160 max-lg:h-360"
          >
            <div id="payment-fill" className="m-11">
              <div>
                <h1 className="pb-5 font-bold text-2xl">Payment Info</h1>
              </div>
              <div id="grid" className="grid grid-rows-5 gap-5">
                <div>
                  <h4 className="text-gray-400 pb-2.5">DATE & TIME</h4>
                  <p className="pb-2">
                    {new Date(date).toLocaleDateString("en-GB", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    at {time}
                  </p>
                  <hr />
                </div>
                <div>
                  <h4 className="text-gray-400 pb-2.5">MOVIE TITLE</h4>
                  <p className="pb-2">{movie.title}</p>
                  <hr />
                </div>
                <div>
                  {Active && <Modal />}
                  <h4 className="text-gray-400 pb-2.5">CINEMA NAME</h4>
                  <p className="pb-2">{cinema?.name} Cinema</p>
                  <hr />
                </div>
                <div>
                  <h4 className="text-gray-400 pb-2.5">NUMBER OF TICKETS</h4>
                  <p className="pb-2">{selectedSeat.length} Pcs</p>
                  <hr />
                </div>
                <div>
                  <h4 className="text-gray-400 pb-2.5">TOTAL PAYMENT</h4>
                  <p className="pb-2 text-blue-700 font-bold">${seatPrice}</p>
                  <hr />
                </div>
              </div>
              <form>
                <div>
                  <div className="pt-15">
                    <h1 className="font-bold text-3xl pb-5">
                      Personal Information
                    </h1>
                  </div>
                  <div className="grid2">
                    <div>
                      <label
                        forhtml="fullname"
                        className="pt-5 text-gray-400 pb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        value={fullname}
                        placeholder="Full Name"
                        className="w-full border-1 border-gray-400 h-13 rounded-sm pl-10 text-lg mb-5 mt-1"
                        onChange={(e) =>
                          dispatch(setDataFullname(e.target.value))
                        }
                      />
                    </div>
                    <div>
                      <label forhtml="email" className=" text-gray-400 pb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={currentUser.email}
                        readOnly
                        className="w-full border-1 border-gray-400 h-13 rounded-sm pl-10 text-lg mb-5 mt-1"
                      />
                    </div>
                    <div>
                      <label
                        forhtml="phone"
                        className="pt-5 text-gray-400 pb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="number"
                        id="number"
                        value={phone}
                        placeholder="Phone Number"
                        className="w-full border-1 border-gray-400 h-13 rounded-sm pl-10 text-lg mt-1"
                        onChange={(e) => dispatch(setDataPhone(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
                <Payment />
              </form>
              <section>
                <div className="buttonplay">
                  <button
                    id="play"
                    className="w-full bg-blue-700 h-14 shadow-2xl text-white rounded-sm cursor-pointer mt-10"
                    onClick={() => SetActive((prev) => !prev)}
                  >
                    Play your order
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Payment_Modal;
