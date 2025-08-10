import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Index from "./movies/Index";
import ListMovie from "./movies/ListMovie";
import Payment_Modal from "./movies/Payment_Modal";
import DetailMovie from "./movies/Detail-Movie";
import TicketResult from "./movies/TicketResult";
import ProfilePage from "./movies/ProfilePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OrderPage from "./movies/OrderPage";
import AdminPage from "./movies/AdminPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route index element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="movies" element={<RouteLayout />}>
          <Route index element={<Index />} />
          <Route path="listmovies" element={<ListMovie />} />
          <Route path="detailmovies/:id" element={<DetailMovie />} />
          <Route path="paymentmodal" element={<Payment_Modal />} />
          <Route path="ticketresult" element={<TicketResult />} />
          <Route path="profilpage" element={<ProfilePage />} />
          <Route path="orderpage" element={<OrderPage />} />
          <Route path="admin" element={<AdminPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function RouteLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Router;
