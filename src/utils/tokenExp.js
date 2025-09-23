// import { logout } from "../redux/slice/authSlice";
// import { toast } from "sonner";

// export function tokenExp(token) {
//   try {
//     const payload = JSON.parse(atob(token.split('.')[1]));
//     return Date.now() >= payload.exp * 1000;
//   } catch (err) {
//     console.error("Gagal decode token:", err);
//     return true; // anggap expired kalau gagal decode
//   }
// }
