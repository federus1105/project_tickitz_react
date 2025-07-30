import React, { useEffect, useState } from "react";

const API_KEY = "44069dd5e3a0de5d4d7ff0643cb336a0";

function reverseids(ids, genre) {
  return ids.map((id) => {
    const genreObj = genre.find((el) => id === el.id);
    return genreObj ? genreObj.name : "";
  });
}

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Ambil genre
        const genreRes = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        );
        const genreData = await genreRes.json();
        setGenres(genreData.genres);

        // Ambil film populer
        const movieRes = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const movieData = await movieRes.json();
        const results = movieData.results;

        // Gabungkan data dengan genre
        const formatted = results.map((movie) => ({
          id: movie.id,
          gambar: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          judul: movie.title,
          genre: reverseids(movie.genre_ids, genreData.genres),
        }));
        setMovies(formatted);
      } catch (error) {
        console.log("Error fetching popular movies:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section
      className="three_image"
      style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}
    >
      {movies.map((film) => (
        <article
          key={film.id}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            borderRadius: "8px",
          }}
        >
          <a href={`/code/detail_movie.html?id=${film.id}`}>
            <img width="250px" src={film.gambar} alt={film.judul} />
          </a>
          <h1>{film.judul}</h1>
          <div className="genre">
            {film.genre.map((g, idx) => (
              <button key={idx} style={{ marginRight: "4px" }}>
                {g}
              </button>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default PopularMovies;
