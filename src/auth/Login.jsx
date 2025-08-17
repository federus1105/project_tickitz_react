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
    setEmail,
    password,
    setPassword,
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
      toast.success("Login Berhasil");
      Navigate("/movies/");
    } else {
      toast.error("Email atau Password salah!");
    }
  }

  return (
    <>
      <div className="bg-[url(/avengers.png)] flex flex-col justify-center items-center h-full">
        <div className="flex justify-center">
          <img
            // src="/69ffcf42e23fbaa4462b7dee6db277d1b110ca93.png"
            src="/69ffcf42e23fbaa4462b7dee6db277d1b110ca93.png"
            className="w-35"
          />
        </div>

        <main className="rounded-lg w-110 h-159 bg-white flex flex-col py-7 px-15">
          <header>
            <h1 className="text-2xl pb-1">Welcome Back 👋🏻</h1>
            <p className="text-justify  text-lg text-gray-400 pb-2">
              Sign in with your data that you entered during your registration
            </p>
          </header>

          <form onSubmit={submitHandler}>
            <section>
              <label htmlFor="email" className="">
                Email
              </label>
              <div className="input">
                <input
                  className="w-full border-1 p-3 rounded-sm mt-2.5 border-gray-600"
                  type="text"
                  placeholder="Enter your Email"
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <span
                  id="errorem"
                  className="block text-red-500 min-h-[1.5rem]"
                >
                  {errorem}
                </span>
              </div>
              <label htmlFor="password" className="mt-4 block">
                Password
              </label>
              <div className="input">
                <input
                  type="password"
                  placeholder="Enter your Password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-13 border-1 p-3 rounded-sm mt-2.5 border-gray-600 "
                  value={password}
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
              <Link
                to={"../forget"}
                className="flex justify-end text-blue-700 mt-1"
              >
                Forgot your Password?
              </Link>
            </section>
            <section>
              <Link to={`../`} className="flex justify-end text-blue-700">
                Register
              </Link>
            </section>

            <section>
              <button
                type="submit"
                className="cursor-pointer bg-blue-700 text-white rounded-sm my-4 w-full h-12"
              >
                Login
              </button>
            </section>
          </form>

          <div className="relative text-center my-3">
            <hr className="border-t border-gray-400" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500">
              or
            </span>
          </div>

          <footer className="flex justify-between mt-4">
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
          </footer>
        </main>
      </div>
    </>
  );
}

export default Login;
