import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

function EditMovie() {
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [form, setForm] = useState({
    title: "",
    genre_ids: [],
    release_date: "",
    duration: "",
    id_director: "",
    actor_ids: [],
    synopsis: "",
    rating: "",
    poster_path: null,
    backdrop_path: null,
  });
  useEffect(() => {
    async function fetchMovie() {
      if (!id) return;
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BE_HOST}/movies/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.ok) {
          throw new Error(`Server Error: ${res.status}`);
        }
        const data = await res.json();
        setMovie(data);
        console.log(data);
        setForm({
          title: data.title || "",
          genre_ids: data.genre_ids || [],
          release_date: data.release_date || "",
          duration: data.duration || "",
          id_director: data.director || "",
          actor_ids: data.actor_ids || [],
          synopsis: data.synopsis || "",
          rating: data.rating || "",
          poster_path: "",
          backdrop_path: "",
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchMovie();
  }, [id]);

  // handle input form
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleFileChange(e) {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  }

  let genreIdsArray = [];
  if (typeof form.genre_ids === "string") {
    genreIdsArray = form.genre_ids
      .split(",")
      .map((id) => parseInt(id.trim()))
      .filter((id) => !isNaN(id));
  } else if (Array.isArray(form.genre_ids)) {
    genreIdsArray = form.genre_ids;
  }

  let actorIdsArray = [];
  if (typeof form.actor_ids === "string") {
    actorIdsArray = form.actor_ids
      .split(",")
      .map((id) => parseInt(id.trim()))
      .filter((id) => !isNaN(id));
  } else if (Array.isArray(form.actor_ids)) {
    actorIdsArray = form.actor_ids;
  }
  // Handle submit form
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    genreIdsArray.forEach((id) => formData.append("genre_ids", id));
    formData.append("release_date", form.release_date);
    formData.append("duration", form.duration);
    formData.append("id_director", form.id_director);
    actorIdsArray.forEach((id) => formData.append("actor_ids", id));
    formData.append("synopsis", form.synopsis);
    formData.append("rating", form.rating);
    if (form.poster_path) formData.append("poster_path", form.poster_path);
    if (form.backdrop_path) formData.append("backdrop_path", form.backdrop_path);
    try {
      const res = await fetch(`${import.meta.env.VITE_BE_HOST}/movies/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Failed to update movie. Status: ${res.status}`);
      }

      toast.success("Movie berhasil diupdate!");
      setTimeout(() => {
        navigate("../table");
      }, 500);
    } catch (err) {
      console.error(err);
      toast.error("Gagal update movie!");
      setTimeout(() => {
        navigate("../table");
      }, 500);
    }
  }
  return (
    <>
      <main className="mx-70 my-10">
        <div className="border h-full w-full rounded">
          <form onSubmit={handleSubmit}>
            <div className="py-10 px-13 flex flex-col gap-4">
              <h1 className="font-semibold text-xl">Edit Movie</h1>
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
                    onChange={handleFileChange}
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
                    onChange={handleFileChange}
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
                  value={form.title}
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
                  value={form.genre_ids}
                  onChange={(e) =>
                    setForm({ ...form, genre_ids: e.target.value })
                  }
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
                    value={form.release_date}
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
                      value={form.duration}
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
                  value={form.id_director}
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
                  value={form.actor_ids}
                  onChange={(e) => {
                    const value = e.target.value;
                    setForm({ ...form, actor_ids: value });
                  }}
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
                  value={form.synopsis}
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
                  step="0.01"
                  name="rating"
                  id="Rating"
                  placeholder="Rating"
                  value={form.rating}
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

export default EditMovie;
