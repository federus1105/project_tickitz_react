import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { toast } from "sonner";

function TableAdmin() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const token = useSelector((state) => state.auth.token);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BE_HOST}/movies/admin?page=${page}`
        );
        const data = await res.json();
        const formatted = data.data.map((movie) => ({
          id: movie.id,
          gambar: movie.poster_path,
          judul: movie.title,
          genre: movie.genres,
          release: movie.release_date,
          durasi: movie.duration,
        }));
        setMovies(formatted);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [page]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BE_HOST}/movies/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setMovies((prev) => prev.filter((movie) => movie.id !== id));
        toast.success("Berhasil Menghapus movie");
      } else {
        console.error("Delete failed:", data?.message || "Unknown error");
        toast.error("Gagal Menghapus Data");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <main className="mx-28">
        <div className="border mt-10 rounded-lg min-h-screen w-full flex flex-col">
          <div className="px-8 py-5 grid grid-cols-[5fr_1fr_1fr]">
            <h1 className="flex items-center font-medium">List Movie</h1>
            <div>
              <select className="w-60 h-10 bg-gray-200 px-5 rounded-md appearance-none mr-2 text-sm">
                <option value="Jakarta">Januari 2025</option>
                <option value="Bandung">Februari 2025</option>
                <option value="Bogor">Maret 2025</option>
                <option value="Jogja">April 2025</option>
              </select>
            </div>
            <Link
              to="../addmovies"
              className="bg-blue-700 rounded-md w-fit text-white px-6 text-xs flex justify-center items-center"
            >
              Add Movie
            </Link>
          </div>
          <table className="mx-4 w-full text-sm border-separate border-spacing-y-4">
            <thead className="">
              <tr className="">
                <th>No</th>
                <th>Thumbnail</th>
                <th>Movie Name</th>
                <th>Category</th>
                <th>Release Date</th>
                <th>Duration</th>
                <th className="">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {movies.map((film, index) => {
                return (
                  <tr key={film.id}>
                    <td>{(page - 1) * 20 + index + 1}</td>
                    <td>
                      <img
                        src={`http://localhost:8080/img/${film.gambar}`}
                        alt={film.judul}
                        className="w-10 h-10 rounded-full mx-auto"
                      />
                    </td>
                    <td>{film.judul}</td>
                    <td>
                      {typeof film.genre === "string"
                        ? film.genre.split(",  ").map((g, idx) => (
                            <span
                              key={idx}
                              // className="mr-2 bg-gray-200 px-2 py-0.5 mt-1 rounded-xl inline-block"
                            >
                              {g}
                            </span>
                          ))
                        : "No genre"}
                    </td>
                    <td>{film.release}</td>
                    <td>{film.durasi}</td>
                    <td className="flex gap-3 justify-center">
                      {/* <button className="cursor-pointer">
                        <img src="/read.png" />
                      </button> */}
                      <Link to={`../editmovies/${film.id}`}>
                        <button className="cursor-pointer">
                          <img src="/edit.png" />
                        </button>
                      </Link>
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          setMovieToDelete(film); // simpan film yang mau dihapus
                          setIsDeleteModalOpen(true); // buka modal konfirmasi
                        }}
                      >
                        <img src="/delete.png" alt="Delete" />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-xl w-[400px]">
                    <h2 className="text-lg text-black mb-4">
                      Apakah kamu yakin ingin menghapus movie{" "}
                      <span className="text-red-700 font-medium">
                        {movieToDelete?.judul || ""}
                      </span>
                      ?
                    </h2>
                    <div className="flex justify-end gap-4">
                      <button
                        className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500 text-white"
                        onClick={() => setIsDeleteModalOpen(false)}
                      >
                        Batal
                      </button>
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        onClick={() => {
                          handleDelete(movieToDelete.id);
                          setIsDeleteModalOpen(false);
                        }}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* <tr></tr> */}
            </tbody>
          </table>
          {/* <hr className="border-t-gray-400" /> */}
        </div>
        <div className="mt-10 flex justify-center gap-4 mb-6 ">
          {[1, 2, 3, 4].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`cursor-pointer py-1.5 px-4 rounded-sm ${
                page === p ? "bg-blue-700 text-white" : "border border-gray-400"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}

export default TableAdmin;
