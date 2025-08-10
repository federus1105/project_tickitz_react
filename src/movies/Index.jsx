import React from "react";
import ItemMovies from "../LandingPage/ItemMovies";
import Subscribe from "../components/Subscribe";
import Header from "../LandingPage/Header";
import Testimoni from "../LandingPage/Testimoni";
import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <main className="ml-28 mr-28 max-md:mx-5">
        <Header />
        <Testimoni />
        <section className="pt-15">
          <section className="">
            <h1 className="text-center text-blue-700 font-bold pb-3">MOVIES</h1>
            <p className="text-center pb-10 text-3xl">
              Exciting Movies That Should Be
              <br />
              Watched Today
            </p>
          </section>
          <ItemMovies />
          <Link
            to={`./listmovies`}
            className="flex justify-center my-15 text-blue-700"
          >
            View All
          </Link>
        </section>

        <section>
          <h2 className="text-blue-700 font-bold max-lg:text-center">
            UPCOMING MOVIES
          </h2>
          <div className="flex justify-between max-lg:flex max-lg:flex-col max-lg:items-center">
            <h1 className="text-2xl mb-4">Exciting Movie Coming Soon</h1>
            <div className="four_headbtn mb-5">
              <button className="bg-gray-400 w-15 h-15 rounded-full text-white cursor-pointer">
                -
              </button>
              <button className="bg-blue-700 w-15 h-15 rounded-full text-white cursor-pointer ml-2">
                -
              </button>
            </div>
          </div>
          <ItemMovies />
        </section>
        <Subscribe />
      </main>
    </>
  );
}

export default Index;
