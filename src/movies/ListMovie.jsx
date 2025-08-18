import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Subscribe from "../components/Subscribe";
import ItemMovies from "../components/ItemMovies";

function PopularMovies() {
  const [genres, setGenres] = useState([]);

  // Ambil params dari URL
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const selectedGenres = searchParams.get("genre")
    ? searchParams.get("genre").split(",").filter(Boolean)
    : [];

  useEffect(() => {
    async function fetchGenres() {
      try {
        // Ambil data genre
        const res = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const data = await res.json();
        setGenres(data.genres);
      } catch (error) {
        console.log("Error fetching genres:", error);
      }
    }
    fetchGenres();
  }, []);

  // Update search
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchParams({
      search: value,
      page: "1",
      genre: selectedGenres.join(","),
    });
  };

  // Update page
  const handlePageChange = (pg) => {
    setSearchParams({
      search: searchTerm,
      page: String(pg),
      genre: selectedGenres.join(","),
    });
  };

  // Update genre
  const handleGenreClick = (genreId) => {
    let updatedGenres;
    if (selectedGenres.includes(String(genreId))) {
      updatedGenres = selectedGenres.filter((id) => id !== String(genreId));
    } else {
      updatedGenres = [...selectedGenres, String(genreId)];
    }
    setSearchParams({
      search: searchTerm,
      page: "1",
      genre: updatedGenres.join(","),
    });
  };

  return (
    <>
      <header>
        <div>
          <img src="/image 1.png" alt="" className="brightness-50" />
          <p className="text-[15px] text-white absolute top-53 pl-30 max-lg:text-xs max-lg:top-36">
            LIST MOVIE OF THE WEEK
          </p>
          <h1 className="text-[50px] text-white absolute left-29 top-61 max-lg:text-[30px] max-lg:top-40">
            Experience the Magic of
            <br />
            Cinema: Book Your Tickets
            <br />
            Today
          </h1>
        </div>
      </header>

      <main className="ml-28 mr-28">
        {/* Search & Filter */}
        <section>
          <p className="pt-10">Cari Event</p>
          <div
            id="search"
            className="flex pt-2 pb-10 gap-3.5 max-lg:pb-5 max-lg:flex max-lg:flex-col"
          >
            <div>
              <img src="/Search.png" alt="" className="absolute pt-3.5 pl-4 max-lg:pt-3" />
              <input
                type="text"
                placeholder="Search Movies"
                className="border-1 border-gray-400 rounded-md py-3 pl-15 max-lg:py-2 max-lg:w-full "
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div id="filter" className="pt-1.5">
              {genres.slice(0, 6).map((genre) => (
                <button
                  key={genre.id}
                  onClick={() => handleGenreClick(genre.id)}
                  className={`cursor-pointer ml-7 pt-2 hover:border-b-2 max-lg:mx-3 ${
                    selectedGenres.includes(String(genre.id))
                      ? "border-b-2 border-blue-600"
                      : ""
                  }`}
                >
                  {genre.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Movie List */}
        <section>
          <ItemMovies
            selectedGenres={selectedGenres}
            searchTerm={searchTerm}
            page={page}
          />
        </section>

        {/* Pagination */}
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
                onClick={() => handlePageChange(pg)}
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
