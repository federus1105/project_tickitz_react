import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

// function reverseids(ids, genre) {
//   // event.preventDefault();
//   return ids.map((id) => {
//     const genreObj = genre.find((el) => id === el.id);
//     return genreObj ? genreObj.name : "";
//   });
// }

// forwardRef memungkinkan parent mengakses ref dari komponen child.
const ItemMovies = forwardRef((pros, ref) => {
  const [movies, setMovies] = useState([]);
  // const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BE_HOST}movies/upcoming?page=1`
        );
        const data = await res.json();
        const formatted = data.data.map((movie) => ({
          id: movie.id,
          gambar: movie.poster_path,
          judul: movie.title,
          genre: movie.genres,
        }));
        setMovies(formatted);
      } catch (err) {
        console.error("Failed to fetch upcoming movies:", err);
      }
    }
    fetchData();
  }, []);
  return (
    <section ref={ref} className="flex gap-3 justify-center overflow-x-scroll">
      {movies.map((film) => (
        <article
          className="min-w-[320px] min-h-[470px] flex-shrink-1 rounded-lg shadow-xl p-4 bg-white"
          key={film.id}
        >
          <Link to={`./detailmovies/${film.id}`}>
            <img
              src={film.gambar}
              alt={film.judul}
              className="w-[250px] h-auto rounded-lg object-cover cursor-pointer transition duration-300 hover:scale-104"
            />
          </Link>
          <h1 className="pt-1.5 font-semibold max-lg:text-xs max-lg:py-3">
            {film.judul}
          </h1>
          <div className="text-[12px] text-gray-500">
            {film.genre.map((g, idx) => (
              <button
                key={idx}
                className="mr-2 bg-gray-200 px-2 py-0.5 mt-1 rounded-xl max-lg:flex max-lg:flex-wrap"
              >
                {g}
              </button>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
});

export default ItemMovies;
