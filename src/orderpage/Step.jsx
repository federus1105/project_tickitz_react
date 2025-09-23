import React from "react";

function Step() {
  return (
    <>
      <div
        id="container"
        className="max-w-lg w-full mx-auto rounded-xl p-5 flex flex-col"
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

          {/* Step 2 - Active */}
          <div className="relative text-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-1">
              2
            </div>
            <div className="text-sm text-gray-800">Seat</div>
          </div>

          {/* Line 2 */}
          <div className="w-[50px] border border-dashed border-gray-400 mb-[15px]"></div>

          {/* Step 3 */}
          {/* Step 3 - Pending */}
          <div className="relative text-center">
            <div className="w-10 h-10 rounded-full bg-gray-400 text-white font-bold flex items-center justify-center mb-1">
              3
            </div>
            <div className="text-sm text-gray-800">Payment</div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Step;
