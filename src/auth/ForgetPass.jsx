import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { resetPassword } from "../redux/slice/authSlice";
import { toast } from "sonner";

function Forget() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);

  const [email, setEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const user = users.find((u) => u.email === email);
    if (!user) {
      toast.error("Email tidak ditemukan!");
      return;
    }

    if (newPass.trim() === "" || confirmPass.trim() === "") {
      toast.error("Password tidak boleh kosong!");
      return;
    }

    if (newPass !== confirmPass) {
      toast.error("Password tidak sama!");
      return;
    }

    // Update password di redux store
    dispatch(resetPassword({ email, newPassword: newPass }));
    toast.success("Password berhasil diubah!");
    navigate("/auth/login");
  }

  return (
    <div className="bg-[url(/avengers.png)] flex flex-col justify-center items-center h-full">
      <div className="flex justify-center">
        <img
          src="/69ffcf42e23fbaa4462b7dee6db277d1b110ca93.png"
          className="w-35"
        />
      </div>

      <main className="rounded-lg w-110 h-159 bg-white flex flex-col py-7 px-15">
        <header className="pb-5">
          <h1 className="text-2xl pb-1 text-center">Reset Password</h1>
          <p className="text-center  text-lg text-gray-400 pb-2">
            Enter your Email and new Password.
          </p>
        </header>

        <form onSubmit={submitHandler}>
          <section>
            <label htmlFor="email">Email</label>
            <div>
              <input
                className="w-full border-1 p-3 rounded-sm my-2.5 border-gray-600"
                type="text"
                id="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <label htmlFor="newpass" className="mt-4 block">
              New Password
            </label>
            <div>
              <input
                type="password"
                placeholder="Enter your New Password"
                id="newpass"
                className="w-full h-13 border-1 p-3 rounded-sm my-2.5 border-gray-600"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
              />
            </div>

            <label htmlFor="confirmpass" className="mt-4 block">
              Confirm New Password
            </label>
            <div>
              <input
                type="password"
                placeholder="Confirm your New Password"
                id="confirmpass"
                className="w-full h-13 border-1 p-3 rounded-sm my-2.5 border-gray-600"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>
          </section>

          <section>
            <button
              type="submit"
              className="cursor-pointer bg-blue-700 hover:bg-blue-600 text-white rounded-sm mt-5 w-full h-12"
            >
              Reset Password
            </button>
          </section>
        </form>
        <div className="relative text-center mt-7">
          <hr className="border-t border-gray-400" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500">
            or
          </span>
        </div>
        <section className="mt-5 flex gap-20 justify-center">
          <Link
            to={`../`}
            className="border border-blue-700 text-blue-700 rounded py-2 px-4"
          >
            Register
          </Link>
          <Link
            to={`../login`}
            className="bg-blue-700 text-white rounded py-2 px-4"
          >
            Login
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Forget;
