import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "sonner";

function AddMovies() {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    genre_ids: "",
    release_date: "",
    duration: "",
    id_director: "",
    actor_ids: "",
    synopsis: "",
    rating: "",
    poster_path: null,
    backdrop_path: null,
  });
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ubah string menjadi array (jika user masukkan id pakai koma)
      const genre_ids = formData.genre_ids.split(",").map(Number);
      const actor_ids = formData.actor_ids.split(",").map(Number);

      const data = new FormData();
      data.append("title", formData.title);
      data.append("release_date", formData.release_date);
      data.append("duration", formData.duration);
      data.append("synopsis", formData.synopsis);
      data.append("director", formData.id_director);
      data.append("rating", formData.rating);

      if (formData.id_director && !isNaN(parseInt(formData.id_director))) {
        data.append("id_director", parseInt(formData.id_director));
      }

      genre_ids.forEach((id) => data.append("genre_ids", id));
      actor_ids.forEach((id) => data.append("actor_ids", id));

      // Append file upload
      if (formData.poster_path) {
        data.append("poster_path", formData.poster_path);
      }

      if (formData.backdrop_path) {
        data.append("backdrop_path", formData.backdrop_path);
      }
      const response = await axios.post(
        `${import.meta.env.VITE_BE_HOST}/movies/create`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Movie added:", response.data);
      toast.success("Movie berhasil ditambahkan!");
      setTimeout(() => {
        navigate("../table");
      }, 500);
      // Reset form
      setFormData({
        title: "",
        genre_ids: "",
        release_date: "",
        duration: "",
        id_director: "",
        actor_ids: "",
        synopsis: "",
        rating: "",
        poster_path: null,
        backdrop_path: null,
      });
    } catch (error) {
      console.error("Gagal menambahkan film:", error);
      toast.error("Terjadi kesalahan saat menambahkan movie.");
    }
  };

  return (
    <>
      <main className="mx-70 my-10">
        <div className="border h-full w-full rounded">
          <form onSubmit={handleSubmit}>
            <div className="py-10 px-13 flex flex-col gap-4">
              <h1 className="font-semibold text-xl">Add Movie</h1>
              <div className="flex gap-10">
                <div className="flex flex-col items-start gap-2 p-2 border rounded-lg shadow-sm bg-white max-w-85 mt-10">
                  <label
                    htmlFor="image"
                    className="text-sm font-medium text-gray-700"
                  >
                    Upload Poster Path
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="poster_path"
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-500
               file:mr-4 file:py-2 file:px-4
               file:rounded-md file:border-0
               file:text-sm file:font-semibold
               file:bg-indigo-50 file:text-indigo-700
               hover:file:bg-indigo-100
               transition duration-200 ease-in-out"
                  />
                </div>
                <div className="flex flex-col items-start gap-2 p-2 border rounded-lg shadow-sm bg-white max-w-85 mt-10">
                  <label
                    htmlFor="backdrop"
                    className="text-sm font-medium text-gray-700"
                  >
                    Upload Backdrop Path
                  </label>
                  <input
                    type="file"
                    id="backdrop"
                    name="backdrop_path"
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-500
               file:mr-4 file:py-2 file:px-4
               file:rounded-md file:border-0
               file:text-sm file:font-semibold
               file:bg-indigo-50 file:text-indigo-700
               hover:file:bg-indigo-100
               transition duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="title" className="text-gray-600">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border border-gray-400 rounded py-3 px-8"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="genre" className="text-gray-500">
                  Genre
                </label>
                <input
                  type="text"
                  name="genre_ids"
                  id="genre"
                  placeholder="Genre"
                  value={formData.genre_ids}
                  onChange={handleChange}
                  className="border border-gray-400 rounded py-3 px-8"
                />
              </div>
              <div className="flex gap-13">
                <div className="flex flex-col gap-1">
                  <label htmlFor="release" className="text-gray-500">
                    Release Date
                  </label>
                  <input
                    type="text"
                    name="release_date"
                    id="release"
                    placeholder="Release Date"
                    value={formData.release_date}
                    onChange={handleChange}
                    className="border border-gray-400 rounded py-3 px-8 w-102 text-gray-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="duration" className="text-gray-500">
                    Duration
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      name="duration"
                      id="duration"
                      placeholder="Duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="border border-gray-400 rounded py-3 px-8 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="director" className="text-gray-500">
                  Director
                </label>
                <input
                  type="text"
                  name="id_director"
                  id="director"
                  placeholder="Director"
                  value={formData.id_director}
                  onChange={handleChange}
                  className="border border-gray-400 rounded py-3 px-8"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="actor" className="text-gray-500">
                  Actor
                </label>
                <input
                  type="text"
                  name="actor_ids"
                  id="actor"
                  placeholder="Actor"
                  value={formData.actor_ids}
                  onChange={handleChange}
                  className="border border-gray-400 rounded py-3 px-8"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="synopsis" className="text-gray-500">
                  Synopsis
                </label>
                <textarea
                  name="synopsis"
                  id="synopsis"
                  value={formData.synopsis}
                  onChange={handleChange}
                  className="border border-gray-400 rounded py-3 px-8"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="Rating" className="text-gray-500">
                  Rating
                </label>
                <input
                  type="number"
                  name="rating"
                  id="Rating"
                  placeholder="Rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="border border-gray-400 rounded py-3 px-8"
                />
              </div>
              <hr className="border-t-gray-400 my-5" />
              <button
                type="submit"
                className="bg-blue-700 text-white p-4 rounded hover:bg-blue-600 cursor-pointer"
              >
                Update Movie
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddMovies;
