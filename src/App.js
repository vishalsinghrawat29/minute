import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { Home } from "./Pages/Home/Home.jsx";
import { Products } from "./Pages/Products/Products.jsx";
import { Wishlist } from "./Pages/Wishlist/Wishlist.jsx";
import { Cart } from "./Pages/Cart/Cart.jsx";
import { Login } from "./Pages/Login/Login.jsx";
import { Signup } from "./Pages/Signup/Signup.jsx";
import { ProductView } from "./Pages/Product View/ProductView.jsx";
import { RequiresAuth } from "./Component/Auth/RequiresAuth.jsx";
import { useContext } from "react";
import { ProductContext } from "./Contexts/ProductContext";
import { UserDetails } from "./Pages/UserDetails/UserDetails";

function App() {
  const { filtersDispatch, filtersState } = useContext(ProductContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  return (
    <div className="App">
      <nav style={{ padding: "1rem", height: "64px" }}>
        <NavLink to="/">Home</NavLink> ||
        <NavLink to="/products">Products</NavLink> ||
        <NavLink to="/wishlist">Wishlist</NavLink> ||
        <NavLink to="/cart">Cart</NavLink> ||
        <NavLink to={token ? "/userDetails" : "/login"}>
          {token ? JSON.parse(user)?.firstName : "login"}
        </NavLink>
        ||
        <NavLink to="/mockman">Mockman</NavLink> ||
        <input
          type="text"
          placeholder="search Product"
          onChange={(e) => {
            filtersDispatch({
              type: "setSearch",
              payload: e.target.value,
            });
            filtersState?.search.length !== "" && navigate("/products");
          }}
        />
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
