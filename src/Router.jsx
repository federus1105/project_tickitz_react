import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Forget from "./auth/ForgetPass";
import Index from "./movies/Index";
import ListMovie from "./movies/ListMovie";
import Payment_Modal from "./movies/Payment_Modal";
import DetailMovie from "./movies/Detail-Movie";
import TicketResult from "./movies/TicketResult";
import ProfilePage from "./movies/ProfilePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OrderPage from "./movies/OrderPage";
import AdminPage from "./admin/AdminPage";
import TableAdmin from "./admin/TableAdmin";
import AddMovies from "./admin/AddMovies";
import NavbarAdmin from "./components/NavbarAdmin";
import { PrivateRoute } from "./components/PrivateRoute";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import EditMovie from "./admin/EditMovie";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="auth">
            <Route index element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forget" element={<Forget />} />
          </Route>
          <Route path="movies" element={<RouteLayout />}>
            <Route index element={<Index />} />
            <Route path="listmovies" element={<ListMovie />} />
            <Route
              path="detailmovies/:id"
              element={
                <PrivateRoute redirectTo="/auth/login">
                  <DetailMovie />
                </PrivateRoute>
              }
            />
            <Route path="paymentmodal" element={<Payment_Modal />} />
            <Route path="ticketresult" element={<TicketResult />} />
            <Route path="profilpage" element={<ProfilePage />} />
            <Route path="orderpage" element={<OrderPage />} />
          </Route>
          <Route path="admin" element={<RouteAdmin />}>
            <Route index element={<AdminPage />} />
            <Route path="table" element={<TableAdmin />} />
            <Route path="addmovies" element={<AddMovies />} />
            <Route path="editmovies/:id" element={<EditMovie />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// untuk otomatis berada di halaman atas
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function RouteAdmin() {
  return (
    <>
      <ScrollToTop />
      <NavbarAdmin />
      <Outlet />
    </>
  );
}

function RouteLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Router;
