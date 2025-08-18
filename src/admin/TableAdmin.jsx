import React from "react";
import { Link } from "react-router";

function TableAdmin() {
  return (
    <>
      <main className="mx-28">
        <div className="border mt-10 rounded-lg h-130">
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
              Add Movies
            </Link>
          </div>
          <table className="mx-8 w-full text-sm border-separate border-spacing-y-4">
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
              <tr>
                <td>1</td>
                <td>Gambar</td>
                <td>Spiderman HomeComing</td>
                <td>Action, Adventure</td>
                <td>07/05/2025</td>
                <td>2 Hours 15 Minute</td>
                <td className="flex gap-3">
                  <button className="cursor-pointer hover:brightness-90">
                    <img src="/read.png" alt="" />
                  </button>
                  <button className="cursor-pointer hover:brightness-90">
                    <img src="/edit.png" alt="" />
                  </button>
                  <button className="cursor-pointer hover:brightness-90">
                    <img src="/delete.png" alt="" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <hr className="border-t-gray-400" />
        </div>
        <div className="mt-10 flex justify-center gap-4 mb-6 ">
          <button className="cursor-pointer bg-blue-700 text-white py-1.5 px-4 rounded-sm">
            1
          </button>
          <button className="cursor-pointer border-1 border-gray-400 px-3 rounded-sm">
            2
          </button>
          <button className="cursor-pointer border-1  border-gray-400 px-3 rounded-sm">
            3
          </button>
          <button className="cursor-pointer border-1   border-gray-400 px-3 rounded-sm">
            4
          </button>
        </div>
      </main>
    </>
  );
}

export default TableAdmin;
