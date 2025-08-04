import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function Register() {
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

      // Simpan ke localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: email,
          password: password,
        })
      );

      console.log("\nEmail:", email);
      console.log("Password:", password);

      if (email) {
        setAlertMsg("akun berhasil dibuat");
      }
      window.location.href = "/auth/login";
    }
  }
  useEffect(() => {});
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
          <header className="flex justify-around mb-[20px]">
            <div className="relative text-center">
              <div className="w-[40px] h-[40px] bg-gray-400 text-white flex items-center justify-center rounded-full mb-[5px]">
                1
              </div>
              <div className="text-[13px] text-black">Fill Form</div>
            </div>

            <div className="border-t-2 border-gray-300 border-dashed flex-1 mx-[15px] mt-[20px]"></div>

            <div className="relative text-center">
              <div className="w-[40px] h-[40px] bg-gray-400 text-white flex items-center justify-center rounded-full mb-[5px]">
                2
              </div>
              <div className="text-[13px] text-gray-400">Activate</div>
            </div>

            <div className="border-t-2 border-gray-300 border-dashed flex-1 mx-[15px] mt-[20px]"></div>

            <div className="relative text-center">
              <div className="w-[40px] h-[40px] bg-gray-400 text-white flex items-center justify-center rounded-full mb-[5px]">
                3
              </div>
              <div className="text-[13px] text-gray-400">Done</div>
            </div>
          </header>

          <form onSubmit={submitHandler}>
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

            <section className="mb-1">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="pl-3">
                I agree to term & conditions
              </label>
            </section>

            <section>
              <button
                type="submit"
                className="cursor-pointer bg-blue-700 text-white rounded-sm my-4 w-full h-12"
              >
                Join For Free Now
              </button>
            </section>
            <section>
              <div className="text-center mb-5">
                Already have an account?{" "}
                <Link to={`./login`} className="text-blue-800">
                  Log in
                </Link>
              </div>
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

export default Register;
