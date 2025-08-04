import React, { useEffect, useState } from "react";
import Subscribe from "../components/Subscribe";
const API_KEY = "44069dd5e3a0de5d4d7ff0643cb336a0";
import ItemMovies from "../components/ItemMovies";

function Reverseids(ids, genre) {
  return ids.map((id) => {
    const genreObj = genre.find((el) => id === el.id);
    return genreObj ? genreObj.name : "";
  });
}

function PopularMovies() {
  const [Movies, SetMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        // Ambil genre
        const genreRes = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        );
        const genreData = await genreRes.json();
        setGenres(genreData.genres);
      } catch (error) {
        console.log("Error fetching popular movies:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <header>
        <div>
          <img src="/src/public/image 1.png" alt="" className="brightness-50" />
          <p className="text-[15px]  text-white absolute top-53 pl-30">
            LIST MOVIE OF THE WEEK
          </p>
          <h1 className="text-[50px] text-white absolute left-29 top-61">
            Experience the Magic of
            <br />
            Cinema: Book Your Tickets
            <br />
            Today
          </h1>
          <div id="oval" className="">
            <div className="absolute w-[7px] h-[7px] bg-white top-133 left-175 rounded-full"></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
      <main className="ml-28 mr-28">
        <section>
          <p className="pt-10">Cari Event</p>
          <div id="search" className="flex pt-2 pb-10 gap-3.5">
            {/* <p className="relative left-66">Filter</p> */}
            <div>
              <img
                src="/src/public/Search.png"
                alt=""
                className="absolute pt-3.5 pl-4"
              />
              <input
                type="text"
                placeholder="New Born Expert"
                className="border-1 border-gray-400 rounded-md py-3 pl-15"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div id="filter" className="pt-1.5">
              <div>
                {genres.slice(0, 6).map((genre) => (
                  <button
                    key={genre.id}
                    onClick={() =>
                      setSelectedGenre((prev) =>
                        prev === genre.id ? null : genre.id
                      )
                    }
                    className={`cursor-pointer ml-7 pt-2 hover:border-b-3 ${
                      selectedGenre === genre.id
                        ? "border-b-4 border-blue-600"
                        : ""
                    }`}
                  >
                    {genre.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
          <ItemMovies
            selectedGenre={selectedGenre}
            searchTerm={searchTerm}
            page={page}
          />
        </section>
        <section>
          <div id="button_options" className="flex justify-center gap-5">
            {[1, 2, 3, 4].map((pg) => (
              <button
                key={pg}
                className={`w-9 h-9 rounded-full cursor-pointer ${
                  page === pg
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-black"
                }`}
                onClick={() => setPage(pg)}
              >
                {pg}
              </button>
            ))}
          </div>
        </section>

        <Subscribe />
      </main>
    </>
  );
}

export default PopularMovies;
