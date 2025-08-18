import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function reverseids(ids, genre) {
  return ids.map((id) => {
    const genreObj = genre.find((el) => id === el.id);
    return genreObj ? genreObj.name : "";
  });
}

function ItemMovies({ selectedGenres, searchTerm, page }) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Ambil data genre
        const genreRes = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const genreData = await genreRes.json();
        setGenres(genreData.genres);

        let url = "";
        if (searchTerm) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_API_KEY
          }&query=${encodeURIComponent(searchTerm)}&page=${page}`;
        } else {
          url = `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_API_KEY
          }&page=${page}`;
          if (selectedGenres.length > 0) {
            url += `&with_genres=${selectedGenres.join(",")}`;
          }
        }

        const movieRes = await fetch(url);
        const movieData = await movieRes.json();

        const formatted = (movieData.results || []).map((movie) => ({
          id: movie.id,
          gambar: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          judul: movie.title,
          genre_ids: movie.genre_ids,
          genre: reverseids(movie.genre_ids, genreData.genres),
        }));

        setMovies(formatted);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    }

    fetchData();
  }, [selectedGenres, searchTerm, page]);

  return (
    <section className="grid grid-cols-4 gap-10 mb-11 max-lg:grid-cols-2">
      {movies.map((film) => (
        <article className="rounded-lg shadow-xl p-4" key={film.id}>
          <Link to={`../detailmovies/${film.id}`}>
            <img
              width="250px"
              src={film.gambar}
              alt={film.judul}
              className="rounded-lg hover:scale-104 transition-transform duration-300 cursor-pointer"
            />
          </Link>
          <h1 className="pt-1.5 font-medium">{film.judul}</h1>
          <div className="text-[12px] text-gray-500">
            {film.genre.map((g, idx) => (
              <button
                key={idx}
                className="mr-2 bg-gray-200 px-2 py-0.5 mt-1 rounded-xl"
              >
                {g}
              </button>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default ItemMovies;
