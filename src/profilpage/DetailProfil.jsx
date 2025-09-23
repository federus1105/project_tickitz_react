import React, { useEffect, useState } from "react";
import Account from "./Account";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { editProfile } from "../redux/thunk/updateProfileThunk";
import { editProfilee } from "../redux/slice/authSlice";

function DetailProfil() {
  // const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const token = useSelector((state) => state.auth.token);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (currentUser && currentUser.data && currentUser.data[0]) {
      setFirstname(currentUser.data[0].first_name || "");
      setLastname(currentUser.data[0].last_name || "");
      setPhone(currentUser.data[0].phone || "");
      setEmail(currentUser.data[0].email || "");
    }
  }, [currentUser]);

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("first_name", firstname);
    formData.append("last_name", lastname);
    formData.append("phone", phone);
    if (image) formData.append("image", image);

    try {
      // dispatch ke asyncthunk yang merubah ke database
      const resultAction = await dispatch(
        editProfile({ formData, token, currentUser })
      );

      if (editProfile.fulfilled.match(resultAction)) {
        // Dispatch update ke Redux
        const updatedUser = resultAction.payload;
        dispatch(editProfilee(updatedUser));
        toast.success("Profile berhasil diubah!");
      } else {
        toast.error("Gagal mengubah profile!");
      }
    } catch (err) {
      toast.error("Terjadi kesalahan saat mengubah profile.");
      console.error(err);
    } 
  };
  return (
    <>
      <section>
        <div
          id="details"
          className="mt-10 w-220 h-120 bg-white rounded-lg max-lg:w-155"
        >
          <div id="fild_details" className="p-8 pt-10">
            <div>
              <p className="text-lg pb-2.5">Details Information</p>
              <hr />
            </div>
            <form>
              <div id="data" className="pt-5 grid grid-cols-2">
                <div className="mb-8">
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="h-11 w-85 border-1 rounded-lg p-7 text-lg max-lg:w-65 mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="h-11 w-85 border-1 rounded-lg p-7 text-lg max-lg:w-65 mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    disabled
                    className="h-11 w-85 border-1 rounded-lg p-7 text-lg max-lg:w-65 mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-11 w-85 border-1 rounded-lg p-7 text-lg max-lg:w-65 mt-2"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 p-2 border rounded-lg shadow-sm bg-white max-w-85 mt-10">
                <label
                  htmlFor="image"
                  className="text-sm font-medium text-gray-700"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="block w-full text-sm text-gray-500
               file:mr-4 file:py-2 file:px-4
               file:rounded-md file:border-0
               file:text-sm file:font-semibold
               file:bg-indigo-50 file:text-indigo-700
               hover:file:bg-indigo-100
               transition duration-200 ease-in-out"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      <button
        onClick={handleUpdate}
        id="btn_updates"
        className="mb-8 mt-5 bg-blue-700 rounded-lg h-10 w-75 text-center text-white"
      >
        Update Changes
      </button>
      <Account />
    </>
  );
}

export default DetailProfil;
