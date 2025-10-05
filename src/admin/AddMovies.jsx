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

  // untuk menyimpan banyak schedule
  const [schedules, setSchedules] = useState([
    { date: "", id_cinema: "", id_time: "", id_location: "" },
  ]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleScheduleChange = (index, e) => {
    const { name, value } = e.target;
    const newSchedules = [...schedules];
    newSchedules[index] = {
      ...newSchedules[index],
      [name]: value,
    };
    setSchedules(newSchedules);
  };

  // const addScheduleRow = () => {
  //   setSchedules([
  //     ...schedules,
  //     { date: "", id_cinema: "", id_time: "", id_location: "" },
  //   ]);
  // };

  // const removeScheduleRow = (index) => {
  //   setSchedules(schedules.filter((_, i) => i !== index));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const genre_ids = formData.genre_ids
        .split(",")
        .map((id) => parseInt(id.trim()));
      const actor_ids = formData.actor_ids
        .split(",")
        .map((id) => parseInt(id.trim()));

      const data = new FormData();
      data.append("title", formData.title);
      data.append("release_date", formData.release_date);
      data.append("duration", formData.duration);
      data.append("synopsis", formData.synopsis);
      data.append("rating", formData.rating);

      if (formData.id_director) {
        data.append("id_director", formData.id_director);
      }

      genre_ids.forEach((id) => data.append("genre_ids", id));
      actor_ids.forEach((id) => data.append("actor_ids", id));

      if (formData.poster_path)
        data.append("poster_path", formData.poster_path);
      if (formData.backdrop_path)
        data.append("backdrop_path", formData.backdrop_path);

      // *Tambahkan schedule ke form data
      schedules.forEach((sched) => {
        data.append(`date`, sched.date);
        data.append(`id_cinema`, sched.id_cinema);
        data.append(`id_time`, sched.id_time);
        data.append(`id_location`, sched.id_location);
      });

      console.log("Sending schedules:", schedules);

      const resp = await axios.post(
        `${import.meta.env.VITE_BE_HOST}/movies/create`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(resp);
      setTimeout(() => {
        navigate("../table");
      }, 500);
    } catch (error) {
      console.error("Gagal submit:", error);
      toast.error("Terjadi kesalahan saat menambahkan movie atau schedule.");
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
              <h1 className="text-center mt-10">Create Schedule</h1>
              {schedules.map((sched, idx) => (
                <section
                  key={idx}
                  className="border p-10 border-gray-400 rounded-lg flex flex-col gap-2"
                >
                  {/* Movie (biasanya ini tetap film utama, bisa disembunyikan atau ditampilkan statis) */}
                  <div className="lg:flex flex-col gap-1">
                    <label htmlFor={`movie-${idx}`} className="text-gray-500">
                      Movie
                    </label>
                    <input
                      type="number"
                      name="movie"
                      id={`movie-${idx}`}
                      className="border border-gray-400 rounded py-3 px-8"
                      value={sched.movieId} // jika kamu menyimpan movieId di schedule state
                      readOnly
                    />
                  </div>

                  {/* Date */}
                  <div className="lg:flex flex-col gap-1">
                    <label htmlFor={`date-${idx}`} className="text-gray-500">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id={`date-${idx}`}
                      className="border border-gray-400 rounded py-3 px-8"
                      value={sched.date}
                      onChange={(e) => handleScheduleChange(idx, e)}
                    />
                  </div>

                  {/* Cinema */}
                  <div className="lg:flex flex-col gap-1">
                    <label
                      htmlFor={`id_cinema-${idx}`}
                      className="text-gray-500"
                    >
                      Cinema
                    </label>
                    <input
                      type="number"
                      name="id_cinema"
                      id={`id_cinema-${idx}`}
                      className="border border-gray-400 rounded py-3 px-8"
                      value={sched.id_cinema}
                      onChange={(e) => handleScheduleChange(idx, e)}
                    />
                  </div>

                  {/* Time */}
                  <div className="lg:flex flex-col gap-1">
                    <label htmlFor={`id_time-${idx}`} className="text-gray-500">
                      Time
                    </label>
                    <input
                      type="number"
                      name="id_time"
                      id={`id_time-${idx}`}
                      className="border border-gray-400 rounded py-3 px-8"
                      value={sched.id_time}
                      onChange={(e) => handleScheduleChange(idx, e)}
                    />
                  </div>

                  {/* Location */}
                  <div className="lg:flex flex-col gap-1">
                    <label
                      htmlFor={`id_location-${idx}`}
                      className="text-gray-500"
                    >
                      Location
                    </label>
                    <input
                      type="number"
                      name="id_location"
                      id={`id_location-${idx}`}
                      className="border border-gray-400 rounded py-3 px-8"
                      value={sched.id_location}
                      onChange={(e) => handleScheduleChange(idx, e)}
                    />
                  </div>
                </section>
              ))}

              <hr className="border-t-gray-400 my-5" />
              <button
                type="submit"
                className="bg-blue-700 text-white p-4 rounded hover:bg-blue-600 cursor-pointer"
              >
                Create Movie
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddMovies;
