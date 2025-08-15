import React from "react";
import Account from "./Account";

function DetailProfil() {
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
            <form>
              <div id="data" className="pt-5 grid grid-cols-2">
                <div>
                  <label htmlFor="firstname" className="pt-4 pb-3">
                    Firstname
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Firstname"
                    className="h-11 w-85 border-1 rounded-lg p-7 text-lg max-lg:w-65"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="pt-4 pb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Lastname"
                    className="h-11 w-85 border-1 rounded-lg placeholder:p-7 text-lg max-lg:w-65"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="pt-4 pb-3">
                    E-mail
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="h-11 w-85 border-1 rounded-lg p-7 text-lg max-lg:w-65 max-lg:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="pt-4 pb-3">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+62 | 81445687121"
                    className="h-11 w-85 border-1 rounded-lg p-7 text-lg max-lg:w-65"
                  />
                </div>
              </div>
            </form>
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
