import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./Hamburger";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-10 h-25 px-27 backdrop-filter backdrop-blur-xl flex items-center justify-between">
      <img src="/src/public/Tickitz 1.png" className="" alt="logo" />
      {/* Menu untuk layar besar */}
      <div className="hidden lg:flex gap-10">
        <Link to="./">Home</Link>
        <Link to="./listmovies">Movie</Link>
        <Link to="./listmovies">Buy Ticket</Link>
      </div>
      {/* Auth Buttons / Profile */}
      <div className="hidden lg:flex gap-4 items-center">
        {!isLoggedIn ? (
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
            <p>Location</p>
            <img src="/src/public/dropdown.svg" alt="" />
            <img src="/src/public/bx_bx-search.svg" alt="" />
            <Link to="./profilpage">
              <img
                src="/src/public/Ellipse 11.svg"
                alt="profile"
                className="w-10 h-10 cursor-pointer"
              />
            </Link>
            <div
              onClick={handleLogout}
              className="border border-blue-700 text-blue-700 px-4 py-1 rounded-full cursor-pointer"
            >
              Logout
            </div>
          </div>
        )}
      </div>
      <HamburgerMenu isLoggedIn={isLoggedIn} handleLogout={handleLogout} />{" "}
    </nav>
  );
}

export default Navbar;
