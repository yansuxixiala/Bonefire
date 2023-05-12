
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Header from './components/Header';
import CampIndex from './pages/CampIndex';
import "bootstrap/dist/css/bootstrap.css";
import North from './pages/North';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import { CartContext } from '../CartContext';
import ProductList from './pages/ProductList';
import MyLovePage from '../src/pages/MyLovePage';
import Food1 from './pages/Food1';

import Appointment from './pages/appointment';
import Profile from "./pages/Profile";



function App() {

  const [cartItems, setCartItems] = useState([])

  return (

    // <Router>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <div className="bg-slate-100 min-h-screen">
          <Routes>
            {/* <Route element={<AuthLayout />}>
              <Route path="/" element={<Home />} />
            </Route> */}
            <Route element={<GuestLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/password-reset/:token" element={<ResetPassword />} />
            </Route>
            <Route path="/" element={<CampIndex />} />
            <Route path="/mylovepage" element={<MyLovePage />} />
            <Route path="/food1" element={<Food1 />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/North" element={<North />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product" element={<ProductDetail />}>
              <Route path=':id' element={<ProductDetail />} />
            </Route>
          </Routes>
        </div>
      </CartContext.Provider>
    // </Router>
  );
}

export default App;
