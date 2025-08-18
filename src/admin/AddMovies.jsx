import React from "react";

function AddMovies() {
  return (
    <>
      <main className="mx-70 my-10">
        <div className="border h-full w-full rounded">
          <form>
            <div className="py-10 px-13 flex flex-col gap-4">
              <h1 className="font-semibold text-xl">Add New Movies</h1>
              <div className="flex flex-col gap-1">
                <label htmlFor="image" className="text-gray-500">
                  Upload Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="border w-fit rounded-lg p-1 bg-blue-700 text-white"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="moviename" className="text-gray-600">
                  Movie Name
                </label>
                <input
                  type="text"
                  name="moviename"
                  id="moviename"
                  placeholder="Movie Name"
                  className="border border-gray-400 rounded py-3 px-8"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="category" className="text-gray-500">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Category"
                  className="border border-gray-400 rounded py-3 px-8"
                />
              </div>
              <div className="flex gap-13">
                <div className="flex flex-col gap-1">
                  <label htmlFor="release" className="text-gray-500">
                    Release Date
                  </label>
                  <input
                    type="date"
                    name="release"
                    id="release"
                    className="border border-gray-400 rounded py-3 px-8 w-102 text-gray-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="duration" className="text-gray-500">
                    Duration (hour / minute)
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      name="duration"
                      id="duration"
                      placeholder="Hour"
                      className="border border-gray-400 rounded py-3 px-8 w-25"
                    />
                    <input
                      type="text"
                      name="duration"
                      id="duration"
                      placeholder="Minute"
                      className="border border-gray-400 rounded py-3 px-6 w-25"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="director" className="text-gray-500">
                  Director Name
                </label>
                <input
                  type="text"
                  name="director"
                  id="director"
                  placeholder="Director"
                  className="border border-gray-400 rounded py-3 px-8"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="cast" className="text-gray-500">
                  Cast
                </label>
                <input
                  type="text"
                  name="cast"
                  id="cast"
                  placeholder="Cast"
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
                  className="border border-gray-400 rounded py-3 px-8"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="location" className="text-gray-500">
                  Add Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Location"
                  className="border border-gray-400 rounded py-3 px-8"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="date&time" className="text-gray-500">
                  Set Date & Time
                </label>
                <select className="w-50 text-gray-500 h-12 bg-gray-200 px-5 rounded-md appearance-none">
                  <option value="Jakarta">Jakarta</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Bogor">Bogor</option>
                  <option value="Jogja">Jogja</option>
                </select>
              </div>
              <div className="border border-blue-700 text-blue-700 w-fit px-6 rounded">
                +
              </div>
              <hr className="border-t-gray-400 mt-2" />
              <button className="bg-blue-700 text-white p-4 rounded hover:bg-blue-600 cursor-pointer">
                Save Movies
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddMovies;
