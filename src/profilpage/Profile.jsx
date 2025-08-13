import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {
    const currentUser = useSelector((state) => state.auth.currentUser);
  return (
    <>
      <aside
        id="profil"
        className="w-60 h-180 rounded-lg bg-white max-lg:w-155 max-lg:mb-5 mb-20 "
      >
        <div id="container" className="pt-10 pl-8 pr-9 pb-0">
          <div
            id="one"
            className="flex gap-29 mb-8 max-lg:flex justify-between"
          >
            <p className="text-gray-900">INFO</p>
            <p className="text-blue-700">•••</p>
          </div>
          <div id="two" className="flex flex-col items-center">
            <div>
              <img src="/src/public/profil_.svg" alt="" />
            </div>
            <div>
              <p className="pb-5 text-[18px]">
                {currentUser.email}
              </p>
              <p className="text-[15px] text-gray-500 text-center">
                Moviegoers
              </p>
            </div>
            <div
              id="line"
              className="my-10 h-0.5 w-61 rounded-sm border-0 bg-neutral-200 max-lg:w-156"
            ></div>
          </div>
          <div id="three" className="flex flex-col">
            <div>
              <p className="pb-5 text-gray-900 ">Loyalty Points</p>
            </div>
            <div
              id="card"
              className="h-27 bg-blue-700 rounded-md text-white border-blue-500 relative"
            >
              <div className="pt-2 pl-3">Moviegoers</div>
              <div>
                <img
                  src="/src/public/eva_star-fill.svg"
                  alt=""
                  className="z-3 top-0 -right-1 absolute"
                />
              </div>
              <div className="pl-3 pt-10">
                320 <span>points</span>
              </div>
              <div
                id="oval"
                className="absolute w-25 h-25 rounded-full ml-26 -mt-34 bg-white/30 mb-40 max-lg:ml-121"
              ></div>
              <div
                id="oval2"
                className="absolute w-24 h-24 rounded-full ml-28 -mt-28 bg-white/30 max-lg:ml-123"
              ></div>
            </div>
          </div>
          <div
            id="four"
            className="flex flex-col items-center justify-center pt-5"
          >
            <div className="text-[13px] pb-3 max-lg:text-[16px]">
              <p>180 points become a master</p>
            </div>
            <button className="bg-slate-400 w-49 h-6 rounded-3xl"></button>
            <button className="bg-blue-700 absolute w-28 h-6 rounded-3xl mt-8 mr-21 max-lg:mt-9"></button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Profile