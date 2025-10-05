import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import useAuth from "../hooks/useAuth";
import { loginUser } from "../redux/thunk/authThunk";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorem,
    errorpass,
    Validate,
  } = useAuth();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!Validate()) return;

    try {
      const userData = await dispatch(loginUser({ email, password }));

      toast.success("Login Berhasil!");

      if (userData && userData.role === "Admin") {
        navigate("/admin/");
      } else {
        navigate("/movies/");
      }
    } catch (err) {
      console.error("Login gagal di komponen:", err);
      toast.error("Email atau Password salah!");
    }
  };

  return (
    <div className="bg-[url(/avengers.png)] bg-cover min-h-screen flex flex-col justify-center items-center h-full">
      <div className="flex justify-center">
        <img
          src="/69ffcf42e23fbaa4462b7dee6db277d1b110ca93.png"
          className="w-35"
        />
      </div>

      <main className="rounded-lg w-110 h-159 bg-white flex flex-col py-7 px-15">
        <header>
          <h1 className="text-2xl pb-1">Welcome Back 👋🏻</h1>
          <p className="text-justify text-lg text-gray-400 pb-2">
            Sign in with your data that you entered during your registration
          </p>
        </header>

        <form onSubmit={submitHandler}>
          <section>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full border p-3 rounded-sm mt-2.5 border-gray-600"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <span className="block text-red-500 min-h-[1.5rem]">{errorem}</span>
            <div className="flex flex-col bg-[#ffffff] gap-3">
              <label htmlFor="password">Password</label>
              <div className="input-password flex items-center border border-t border-gray-300 bg-[#ffffff] rounded-[8px] py-1.5 px-2.5 w-full gap-3 h-11">
                <img src="/Logo-Password.svg" alt="" className="w-4 h-3.5" />
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Enter Your Password"
                  className="w-full outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={
                    isPasswordVisible ? "/Logo-Eye.svg" : "/Logo-Eye-Close.svg"
                  }
                  alt=""
                  className="w-4 h-3.5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
          <span className="block text-red-500 min-h-[1.5rem]">{errorpass}</span>
          </section>
          <section className="my-2 flex justify-between text-blue-700">
            <Link to="../forget">Forgot your Password?</Link>
            <Link to="../">Register</Link>
          </section>
          <button
            type="submit"
            className="cursor-pointer bg-blue-700 text-white rounded-sm my-4 w-full h-12"
          >
            Login
          </button>
        </form>

        <div className="relative text-center my-3">
          <hr className="border-t border-gray-400" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500">
            or
          </span>
        </div>

        <footer className="flex justify-between mt-4">
          <button className="cursor-pointer w-35 bg-gray-100 flex gap-4 shadow-lg items-center justify-center rounded-lg">
            <img src="/logo.google.jpg" className="w-6" alt="Google" />
            <a
              href="https://share.google/yTPcNMm1HkglEkfvp"
              className="text-gray-700"
            >
              Google
            </a>
          </button>

          <button className="cursor-pointer w-35 h-13 bg-gray-100 flex gap-4 shadow-lg items-center justify-center rounded-lg">
            <img src="/logo.fb.png" className="w-6" alt="Facebook" />
            <a href="https://www.facebook.com/">Facebook</a>
          </button>
        </footer>
      </main>
    </div>
  );
}

export default Login;
