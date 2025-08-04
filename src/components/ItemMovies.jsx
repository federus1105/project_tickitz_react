import React, { useEffect, useState } from "react";
const API_KEY = "44069dd5e3a0de5d4d7ff0643cb336a0";
import { Link } from "react-router-dom";

function reverseids(ids, genre) {
  return ids.map((id) => {
    const genreObj = genre.find((el) => id === el.id);
    return genreObj ? genreObj.name : "";
  });
}

function ItemMovies({ selectedGenre, searchTerm, page }) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Ambil data genre
        const genreRes = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        );
        const genreData = await genreRes.json();
        setGenres(genreData.genres);

        let url = "";
        if (searchTerm) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${page}`;
        } else {
          url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`;
          if (selectedGenre) {
            url += `&with_genres=${selectedGenre}`;
          }
        }

        const movieRes = await fetch(url);
        const movieData = await movieRes.json();
        const results = movieData.results;

        const formatted = results.map((movie) => ({
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
  }, [selectedGenre, searchTerm, page]);

  // Filter movie sesuai selectedGenre dan searchTerm
  const filteredMovies = movies.filter((movie) => {
    const matchGenre = selectedGenre
      ? movie.genre_ids.includes(selectedGenre)
      : true;

    const matchSearch = searchTerm
      ? movie.judul.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchGenre && matchSearch;
  });

  return (
    <section id="three_image" className="grid grid-cols-4 gap-10 mb-11">
      {filteredMovies.map((film) => (
        <article className="rounded-lg shadow-xl p-4" key={film.id}>
          <Link to={`../detailmovies/${film.id}`}>
            <img
              width="250px"
              src={film.gambar}
              alt={film.judul}
              className="rounded-lg hover:scale-104 transition-transform duration-300 cursor-pointer"
            />
          </Link>
          <h1 className="pt-1.5">{film.judul}</h1>
          <div id="genre" className="text-[12px] text-gray-500">
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
