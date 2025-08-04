import React from "react";

function Subscribe() {
  return (
    <>
      <section
        id="content5"
        className="flex flex-row justify-center bg-[#2563eb] h-68 rounded-2xl mt-15 overflow-hidden"
      >
        <section>
          <h1 className="text-[50px] text-white pt-10 text-center max-lg:text-3xl max-lg:pb-5">
            Subscribe to our newsletter
          </h1>
          <input
            type="text"
            placeholder="First Name"
            className="h-11 bg-[#2563eb] border-1 border-white px-8 rounded-lg placeholder:text-white mr-1.5 max-lg:pl-17.5"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-11 bg-[#2563eb] border-1 border-white px-8 rounded-lg  placeholder:text-white mr-1.5"
          />
          <button className="cursor-pointer h-11 bg-white text-blue-600 rounded-lg px-12">
            Subcribe Now
          </button>
          <div
            id="bulat"
            className="w-55 h-55 border-7 border-white rounded-full absolute right-0"
          ></div>
        </section>
      </section>
    </>
  );
}

export default Subscribe;
