import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./Pages/Home/Home.jsx";
import { Products } from "./Pages/Products/Products.jsx";
import { Wishlist } from "./Pages/Wishlist/Wishlist.jsx";
import { Cart } from "./Pages/Cart/Cart.jsx";
import { Login } from "./Pages/Login/Login.jsx";
import { Signup } from "./Pages/Signup/Signup.jsx";
import { ProductView } from "./Pages/Product View/ProductView.jsx";
import { RequiresAuth } from "./Component/Auth/RequiresAuth.jsx";

function App() {
  return (
    <div className="App">
      <nav style={{ padding: "1rem" }}>
        <NavLink to="/">Home</NavLink> ||
        <NavLink to="/products">Products</NavLink> ||
        <NavLink to="/wishlist">Wishlist</NavLink> ||
        <NavLink to="/cart">Cart</NavLink> ||
        <NavLink to="/login">Login</NavLink> ||
        <NavLink to="/signup">Signup</NavLink> ||
      </nav>

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
