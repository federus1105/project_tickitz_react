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
  const [Genres, setGenres] = useState([]);

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
    <>
      <nav
        id="navbar"
        className="sticky top-0 h-25 bg-[rgba(255, 255, 255, 0.8)] z-10 backdrop-filter backdrop-blur-xl font-bold"
      >
        <img src="/src/public/Tickitz 1.png" className="absolute pl-26 pt-5" />
        <div id="menu" className="flex flex-row justify-center gap-16 pt-10">
          <a className="link-menu" href="#">
            Home
          </a>
          <a className="link-menu" href="#">
            Movie
          </a>
          <a className="link-menu" href="/code/order_page.html">
            Buy Ticket
          </a>
        </div>
        <div id="button" className="flex gap-8 absolute right-26 top-10 ">
          <button className="signin">
            <a href="#">Signin</a>
          </button>
          <button className="signup">
            <a href="#">SignUp</a>
          </button>
        </div>
      </nav>
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
              />
            </div>
            <div id="filter" className="pt-1.5">
              <div>
                <button className="cursor-pointer bg-blue-700 w-20 h-10 rounded-r-xl text-white">
                  Thriller
                </button>
                <button className="cursor-pointer pl-[23px]">Horror</button>
                <button className=" cursor-pointer pl-[23px]">Romantic</button>
                <button className=" cursor-pointer pl-[23px]">Adventure</button>
                <button className="cursor-pointer pl-[23px]">Sci-Fi</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <section id="three_image" className="grid grid-cols-4 gap-5 mb-11">
            {movies.map((film) => (
              <article
                className="border-1 border-gray-400 p-[12px] rounded-lg"
                key={film.id}
              >
                <a href={`/code/detail_movie.html?id=${film.id}`}>
                  <img width="250px" src={film.gambar} alt={film.judul} />
                </a>
                <h1>{film.judul}</h1>
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
        </section>
        <section>
          <div id="button_options" className="flex justify-center gap-5">
            <button className="w-9 h-9 rounded-4xl text-white bg-blue-600">
              1
            </button>
            <button className="w-9 bg-gray-300 rounded-full cursor-pointer">2</button>
            <button className="w-9 bg-gray-300 rounded-full cursor-pointer">3</button>
            <button className="w-9 bg-gray-300 rounded-full cursor-pointer">4</button>
            <button className="w-9 h-9 rounded-4xl text-white bg-blue-600 cursor-pointer">
              -
            </button>
          </div>
        </section>

        <section
          id="content5"
          className="flex flex-row justify-center bg-[#2563eb] h-68 rounded-2xl mt-15 overflow-hidden"
        >
          <section>
            <h1 className="text-[50px] text-white pt-10 text-center">
              Subscribe to our newsletter
            </h1>
            <input
              type="text"
              placeholder="First Name"
              className="h-11 bg-[#2563eb] border-1 border-white px-8 rounded-lg placeholder:text-white mr-1.5"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="h-11 bg-[#2563eb] border-1 border-white px-8 rounded-lg  placeholder:text-white mr-1.5"
            />
            <button className="cursor-pointer h-11 bg-white text-blue-600 rounded-lg px-12">
              Subcribe Now
            </button>
            <div
              id="bulat"
              className="w-55 h-55 border-7 border-white rounded-full absolute right-0"
            ></div>
          </section>
        </section>
        <footer className="grid grid-cols-4 place-items-center">
          <section className="left">
            <img src="/src/public/Tickitz 1.png" alt="" />
            <p className="text-gray-400">
              Stop waiting in line. Buy tickets
              <br />
              conveniently, watch movies quietly.
            </p>
          </section>
          <section id="left2" className="flex flex-col gap-2.5">
            <h1>Explore</h1>
            <p className="text-gray-400">Cinemas</p>
            <p className="text-gray-400">My ticket</p>
            <p className="text-gray-400">Cinemas</p>
          </section>
          <section className="left3">
            <h1 className="pb-3.5 pt-11">Our Sponsor</h1>
            <img src="/src/public/ebv.id 2.png" alt="" className="h-10 pb-5" />
            <img src="/src/public/CineOne21 2.png" alt="" className="pb-5" />
            <img src="/src/public/hiflix 2.png" alt="" className="pb-5" />
          </section>
          <section className="left4">
            <h1 className="pb-2 pl-1 mt-1">Follow us</h1>
            <article className="flex gap-1">
              <img src="/src/public/eva_facebook-outline.png" alt="" />
              <p className="text-gray-400">Tickitz Cinema id</p>
            </article>
            <article className="flex gap-1.5">
              <img src="/src/public/bx_bxl-instagram.png" alt="" />
              <p className="text-gray-400">tickitz.id</p>
            </article>
            <article className="flex gap-1.5">
              <img src="/src/public/eva_twitter-outline.png" alt="" />
              <p className="text-gray-400">tickitzid</p>
            </article>
            <article className="flex gap-1.5">
              <img src="/src/public/feather_youtube.png" alt="" />
              <p className="text-gray-400 ">tickitzid</p>
            </article>
          </section>
        </footer>
      </main>

      <article className="text-center bg-white pt-10 pb-5">
        <p>© 2020 Tickitz. All Rights Reserved.</p>
      </article>
    </>
  );
}

export default PopularMovies;
