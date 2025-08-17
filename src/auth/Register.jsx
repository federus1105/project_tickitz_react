import { Link, useNavigate } from "react-router";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { register } from "../redux/slice/authSlice";
// import { toast } from "sonner";

function Register() {
  // untuk checkbox
  const [agreed, setAgreed] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorem,
    errorpass,
    alertMsg,
    Validate,
  } = useAuth();

  function submitHandler(event) {
    event.preventDefault();
    if (!Validate()) return;
    if (email && password) {
      dispatch(register({ email, password }));
      Navigate("/auth/login");
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
          <header className="flex justify-around mb-[10px]">
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
            <span
              className={`block min-h-[0.5rem] px-2 py-1 rounded ${
                alertMsg === "akun berhasil dibuat"
                  ? "bg-green-100 text-green-700"
                  : alertMsg
                  ? "bg-red-100 text-red-700"
                  : ""
              }`}
            >
              {alertMsg || "\u00A0"}
            </span>
            <section>
              <div className="input">
                <label htmlFor="email">Email</label>
                <input
                  className="w-full border-1 p-3 rounded-sm mt-2.5 border-gray-600"
                  type="text"
                  placeholder="Enter your Email"
                  id="email"
                  name="password"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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

            <section className="mb-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  if (e.target.checked);
                }}
              />
              <label htmlFor="checkbox" className="pl-3">
                I agree to term & conditions
              </label>
            </section>

            <section>
              <button
                type="submit"
                disabled={!agreed}
                className={`cursor-pointer rounded-sm my-4 w-full h-12
                   ${
                     agreed
                       ? "bg-blue-700 text-white"
                       : "bg-gray-400 text-gray-700 cursor-not-allowed"
                   }`}
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

export default Register;
