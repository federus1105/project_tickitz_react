import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const movie = useSelector((state) => state.order.selectedMovie);
  const bookingInfo = useSelector((state) => state.order.bookingInfo);

  if (!movie) {
    return (
      <div className="mx-5 pt-7.5 pb-11">
        <p>No movie selected</p>
      </div>
    );
  }
  return (
    <>
      <div className="mx-5 pt-7.5  pb-11">
        <div className="border-1 border-gray-400 grid grid-cols-[1fr_3fr_1fr] p-3.5">
          <div className="">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="h-full w-full"
            />
          </div>
          <div className="pl-3">
            <div>
              <h2 className="text-xl">{movie.title}</h2>
            </div>
            <div className="flex gap-2 my-2">
              {movie.genres?.slice(0, 2).map((genre) => (
                <button className="bg-gray-300 rounded-2xl px-3 py-0.5 text-gray-500">
                  {genre.name}
                </button>
              ))}
            </div>
            <div>
              <h5>
                <>
                  <p>
                    Date:{" "}
                    {new Date(bookingInfo.date).toLocaleDateString("en-GB", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p>Time: {bookingInfo.time}</p>
                </>
              </h5>
              <h1>Location: {bookingInfo.location}</h1>
            </div>
          </div>
          <div className="flex flex-col">
            <button className="bg-blue-700 text-white rounded-sm px-5 py-1 mt-auto">
              Change
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
