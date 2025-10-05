import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Books from "../detailmovies/Books";
import Cinemas from "../detailmovies/Cinemas";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMovie } from "../redux/slice/orderSlice";

function DetailMovie() {
  const token = useSelector((state) => state.auth.token);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovie() {
      if (!id) return;
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BE_HOST}/movies/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        const data = await res.json();
        setMovie(data.data[0]);
      } catch (error) {
        console.error("Failed to fetch movie detail:", error);
      }
    }
    fetchMovie();
  }, [id]);

  // Cek data sudah ada atau belum
  if (!movie) return <div className="ml-28 mt-10 ">Loading...</div>;

  // Data yang di tampilkan
  const {
    poster_path,
    backdrop_path,
    title,
    release_date,
    duration,
    director,
    genres,
    actor,
    synopsis,
  } = movie;
  const handdleBook = () => {
    dispatch(
      setSelectedMovie({
        id,
        title,
        poster_path,
        genres,
      })
    );
  };

  return (
    <>
      <div>
        <img
          src={`http://localhost:8080/img/${[backdrop_path]}`}
          alt={title}
          className="w-full h-100 object-cover"
        />
      </div>
      <main className="ml-28 mr-28">
        <section>
          <header>
            <div>
              <section className="flex gap-12 mt-3">
                <div className="absolute top-78 left-28 max-lg:top-92">
                  <img
                    src={`http://localhost:8080/img/${[poster_path]}`}
                    alt={title}
                    className="rounded-md w-[250px]"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold mb-2 pl-67 max-lg:text-2xl">
                    {title}
                  </h2>
                  <div className="flex gap-2 mb-4 pl-67 max-lg:flex-wrap">
                    {genres.map((genre, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-400"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 text-sm text-gray-700 gap-y-2 mb-4 pl-68">
                    <div>
                      <p className="text-gray-400">Release date</p>
                      <p>{new Date(release_date).toDateString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Directed by</p>
                      <p>{director || "Unknown"}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Duration</p>
                      <p>{duration || "Unknown"}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Casts</p>
                      <p>{actor.join(", ")}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 mt-10 max-lg:mt-0">
                      Synopsis
                    </h3>
                    <p className="text-gray-500 text-justify">{synopsis}</p>
                  </div>
                </div>
              </section>
            </div>
          </header>
        </section>
        <Books />
        {/* <Cinemas /> */}

        <section>
          <div className="flex justify-center my-13 ">
            <button onClick={handdleBook}>
              <Link
                to="../orderpage"
                className="bg-blue-700 text-white py-3 px-10 rounded-sm"
              >
                Book Now
              </Link>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default DetailMovie;
