import React from "react";
import Account from "./Account";
import { useSelector } from "react-redux";

function DetailProfil() {
  // const users = useSelector((state) => state.auth.users);
    const currentUser = useSelector((state) => state.auth.currentUser);
  return (
    <>
      <section>
        <div
          id="details"
          className="mt-10 w-210 h-90 bg-white rounded-lg max-lg:w-155"
        >
          <div id="fild_details" className="p-8 pt-10">
            <div>
              <p className="text-lg pb-2.5">Details Information</p>
              <hr />
            </div>
            <div id="data" className="pt-5 grid grid-cols-2">
              <div>
                <p className="pt-4 pb-3">Firstname</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Federus"
                  className="h-11 w-85 border-1 rounded-lg p-7 text-lg max-lg:w-65"
                />
              </div>
              <div>
                <p className="pt-4 pb-3">Last Name</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Rudi"
                  className="h-11 w-85 border-1 rounded-lg placeholder:p-7 text-lg max-lg:w-65"
                />
              </div>
              <div>
                <p className="pt-4 pb-3">E-mail</p>
                <input
                  type="text"
                  name=""
                  id=""
                  value={currentUser.email}
                  placeholder=""
                  className="h-11 w-85 border-1 rounded-lg p-7 text-lg max-lg:w-65 max-lg:text-base"
                />
              </div>
              <div>
                <p className="pt-4 pb-3">Phone Number</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="+62 | 81445687121"
                  className="h-11 w-85 border-1 rounded-lg p-7 text-lg max-lg:w-65"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Account />
      <div
        id="btn_updates"
        className="mb-20 bg-blue-700 rounded-lg h-10 w-75 text-center text-white pt-2"
      >
        Update Changes
      </div>
    </>
  );
}

export default DetailProfil;
