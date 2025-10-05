import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

function Account() {
  const token = useSelector((state) => state.auth.token);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password minimal 8 karakter";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password harus mengandung huruf besar";
    }
    if (!/[a-z]/.test(password)) {
      return "Password harus mengandung huruf kecil";
    }
    if (!/[0-9]/.test(password)) {
      return "Password harus mengandung angka";
    }
    if (!/[!@#$%^&*/><]/.test(password)) {
      return "Harus ada Karakter Spesial !@#$%^&*/><";
    }
    return null;
  };

  const handleReset = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("New Password dan konfirmasi password harus sama!");
      return;
    }
    const validationError = validatePassword(newPassword);
    if (validationError) {
      toast.error(validationError);
      return;
    }
    try { 
      const res = await fetch(
        `${import.meta.env.VITE_BE_HOST}/auth/reset_Password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            oldPassword: oldPassword,
            newPassword: newPassword,
          }),
        }
      );

      if (!res.ok) {
        const err = await res.text();
        throw new Error(err);
      } 

      const data = await res.json();
      toast.success("Berhasil Mengubah Password!");
    } catch (err) {
      toast.error("Tidak dapat Mengubah Password!");
    }
  };

  return (
    <>
      <section>
        <div
          id="privacy"
          className="w-220 h-74 bg-white rounded-lg mb-30 max-lg:mb-30 max-lg:w-155"
        >
          <form>
            <div id="fild_privacy" className="py-6 px-8">
              <div>
                <p className="pb-4">Account and Privacy</p>
                <hr />
              </div>
              <div id="data_account" className="pt-8 grid grid-cols-2">
                <div>
                  <label htmlFor="oldpassword">Old Password</label>
                  <input
                    type="text"
                    id="oldpassword"
                    name="oldpassword"
                    placeholder="Old password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="border-1 rounded-lg w-85 h-11 placeholder:p-4 max-lg:w-65 pl-4 mt-3"
                  />
                </div>
                <div>
                  <label htmlFor="newpass" className="pb-3">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newpass"
                    name="newpass"
                    placeholder="New Your password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border-1 rounded-lg w-85 h-11 placeholder:p-4 max-lg:w-65 pl-4 mt-3"
                  />
                </div>
                <div className="mt-5">
                  <label htmlFor="confirmpass" className="pb-3">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmpass"
                    name="confirmpass"
                    placeholder="Confirm New password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border-1 rounded-lg w-85 h-11 placeholder:p-4 max-lg:w-65 pl-4 mt-3"
                  />
                </div>
              </div>
            </div>
          </form>
          <button
            onClick={handleReset}
            disabled={!oldPassword || !newPassword}
            className={`mt-5 rounded-lg h-10 w-75 text-center text-white cursor-pointer
    ${
      !oldPassword || !newPassword
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-blue-700"
    }`}
          >
            Ubah Password
          </button>
        </div>
      </section>
    </>
  );
}

export default Account;
