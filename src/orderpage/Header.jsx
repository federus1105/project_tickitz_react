import React from "react";

function Header() {
  return (
    <>
      <div className="mx-5 pt-7.5 pb-11">
        <div className="border-1 border-gray-400 grid grid-cols-[1fr_3fr_1fr] p-3.5">
          <div>
            <img
              src="/src/public/Rectangle 618.svg"
              alt=""
              className="h-full"
            />
          </div>
          <div className="pl-4">
            <div>
              <h2 className="text-xl">Spider-Man: Homecoming</h2>
            </div>
            <div className="flex gap-2 my-2">
              <button className="bg-gray-300 rounded-2xl px-3 py-0.5 text-gray-500">
                Action
              </button>
              <button className="bg-gray-300 rounded-2xl px-3 py-0.5 text-gray-500">
                Adventure
              </button>
            </div>
            <div>
              <h5>Regular - 13:00 PM</h5>
            </div>
          </div>
          <div className="change">
            <button className="bg-blue-700 text-white rounded-sm px-5 py-1 mt-17">
              Change
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
