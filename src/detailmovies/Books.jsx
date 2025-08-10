import React from "react";

function Books() {
  return (
    <>
      <section>
        <div id="books">
          <div>
            <h2 className="inline-block my-8 text-3xl">Books Tickets</h2>
          </div>
          <div
            id="info"
            className="grid grid-cols-4 gap-9 max-lg:flex max-lg:flex-wrap"
          >
            <div>
              <p className="pb-3">Choose date</p>
              <input
                type="date"
                name=""
                id=""
                className="w-58 h-12 bg-gray-200 px-5 rounded-md"
              />
            </div>
            <div>
              <p className="pb-3">Choose Time</p>
              <input
                type="time"
                name=""
                id=""
                className="w-58 h-12 bg-gray-200 px-5 rounded-md"
              />
            </div>
            <div className="flex flex-col w-60 relative">
              <label htmlFor="buah" className="pb-3">
                Choose Location
              </label>
              <select
                id="buah"
                name="buah"
                className="w-full h-12 bg-gray-200 px-5 rounded-md appearance-none"
              >
                <option value="jakarta">Jakarta</option>
                <option value="bandung">Bandung</option>
                <option value="bogor">Bogor</option>
                <option value="jogja">Jogja</option>
              </select>
              <img
                src="/src/public/icons8-dropdown-50.png"
                alt="dropdown icon"
                className="absolute right-4 top-12.5 w-5 h-5"
              />
            </div>

            <div>
              <button className="bg-blue-700 text-white w-40 h-12 rounded-md mt-9">
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Books;
