import React, { useState } from "react";
import "../styles/Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorem, setErrorem] = useState("");
  const [errorpass, setErrorPass] = useState("");

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
      setErrorPass("Password tidak boleh kosong")
    } else if (password.length < 8) {
      setErrorPass("Minimal harus 8 karakter");
    } else if (!RegexKecil.test(password)) {
      setErrorPass ("Minimal harus ada huruf kecil")
    } else if (!RegexBesar.test(password)) {
      setErrorPass("Harus ada huruf Besar")
    } else if (!Spesial.test(password)) {
      setErrorPass("harus ada karakter spesial !@#$%^&*/<>")
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

      // window.location.href = "sign-in.html";
    }
  }

  return (
    <>
      <div className="img">
        <img src="Public/69ffcf42e23fbaa4462b7dee6db277d1b110ca93.png" />
      </div>

      <div className="Container">
        <header className="card-step">
          <div className="circle">
            <div className="step">1</div>
            <div className="text-one">Fill Form</div>
          </div>
          <div className="line"></div>
          <div className="circle">
            <div className="step">2</div>
            <div className="text">Activate</div>
          </div>
          <div className="line"></div>
          <div className="circle">
            <div className="step">3</div>
            <div className="text">Done</div>
          </div>
        </header>
        <form onSubmit={submitHandler}>
          <section>
            <label className="em">Email</label>
            <div className="input">
              <input
                type="text"
                placeholder="Enter your Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p id="errorem">{errorem}</p>
            </div>
            <label className="pw">Password</label>
            <section>
              <div className="input">
                <input
                  type="password"
                  placeholder="Enter your Password"
                  id="password" onChange={(e) => setPassword(e.target.value)}
                />
                <p id="errorpass">{errorpass}</p>
              </div>
            </section>
          </section>

          <section className="checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">I agree to term & conditions</label>
          </section>

          <section>
            <button type="submit" className="button">
              Join for free Now
            </button>
          </section>
        </form>

        <section>
          <div className="login">
            Already have an account? <a href="sign-in.html">Log in</a>
          </div>
        </section>

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
      </div>
    </>
  );
}

export default Register;
