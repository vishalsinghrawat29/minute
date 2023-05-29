import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
