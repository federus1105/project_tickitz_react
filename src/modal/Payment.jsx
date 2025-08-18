import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPayment } from "../redux/slice/orderSlice";

const payment = [
  { name: "Google", img: "/icon payment/logos_google-pay.svg" },
  { name: "Visa", img: "/icon payment/logos_visa.svg" },
  { name: "Gopay", img: "/icon payment/gopay.svg" },
  { name: "Paypal", img: "/icon payment/logos_paypal.svg" },
  { name: "Dana", img: "/icon payment/dana.svg" },
  { name: "Bca", img: "/icon payment/BCA.svg" },
  { name: "Bri", img: "/icon payment/bri.svg" },
  { name: "Gopayy", img: "/icon payment/gopay.svg" },
];

function Payment() {
  const dispatch = useDispatch()
  const selectedPayment = useSelector((state)=> state.order.payment)
  return (
    <>
      <div>
        <div>
          <h1 className="pt-10 font-bold text-2xl mb-7">Payment Method</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 justify-center max-lg:grid-cols-3">
          {payment.map((payment, index) => (
            <label
              key={index}
              className={`border border-gray-400 w-46 h-15 rounded-sm px-7 mb-5 py-2 cursor-pointer flex justify-center transition-all duration-500 ${
                selectedPayment?.name === payment.name ? "bg-blue-700" : "bg-white"
              }`}
            >
              <input
                type="radio"
                name="payment"
                value={payment}
                checked={selectedPayment?.name === payment.name}
                onChange={() => dispatch(setPayment(payment))}
                className="hidden"
              />
              <img
                src={payment.img}
                alt={payment.name}
                className="w-auto h-auto pointer-events-none"
              />
            </label>
          ))}
        </div>
      </div>
    </>
  );
}

export default Payment;
