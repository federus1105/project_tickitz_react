import React from "react";

function Subscribe() {
  return (
    <>
      <section className="flex justify-center bg-[#2563eb] h-[13rem] lg:h-[17rem] md:h-[17rem] rounded-2xl mt-[3.75rem] overflow-hidden relative">
        <div className="text-center">
          <h1 className="text-[16px] text-white pt-5 lg:text-5xl lg:mb-10 md:text-3xl">
            Subscribe to our newsletter
          </h1>
          <form className="flex flex-wrap justify-center gap-1.5 md:gap-2 lg:gap-4 mt-4 md:flex-col lg:flex-row">
            <input
              type="text"
              placeholder="First Name"
              className="h-8 w-48 bg-[#2563eb] border border-white px-8 rounded-lg placeholder:text-white placeholder:text-xs placeholder:lg:text-base placeholder:md:text-base lg:px-2 lg:w-[16.25rem] lg:h-13 md:h-13 md:w-[22.5rem]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="h-8 w-48 bg-[#2563eb] border border-white px-8 rounded-lg placeholder:text-white placeholder:text-xs placeholder:lg:text-base placeholder:md:text-base lg:px-2 lg:w-[16.25rem] lg:h-13 md:h-13 md:w-[22.5rem]"
            />
            <button className="text-xs lg:text-base md:text-base cursor-pointer h-8 w-48 bg-white text-blue-600 rounded-lg px-12 lg:px-3 lg:h-13 md:h-13 md:w-[22.5rem] lg:w-40">
              Subscribe Now
            </button>
          </form>
          <div
            id="bulat"
            className="w-[100px] h-[100px] border-[5px] border-white rounded-full absolute right-0 mt-[-0.5rem] mr-[-2.5rem] lg:mt-10 lg:w-[140px] lg:h-[140px] lg:mr-[-4rem] md:w-[120px] md:h-[120px] md:mt-[-2rem] md:mr-[-3rem]"
          ></div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
