import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function HamburgerMenu({ handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="lg:hidden relative" ref={menuRef}>
      <img
        src="/gg_menu-right-alt.png"
        alt="hamburger"
        className="w-8 h-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute -right-27 mt-7 w-195 bg-white shadow-lg rounded p-3 flex flex-col items-start gap-3 z-50 px-28 border-b-1">
          {currentUser && (
            <>
              <div className="flex items-center justify-center border p-2 rounded-lg w-full">
                <img
                  src="/Ellipse 11.svg"
                  alt="profile"
                  className="w-10 h-10 cursor-pointer"
                />
                <span className="text-xl pl-2">
                  {currentUser.email.split("@")[0]}
                </span>
              </div>
            </>
          )}

          <Link to="./" className="hover:text-blue-600 hover:bg-gray-200">
            Home
          </Link>
          <hr className="w-full border-t border-gray-300 " />
          <Link
            to="./listmovies"
            className="hover:text-blue-600 hover:bg-gray-200"
          >
            Movie
          </Link>
          <hr className="w-full border-t border-gray-300 " />
          <Link
            to="./listmovies"
            className="hover:text-blue-600 hover:bg-gray-200"
          >
            Buy Ticket
          </Link>
          <hr className="w-full border-t border-gray-300 " />

          {!currentUser ? (
            <>
              <Link
                to="/auth/login"
                className="hover:text-blue-600 hover:bg-gray-200"
              >
                Signin
              </Link>
              <hr className="w-full border-t border-gray-300 " />
              <Link
                to="/auth/"
                className="hover:text-blue-600 hover:bg-gray-200"
              >
                SignUp
              </Link>
              <hr className="w-full border-t border-gray-300 " />
            </>
          ) : (
            <>
              <Link
                to="./profilpage"
                className="hover:text-blue-600 hover:bg-gray-200"
              >
                Profile
              </Link>
              <hr className="w-full border-t border-gray-300 " />
              <button onClick={handleLogout} className="pb-5 text-red-600">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
