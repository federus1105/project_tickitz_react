import { useState } from "react";

function useAuth(initialValues = { email: "", password: "" }) {
  const [email, setEmail] = useState(initialValues.email);
  const [password, setPassword] = useState(initialValues.password);
  const [fullname, setFullname] = useState(initialValues.fullname);
  const [phone, setPhone] = useState(initialValues.phone);
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

  const Validate = () => {
    let valid = true;

    // Validasi Email
    if (email.trim() === ``) {
      setErrorem("Email tidak boleh kosong");
      valid = false;
    } else if (!re.test(email)) {
      setErrorem("Format Email salah");
      valid = false;
    } else {
      setErrorem("");
    }
    // Validasi Password
    if (password.trim() === ``) {
      setErrorPass("Password tidak boleh kosong");
      valid = false;
    } else if (password.length < 8) {
      setErrorPass("Minimal harus 8 karakter");
      valid = false;
    } else if (!RegexKecil.test(password)) {
      setErrorPass("Minimal harus ada huruf kecil");
      valid = false;
    } else if (!RegexBesar.test(password)) {
      setErrorPass("Harus ada huruf Besar");
      valid = false;
    } else if (!Spesial.test(password)) {
      setErrorPass("harus ada karakter spesial !@#$%^&*/<>");
      valid = false;
    } else {
      /* Jika input email benar tetapi password salah, input email tidak akan
  muncul di console harus kedua nya benar */
      setErrorem("");
      setErrorPass("");
    }
    return valid;
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    fullname,
    setFullname,
    phone,
    setPhone,
    errorem,
    setErrorem,
    errorpass,
    setErrorPass,
    alertMsg,
    setAlertMsg,
    Validate,
  };
}

export default useAuth;