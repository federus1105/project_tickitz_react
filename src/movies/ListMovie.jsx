import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Subscribe from "../components/Subscribe";
import ItemMovies from "../components/ItemMovies";

function AllMovies() {
  const [genres, setGenres] = useState([]);

  // Ambil params dari URL
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page"));
  const selectedGenres = searchParams.getAll("genre");

  useEffect(() => {
    // defaul page berada di pagination 1
    if (!searchParams.get("page")) {
      const params = new URLSearchParams();
      params.set("page", "1");
      setSearchParams(params);
    }
    async function fetchGenres() {
      try {
        // Ambil data genre
        const res = await fetch(
          ` ${import.meta.env.VITE_BE_HOST}/movies/genres/list`
        );
        const data = await res.json();
        setGenres(data);
      } catch (error) {
        console.log("Error fetching genres:", error);
      }
    }
    fetchGenres();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // ============== Update search ( triggrer berdasarkan 1 huruf )
  const handleSearchChange = (e) => {
    const value = e.target.value;
    const newParams = new URLSearchParams();
    if (value) newParams.set("search", value);
    newParams.set("page", "1");
    selectedGenres.forEach((g) => newParams.append("genre", g));
    setSearchParams(newParams);
  };

  // ======== Update page
  const handlePageChange = (pg) => {
    const newParams = new URLSearchParams();
    if (searchTerm) newParams.set("search", searchTerm);
    newParams.set("page", pg.toString());
    selectedGenres.forEach((g) => newParams.append("genre", g));
    setSearchParams(newParams);
  };

  // =========== Update genre berdasarkan nama genre
  const handleGenreClick = (genreName) => {
    let updatedGenres;
    if (selectedGenres.includes(genreName)) {
      updatedGenres = selectedGenres.filter((name) => name !== genreName);
    } else {
      updatedGenres = [...selectedGenres, genreName];
    }

    const newParams = new URLSearchParams();
    if (searchTerm) newParams.set("search", searchTerm);
    newParams.set("page", page.toString());
    updatedGenres.forEach((g) => newParams.append("genre", g));
    setSearchParams(newParams);
  };

  return (
    <>
      <header>
        <div>
          <img src="/image 1.png" alt="" className="brightness-50 w-full" />
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
              <img
                src="/Search.png"
                alt=""
                className="absolute pt-3.5 pl-4 max-lg:pt-3"
              />
              <input
                type="text"
                placeholder="Search Movies"
                className="border-1 border-gray-400 rounded-md py-3 pl-15 max-lg:py-2 max-lg:w-full "
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div id="filter" className="pt-1.5">
              {genres.slice(0, 10).map((genre) => (
                <button
                  key={genre.id}
                  onClick={() => handleGenreClick(genre.name)}
                  className={`cursor-pointer ml-7 pt-2 hover:border-b-2 max-lg:mx-3 ${
                    selectedGenres.includes(genre.name)
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

export default AllMovies;
