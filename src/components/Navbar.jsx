import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import HamburgerMenu from "./Hamburger";
import { logout } from "../redux/slice/authSlice";

function Navbar() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    Navigate("../movies/");
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-10 h-25 px-26 backdrop-filter backdrop-blur-xl flex items-center justify-between">
      <img src="/src/public/Tickitz 1.png" className="" alt="logo" />
      {/* Menu untuk layar besar */}
      <div className="hidden lg:flex gap-10">
        <Link to="./">Home</Link>
        <Link to="./listmovies">Movie</Link>
        <Link to="./listmovies">Buy Ticket</Link>
      </div>
      {/* Auth Buttons / Profile */}
      <div className="hidden lg:flex gap-4 items-center">
        {!currentUser ? (
          <>
            <button className="border border-blue-700 rounded-sm px-4 py-2 text-blue-700">
              <Link to="/auth/login">Signin</Link>
            </button>
            <button className="rounded-sm px-4 py-2 text-white bg-blue-700">
              <Link to="/auth/">SignUp</Link>
            </button>
          </>
        ) : (
          <div className="flex items-center gap-1">
            <p className="pr-1">Halo! {currentUser.email.split("@")[0]} 😄</p>
            <div className="relative">
              <img
                src="/src/public/Ellipse 11.svg"
                alt="profile"
                className="w-10 h-10 cursor-pointer"
                onClick={toggleDropdown}
              />
              {showDropdown && (
                <div className="absolute right-2.5 mt-2 w-40 bg-white shadow-lg rounded-md z-20">
                  <Link
                    to="./profilpage"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <div
                    onClick={handleLogout}
                    className="block px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <HamburgerMenu isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    </nav>
  );
}

export default Navbar;
