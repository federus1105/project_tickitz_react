import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import HamburgerAdmin from "./HamburgerAdmin";
import { logout } from "../redux/slice/authSlice";
import { toast } from "sonner";

function NavbarAdmin() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    toast.success("Anda berhasil Logout");
    dispatch(logout());
    Navigate("../movies/");
  };

  //Untuk Menampilkan Logout
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-10 h-25 px-26 bg-white border-b border-b-gray-300 flex items-center justify-between">
      <img src="/Tickitz 1.png" className="" alt="logo" />
      {/* Menu untuk layar besar */}
      <div className="hidden lg:flex gap-10">
        <Link to="../admin">Dashboard</Link>
        <Link to="../admin/table">Movie</Link>
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
            <p className="pr-1">
              Halo! {currentUser?.data?.[0]?.first_name} 😄
            </p>
            <div className="relative">
              <img
                src={`${import.meta.env.VITE_BE_HOST}/img/${
                  currentUser?.data?.[0]?.image
                }`}
                alt="profile"
                className="w-10 h-10 cursor-pointer"
                onClick={toggleDropdown}
              />
              {showDropdown && (
                <div className="absolute right-2.5 mt-2 w-40 bg-white shadow-lg rounded-md z-20">
                  <div
                    // onClick={handleLogout}
                    onClick={() => {
                      setShowDropdown(false);
                      setIsLogoutModalOpen(true);
                    }}
                    className="block px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
            {/* Modal Logout */}
            {isLogoutModalOpen && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-xl w-[400px]">
                  <h2 className="text-lg text-black mb-4">
                    Apakah Anda yakin ingin keluar?
                  </h2>
                  <div className="flex justify-end gap-4">
                    <button
                      className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500 text-white"
                      onClick={() => setIsLogoutModalOpen(false)} // cancel
                    >
                      Batal
                    </button>
                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                      onClick={handleLogout} // confirm logout
                    >
                      Keluar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <HamburgerAdmin isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    </nav>
  );
}

export default NavbarAdmin;
