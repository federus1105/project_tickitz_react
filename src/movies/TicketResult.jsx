import React from "react";

function TicketResult() {
  return (
    <>
      <body className="bg-gray-200">
        <main>
          <div className="flex gap-35 max-lg:flex max-lg:flex-wrap max-lg:gap-0">
            <div className="relative">
              <img
                src="/src/public/image 1.svg"
                alt=""
                className="brightness-[25%] w-full h-auto object-cover"
              />
              <div className="absolute top-1/2 left-[9%] transform -translate-y-1/2 text-white text-[25px]">
                <div>
                  <img
                    src="/src/public/tickitz 1.svg"
                    alt=""
                    className="mb-4 brightness-100"
                  />
                  <h1 className="mb-5 text-5xl">Thankyou For Purchasing</h1>
                  <p className="text-[20px] mb-5 font-light">
                    Lorem ipsum dolor sit amet consectetur. Quam <br />
                    pretium pretium tempor integer sed magna et.
                  </p>
                  <p className="text-[15px] mb-5">
                    Please Download Your Ticket -
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-white rounded-md mt-15 w-[20%] h-[570px] max-lg:w-67 max-lg:ml-65 max-lg:mt-10 max-lg:mb-30">
              <div className="absolute w-[99%] border-t-2 border-dashed border-[#dedede] top-55"></div>
              <div className="absolute w-10 h-10 bg-gray-200 rounded-full top-51 -left-5"></div>
              <div className="absolute w-10 h-10 bg-gray-200 rounded-full top-51 -right-5"></div>
              <div className="mx-8 my-5">
                <div className="mx-3 pb-10">
                  <img src="/src/public/QR Code 1.svg" alt="" />
                </div>

                <div className="flex gap-[35px] pb-3 pt-10">
                  <div>
                    <p className="text-gray-500">Movie</p>
                    <p>Spider-Man: ..</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Category</p>
                    <p>PG-13</p>
                  </div>
                </div>

                <div className="flex gap-[91px] pb-3">
                  <div>
                    <p className="text-gray-500">Date</p>
                    <p>07 Jul</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Time</p>
                    <p>2:00pm</p>
                  </div>
                </div>

                <div className="flex gap-[89px]">
                  <div>
                    <p className="text-gray-500">Count</p>
                    <p>3 pcs</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Seats</p>
                    <p>C4, C5, C6</p>
                  </div>
                </div>

                <button className="mt-10 w-full h-10 bg-white border border-gray-400 rounded-md flex  justify-between items-center px-5">
                  <p className="text-lg">Total</p>
                  <p className="font-bold">$30.00</p>
                </button>
              </div>

              <div className="flex flex-col absolute -right-5.5">
                <button className="border border-blue-700 text-blue-700 h-[45px] px-[63px] rounded mt-[45px]">
                  <img src="/src/public/Frame 94.svg" alt="" />
                </button>
                <button className="bg-blue-700 border border-blue-700 text-white h-[45px] px-[136px] rounded mt-[10px]">
                  <p className="text-white">
                    Done
                  </p>
                </button>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default TicketResult;
