import React, { useState } from "react";
import { Link } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorem, setErrorem] = useState("");
  const [errorpass, setErrorPass] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  // regex untuk email
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
  // regex untuk huruf kecil
  const RegexKecil = /[a-z]/;
  // regex untuk huruf besar
  const RegexBesar = /[A-Z]/;
  // regex untuk karakter spesial
  const Spesial = /[!@#$%^&*/><]/;

  function submitHandler(event) {
    event.preventDefault();

    // Validasi Email
    if (email.trim() === ``) {
      setErrorem("Email tidak boleh kosong");
    } else if (!re.test(email)) {
      setErrorem("Format Email salah");
    } else {
      setErrorem("");
    }
    // Validasi Password
    if (password.trim() === ``) {
      setErrorPass("Password tidak boleh kosong");
    } else if (password.length < 8) {
      setErrorPass("Minimal harus 8 karakter");
    } else if (!RegexKecil.test(password)) {
      setErrorPass("Minimal harus ada huruf kecil");
    } else if (!RegexBesar.test(password)) {
      setErrorPass("Harus ada huruf Besar");
    } else if (!Spesial.test(password)) {
      setErrorPass("harus ada karakter spesial !@#$%^&*/<>");
    } else {
      /* Jika input email benar tetapi password salah, input email tidak akan
    muncul di console harus kedua nya benar */
      setErrorem("");
      setErrorPass("");
    }
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      setAlertMsg("Belum ada akun. Silakan register.");
      return;
    }
    if (email === storedUser.email && password === storedUser.password) {
      setAlertMsg("Login berhasil!");
      setTimeout(() => {
        window.location.href = "/movies/profilpage";
      }, 1200);
    } else {
      setAlertMsg("Email atau password salah!");
    }
  }

  return (
    <>
      <div className="bg-[url(public/avengers.png)] flex flex-col justify-center items-center h-full">
        <div className="flex justify-center">
          <img
            src="/src/public/69ffcf42e23fbaa4462b7dee6db277d1b110ca93.png"
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
            <span
              className={`block min-h-[1.5rem] px-2 py-1 rounded ${
                alertMsg === "Login berhasil!"
                  ? "bg-green-100 text-green-700"
                  : alertMsg
                  ? "bg-red-100 text-red-700"
                  : ""
              }`}
            >
              {alertMsg || "\u00A0"}
            </span>

            <section>
              <label className="">Email</label>
              <div className="input">
                <input
                  className="w-full border-1 p-3 rounded-sm mt-2.5 border-gray-600"
                  type="text"
                  placeholder="Enter your Email"
                  id="email"
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
              <label className="mt-4 block">Password</label>
              <div className="input">
                <input
                  type="password"
                  placeholder="Enter your Password"
                  id="password"
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
              <a href="#" className="flex justify-end text-blue-700 mt-1">
                Forgot your Password?
              </a>
            </section>
            <section>
              <Link
                to={`../`}
                className="flex justify-end text-blue-700"
              >
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
              <img src="/src/public/logo.google.jpg" className="w-6" />
              <a
                href="https://share.google/yTPcNMm1HkglEkfvp"
                className="text-gray-700"
              >
                Google
              </a>
            </button>

            <button className="cursor-pointer w-35 h-13 bg-gray-100 flex gap-4 shadow-lg items-center justify-center rounded-lg">
              <img src="/src/public/logo.fb.png" className="w-6" />
              <a href="https://www.facebook.com/">Facebook</a>
            </button>
          </footer>
        </main>
      </div>
    </>
  );
}

export default Login;
