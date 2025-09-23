import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalPrice } from "../redux/slice/orderSlice";
import { fetchHistory } from "../redux/thunk/historyThunk";

function OrderResult() {
  // const movie = useSelector((state) => state.order.selectedMovie);
  // const seatPrice = useSelector(selectTotalPrice);
  const { date, time, selectedSeat } = useSelector(
    (state) => state.order.bookingInfo
  );
  const dispatch = useDispatch()
  const token = useSelector((state) =>  state.auth.token);
  const history = useSelector((state) => state.history.data);
  // const loading =  useSelector((state) => state.history.loading);
  // const error = useSelector((state) => state.history.error);
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    if (token) {
      dispatch(fetchHistory(token));
    }
  }, [token, dispatch])
  return (
    <>
    <div className="p-10">
       <h2 className="text-xl font-bold mb-6">Riwayat Pembelian Tiket</h2>
       {history.length === 0 ? (
        <p>Tidak ada Riwayat Pembelian</p>
       ) : (
      <div className="px-10">
        <h3 className="font-bold text-lg mb-4">Ticket Information</h3>
        {history.map((item) => (
        <div key={item.id.order} className="flex gap-8 items-start">
          {/* QR Code */}
          <img
            src="/QR Code 1.svg"
            alt="QR Code"
            className="w-32 h-32 object-contain"
          />
          {/* Ticket Info */}
          <div className="flex gap-8 mb-15">
            {/* Kiri - Info Ticket */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-gray-400">Category</h4>
                  <p>PG-13</p>
                </div>
                <div>
                  <h4 className="text-gray-400">Time</h4>
                  <p>{item.time_name}</p>
                </div>
                <div>
                  <h4 className="text-gray-400">Seats</h4>
                  {/* <p>{selectedSeat.join(", ")}</p> */}
                  <p>{item.seat_codes}</p>
                </div>
              </div>

              <div className="flex gap-10">
                <div>
                  <h4 className="text-gray-400">Movie</h4>
                  <p>{item.movie_title.substring(0, 12)}...</p>
                </div>
                <div>
                  <h4 className="text-gray-400">Date</h4>
                  <p>
                    {new Date(date).toLocaleDateString("en-GB", {
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-400">Count</h4>
                  {/* <p>{selectedSeat.length} pcs</p> */}
                  {item.total_seats}
                </div>
              </div>
            </div>

            {/* Kanan - Total di tengah */}
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl">Total</p>
              <h2 className="text-xl font-bold">Rp{item.total.toLocaleString()}</h2>
            </div>
          </div>
        </div>
        ))}
      </div>
       )}
    </div>
    </>
  );
}

export default OrderResult;
