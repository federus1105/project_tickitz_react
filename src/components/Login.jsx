import React, { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorem, setErrorem] = useState("");
  const [errorpass, setErrorPass] = useState("");
  const [alertMsg, setAlertMsg] = useState("")

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
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (!storedUser) {
      setAlertMsg("Belum ada akun. Silakan register.");
      return;
    }
    if (email === storedUser.email && password === storedUser.password) {
      setAlertMsg("Login berhasil!");
      setTimeout(() => {
        window.location.href = "#";
      }, 1200);
    } else {
      setAlertMsg("Email atau password salah!");
    }
  }

  return (
    <>
      <div className="img">
        <img src="Public/69ffcf42e23fbaa4462b7dee6db277d1b110ca93.png" />
      </div>

      <main className="Container">
        <header>
          <h1 className="welcome">Welcome Back 👋🏻</h1>
          <p className="word">
            Sign in with your data that you entered during your xregistration
          </p>
        </header>

        <form onSubmit={submitHandler}>
          {alertMsg && (
            <span
              style={{
                color: alertMsg === "Login berhasil!" ? "green" : "red",
                marginBottom: "12px",
              }}
            >
              {alertMsg}
            </span>
          )}
          <section>
            <label className="em">Email</label>
            <div className="input">
              <input
                type="text"
                placeholder="Enter your Email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <span id="errorem">{errorem}</span>
            </div>
            <label className="pw">Password</label>
            <div className="input">
              <input
                type="password"
                placeholder="Enter your Password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span id="errorpass">{errorpass}</span>
            </div>
          </section>

          <section>
            <a href="#" className="forget">
              Forgot your Password?
            </a>
          </section>
          <section>
            <a href="#" className="forget">
              Register
            </a>
          </section>

          <section>
            <button type="submit" className="button">
              Join for free Now
            </button>
          </section>
        </form>

        <div className="hr-line">
          <hr />
        </div>
        <footer className="social-buttons">
          <button className="social">
            <img src="Public/logo.google.jpg" />
            <a href="https://share.google/yTPcNMm1HkglEkfvp">Google</a>
          </button>

          <button className="social">
            <img src="Public/logo.fb.png" />
            <a href="https://www.facebook.com/">Facebook</a>
          </button>
        </footer>
      </main>
    </>
  );
}

export default Login;
