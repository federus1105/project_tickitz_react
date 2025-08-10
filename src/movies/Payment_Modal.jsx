import React, { useState } from "react";
import Modal from "../modal/Modal";
import Payment from "../modal/Payment";

function Payment_Modal() {
  const [Active, SetActive] = useState(false);
  return (
    <>
      <main className=" bg-gray-200">
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
                <img src="/src/public/Vector.png" alt="Step 1 icon" />
              </div>
              <div className="text-xs text-gray-800">Dates And Time</div>
            </div>

            {/* Line 1 */}
            <div className="w-[50px] border border-dashed border-gray-400 mb-[15px]"></div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-1">
                <img src="/src/public/Vector.png" alt="Step 2 icon" />
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
                  <p className="pb-2">Tuesday, 07 July 2020 at 02:00pm</p>
                  <hr />
                </div>
                <div>
                  <h4 className="text-gray-400 pb-2.5">MOVIE TITLE</h4>
                  <p className="pb-2">Spider-Man: Homecoming</p>
                  <hr />
                </div>
                <div>
                  {Active && <Modal />}
                  <h4 className="text-gray-400 pb-2.5">CINEMA NAME</h4>
                  <p className="pb-2">CineOne21 Cinema</p>
                  <hr />
                </div>
                <div>
                  <h4 className="text-gray-400 pb-2.5">NUMBER OF TICKETS</h4>
                  <p className="pb-2">3 pieces</p>
                  <hr />
                </div>
                <div>
                  <h4 className="text-gray-400 pb-2.5">TOTAL PAYMENT</h4>
                  <p className="pb-2 text-blue-700">$30,00</p>
                  <hr />
                </div>
              </div>
              <div>
                <div className="pt-15">
                  <h1 className="font-bold text-3xl">Personal Information</h1>
                </div>
                <div className="grid2">
                  <div>
                    <p className="pt-5 text-gray-400 pb-2">Full Name</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Jonas El Rodriguez"
                      className="w-full border-1 border-gray-400 h-13 rounded-sm pl-10 text-lg"
                    />
                  </div>
                  <div>
                    <p className="pt-5 text-gray-400 pb-2">Email</p>
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="jonasrodri123@gmail.com"
                      className="w-full border-1 border-gray-400 h-13 rounded-sm pl-10 text-lg "
                    />
                  </div>
                  <div>
                    <p className="pt-5 text-gray-400 pb-2">Phone Number</p>
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="+62 | 81445687121"
                      className="w-full border-1 border-gray-400 h-13 rounded-sm pl-10 text-lg "
                    />
                  </div>
                </div>
              </div>
              <Payment />
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
