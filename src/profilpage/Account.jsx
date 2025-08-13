import React from 'react'

function Account() {
  return (
    <>
      <section>
        <div
          id="privacy"
          className="mt-7 w-210 h-57 bg-white rounded-lg mb-8 max-lg:w-155"
        >
          <div id="fild_privacy" className="py-6 px-8">
            <div>
              <p className="pb-4">Account and Privacy</p>
              <hr />
            </div>
            <div id="data_account" className="pt-8 grid grid-cols-2">
              <div>
                <p className="pb-3">New Password</p>
                <input
                  type="text"
                  placeholder="Write your password"
                  className="border-1 rounded-lg w-85 h-11 placeholder:p-6 max-lg:w-65"
                />
              </div>
              <div>
                <p className="pb-3">Confirm Password</p>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  className="border-1 rounded-lg w-85 h-11 placeholder:p-6 max-lg:w-65"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Account