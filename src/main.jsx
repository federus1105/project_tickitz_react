import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";
import List from "./movies/ListMovie.jsx";
import Router from "./Router.jsx";
import Payment_Modal from "./movies/Payment_Modal.jsx";
import DetailMovie from "./movies/Detail-Movie.jsx";
import Index from "./movies/Index.jsx";
import ProfilePage from "./movies/ProfilePage.jsx";
import TicketResult from "./movies/TicketResult.jsx";
import OrderPage from "./movies/OrderPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
