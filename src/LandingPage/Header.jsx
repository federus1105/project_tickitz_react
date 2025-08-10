import React from "react";

function Header() {
  return (
    <>
      <section
        id="hero"
        className="flex justify-between mt-13 max-lg:flex max-lg:flex-wrap max-lg:justify-center"
      >
        <div className="flex justify-center flex-col max-lg:flex max-lg:items-center ">
          <h4 className="mb-3 text-blue-600 font-bold">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </h4>
          <h1 className="text-5xl max-lg:text-center">
            Experience the Magic of
            <br />
            Cinema: Book Your Tickets
            <br />
            Today
          </h1>
          <p className="mt-5 text-gray-400 max-lg:mb-5">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>

        <div className="grid-area-image grid gap-2">
          <div className="area-img1">
            <img src="/src/public/Rectangle 35.png" />
          </div>
          <div className="area-img2">
            <img src="/src/public/Rectangle 36.png" />
          </div>
          <div className="area-img3">
            <img src="/src/public/Rectangle 37.png" />
          </div>
          <div className="area-img4">
            <img src="/src/public/Rectangle 38.png" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
