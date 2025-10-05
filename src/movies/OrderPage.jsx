import React from "react";
import Step from "../orderpage/Step";
import CardRight from "../orderpage/CardRight";
import CardLeft from "../orderpage/CardLeft";
import Header from "../orderpage/Header";

function OrderPage() {
  return (
    <>
      <body className="bg-gray-100">
        <main className="">
          <Step />
          <div className="flex gap-20 max-lg:flex-wrap max-lg:gap-0 max-lg:pb-25 justify-center">
            <div className="rounded-sm bg-white w-170 mb-30">
              <Header />
              <CardRight />
            </div>
            <CardLeft />
          </div>
        </main>
      </body>
    </>
  );
}

export default OrderPage;
