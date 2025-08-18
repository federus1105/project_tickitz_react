import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { login } from "../redux/slice/authSlice";
import useAuth from "../hooks/useAuth";
import { toast } from "sonner";

function Login() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);
  const {
    email,
    password,
    errorem,
    errorpass,
    Validate,
  } = useAuth();

  function submitHandler(event) {
    event.preventDefault();
    dispatch(login({ email, password }));
    if (!Validate()) return;
    const isValid = users.find(
      (u) => u.email === email && u.password === password
    );
    if (isValid) {
      toast.success("Passrword berhasil diubah")
      Navigate("/auth/login");
    } else {
      toast.error("Email atau Password salah!");
    }
  }

  return (
    <>
      <div className="bg-[url(/avengers.png)] flex flex-col justify-center items-center h-full">
        <div className="flex justify-center">
          <img
            src="/69ffcf42e23fbaa4462b7dee6db277d1b110ca93.png"
            className="w-35"
          />
        </div>

        <main className="rounded-lg w-110 h-159 bg-white flex flex-col py-7 px-15">
          <header className="pb-5">
            <h1 className="text-2xl pb-1 text-center">Welcome In Form</h1>
            <p className="text-justify  text-lg text-gray-400 pb-2">
              Enter the data you want to change to log in.
            </p>
          </header>

          <form onSubmit={submitHandler}>
            <section>
              <label htmlFor="email">Email</label>
              <div>
                <input
                  className="w-full border-1 p-3 rounded-sm mt-2.5 border-gray-600"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                />
                <span
                  id="errorem"
                  className="block text-red-500 min-h-[1.5rem]"
                >
                  {errorem}
                </span>
              </div>
              <label htmlFor="newpass" className="mt-4 block">
                New Password
              </label>
              <div className="input">
                <input
                  type="newpass"
                  placeholder="Enter your New Password"
                  id="newpass"
                  name="newpass"
                  className="w-full h-13 border-1 p-3 rounded-sm mt-2.5 border-gray-600 "
                />
                <span
                  id="errorpass"
                  className="block text-red-500 min-h-[1.5rem]"
                >
                  {errorpass}
                </span>
              </div>
              <label htmlFor="currentpass" className="mt-4 block">
                Current Password
              </label>
              <div className="input">
                <input
                  type="currentpass"
                  placeholder="Enter your Password"
                  id="currentpass"
                  name="currentpass"
                  className="w-full h-13 border-1 p-3 rounded-sm mt-2.5 border-gray-600 "
                />
                <span
                  id="errorpass"
                  className="block text-red-500 min-h-[1.5rem]"
                >
                  {errorpass}
                </span>
              </div>
            </section>

            <section>
              <button
                type="submit"
                className="cursor-pointer bg-blue-700 text-white rounded-sm my-4 w-full h-12"
              >
                Forget
              </button>
            </section>
          </form>

          {/* <footer className="flex justify-between mt-4">
            <button className="cursor-pointer w-35 bg-gray-100 flex gap-4 shadow-lg items-center justify-center rounded-lg ">
              <img src="/logo.google.jpg" className="w-6" />
              <a
                href="https://share.google/yTPcNMm1HkglEkfvp"
                className="text-gray-700"
              >
                Google
              </a>
            </button>

            <button className="cursor-pointer w-35 h-13 bg-gray-100 flex gap-4 shadow-lg items-center justify-center rounded-lg">
              <img src="/logo.fb.png" className="w-6" />
              <a href="https://www.facebook.com/">Facebook</a>
            </button>
          </footer> */}
        </main>
      </div>
    </>
  );
}

export default Login;
