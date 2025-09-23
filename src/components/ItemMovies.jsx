import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// function reverseids(ids, genre) {
//   return ids.map((id) => {
//     const genreObj = genre.find((el) => id === el.id);
//     return genreObj ? genreObj.name : "";
//   });
// }

function ItemMovies({ selectedGenres, searchTerm, page }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.append("title", searchTerm);
    if (selectedGenres.length > 0) {
      selectedGenres.forEach((g) => params.append("genre", g));
    }
    params.append("page", page);

    async function fetchData() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BE_HOST}/movies/?${params.toString()}`
        );
        const data = await res.json();
        const formatted = data.data.map((movie) => ({
          id: movie.id,
          gambar: movie.poster_path,
          judul: movie.title,
          genre: movie.genres,
        }));

        setMovies(formatted);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    }

    fetchData();
  }, [selectedGenres, searchTerm, page]);

  return (
    <section className="grid grid-cols-5 gap-10 mb-11 max-lg:grid-cols-2">
      {movies.length === 0 ? (
        <div className="col-span-5 text-center text-gray-500 text-lg py-10">
          🎬 Tidak ada film ditemukan.....
          <br />
          {/* Coba ubah pencarian atau filter genre dan Pagination.  */}
        </div>
      ) : (
        movies.map((film) => (
          <article className=" min-w-[320px] min-h-[470px] max-lg:min-w-[270px] flex-shrink-1 rounded-lg shadow-xl p-5" key={film.id}>
            <Link to={`../detailmovies/${film.id}`}>
              <img
                width="268px"
                src={`http://localhost:8080/img/${film.gambar}`}
                alt={film.judul}
                className="rounded-lg hover:scale-104 transition-transform duration-300 cursor-pointer"
              />
            </Link>
            <h1 className="pt-1.5 font-medium">{film.judul}</h1>
            <div className="text-[12px] text-gray-500">
              {film.genre && film.genre.length > 0 ? (
                film.genre.map((g, idx) => (
                  <button
                    key={idx}
                    className="mr-2 bg-gray-200 px-2 py-0.5 mt-1 rounded-xl"
                  >
                    {g}
                  </button>
                ))
              ) : (
                <span className="text-gray-400">No genre</span>
              )}
            </div>
          </article>
        ))
      )}
    </section>
  );
}

export default ItemMovies;
