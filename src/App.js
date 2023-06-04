import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./Pages/Home/Home.jsx";
import { Products } from "./Pages/Products/Products.jsx";
import { Wishlist } from "./Pages/Wishlist/Wishlist.jsx";
import { Cart } from "./Pages/Cart/Cart.jsx";
import { Login } from "./Pages/Login/Login.jsx";
import { Signup } from "./Pages/Signup/Signup.jsx";
import { ProductView } from "./Pages/Product View/ProductView.jsx";
import { RequiresAuth } from "./Component/Auth/RequiresAuth.jsx";

import { UserDetails } from "./Pages/UserDetails/UserDetails";
import { Navbar } from "./Component/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "./Contexts/AuthContext";
import { Loader } from "./Component/Loader/Loader";
import { Checkout } from "./Pages/Checkout/Checkout";
import { OrderSummary } from "./Pages/OrderSummary/OrderSummary";

function App() {
  const { loader } = useContext(AuthContext);
  return (
    <div className="App">
      {loader && <Loader />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<ProductView />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/userDetails"
          element={
            <RequiresAuth>
              <UserDetails />
            </RequiresAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <Checkout />
            </RequiresAuth>
          }
        />
        <Route
          path="/orderSummary"
          element={
            <RequiresAuth>
              <OrderSummary />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
