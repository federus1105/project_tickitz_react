import React from "react";
import ItemMovies from "../LandingPage/ItemMovies";
import Subscribe from "../components/Subscribe";
import Header from "../LandingPage/Header";
import Testimoni from "../LandingPage/Testimoni";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Index() {
  const scrollRef = useRef(null);

  // untuk scroll
  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 285,
      behavior: "smooth",
    });
  };
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -295,
      behavior: "smooth",
    });
  };
  return (
    <>
      <main className="ml-28 mr-28 max-md:mx-5">
        <Header />
        <Testimoni />
        <section className="pt-15">
          <section className="">
            <h1 className="text-center text-blue-700 font-bold pb-3 max-lg:text-sm">
              MOVIES
            </h1>
            <p className="text-center pb-10 text-3xl max-lg:text-2xl">
              Exciting Movies That Should Be
              <br />
              Watched Today
            </p>
          </section>
          <ItemMovies />
          <Link
            to={`./listmovies`}
            className="flex justify-center my-15 max-lg:text-md"
          >
            View All{" "}
            <img
              src="/icons8-right-24.png"
              alt=""
              className="ml-2 max-lg:w-5"
            />
          </Link>
        </section>

        <section className="flex justify-between">
          <button
            onClick={scrollLeft}
            className="flex justify-center items-center bg-gray-200 w-15 h-15 rounded-full text-white cursor-pointer"
          >
            <img
              src="/icons8-right-24.png"
              alt=""
              className="transform rotate-180"
            />
          </button>
          <div>
            <h2 className="text-blue-700 font-bold text-center max-lg:text-center max-lg:text-sm">
              UPCOMING MOVIES
            </h2>
            <h1 className="text-2xl mb-4 max-lg:text-xl">
              Exciting Movie Coming Soon
            </h1>
          </div>
          <button
            onClick={scrollRight}
            className="flex justify-center items-center bg-gray-200 w-15 h-15 rounded-full text-white cursor-pointer"
          >
            <img src="/icons8-right-24.png" alt="" />
          </button>
        </section>
        <ItemMovies ref={scrollRef} />
        <Subscribe />
      </main>
    </>
  );
}

export default Index;
