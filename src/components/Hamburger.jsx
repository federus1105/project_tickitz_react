import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function HamburgerMenu({ isLoggedIn, handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

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
        src="/src/public/gg_menu-right-alt.png"
        alt="hamburger"
        className="w-8 h-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute -right-27 mt-7 w-195 bg-white shadow-lg rounded p-2 flex flex-col items-center gap-3 z-50">
          <Link to="./" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="./listmovies" className="hover:text-blue-600">
            Movie
          </Link>
          <Link to="./listmovies" className="hover:text-blue-600">
            Buy Ticket
          </Link>
          {!isLoggedIn ? (
            <>
              <Link to="/auth/login" className="hover:text-blue-600">
                Signin
              </Link>
              <Link to="/auth/" className="hover:text-blue-600">
                SignUp
              </Link>
            </>
          ) : (
            <>
              <Link to="./profilpage" className="hover:text-blue-600">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-left 2 text-red-600"
              >
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
