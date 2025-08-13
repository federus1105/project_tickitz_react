import React from 'react'

function OrderResult() {
  return (
    <>
      <div className="px-10">
        <h3 className="font-bold text-lg mb-4">Ticket Information</h3>

        <div className="flex gap-8 items-start">
          {/* QR Code */}
          <img
            src="/src/public/QR Code 1.svg"
            alt="QR Code"
            className="w-32 h-32 object-contain"
          />

          {/* Ticket Info */}
          <div className="flex gap-8 mb-15">
            {/* Kiri - Info Ticket */}
            <div className="space-y-4">
              <div className="flex gap-8">
                <div>
                  <h4 className="text-gray-400">Category</h4>
                  <p>PG-13</p>
                </div>
                <div>
                  <h4 className="text-gray-400">Time</h4>
                  <p>2:00pm</p>
                </div>
                <div>
                  <h4 className="text-gray-400">Seats</h4>
                  <p>C4, C5, C6</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div>
                  <h4 className="text-gray-400">Movie</h4>
                  <p>Spider-Man: ..</p>
                </div>
                <div>
                  <h4 className="text-gray-400">Date</h4>
                  <p>07 Jul</p>
                </div>
                <div>
                  <h4 className="text-gray-400">Count</h4>
                  <p>3 pcs</p>
                </div>
              </div>
            </div>

            {/* Kanan - Total di tengah */}
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl">Total</p>
              <h2 className="text-xl font-bold">$30.00</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderResult