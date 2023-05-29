import { useContext, useState } from "react";
import {
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineClose,
} from "react-icons/ai";
import { MdOutlineLogin } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";

import minuteLogo from "../../Assets/minuteLogoLightMode.png";
import { ProductContext } from "../../Contexts/ProductContext";
import "./Navbar.css";

const Navbar = () => {
  const { filtersDispatch, filtersState } = useContext(ProductContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  const handleSearch = (e) => {
    filtersDispatch({ type: "setSearch", payload: e.target.value });
    if (filtersState?.search.length !== "") {
      navigate("/products");
    }
  };

  const toggleSearchBar = () => {
    setSearchBarVisible(!isSearchBarVisible);
  };

  return (
    <nav>
      <div className="logo-container">
        <NavLink to="/" className="nav-link">
          <div className="logo">
            <img src={minuteLogo} alt="Minute Logo" className="logo-icon" />
            <span className="logo-name">Minute</span>
          </div>
        </NavLink>
      </div>

      <div
        className={`search-container ${
          isSearchBarVisible ? " search-visible" : ""
        }`}
      >
        <CiSearch className="search-icon" />
        <input
          type="text"
          placeholder="search Product"
          onChange={handleSearch}
        />
        <button className="nav-btn" onClick={toggleSearchBar}>
          <AiOutlineClose className="close-icon" />
        </button>
      </div>

      <div className="nav-btn-container">
        <button className="nav-link nav-btn" onClick={toggleSearchBar}>
          <BiSearch className="nav-btn-icon" />
        </button>

        <NavLink to="/products" className="nav-link nav-btn">
          <AiOutlineShopping className="nav-btn-icon" />
        </NavLink>

        <NavLink to="/wishlist" className="nav-link nav-btn">
          <AiOutlineHeart className="nav-btn-icon" />
        </NavLink>

        <NavLink to="/cart" className="nav-link nav-btn">
          <AiOutlineShoppingCart className="nav-btn-icon" />
        </NavLink>

        <NavLink
          to={token ? "/userDetails" : "/login"}
          className="nav-link nav-btn"
        >
          {token ? (
            <>
              <AiOutlineUser className="nav-btn-icon" />
              <span>{JSON.parse(user)?.firstName}</span>
            </>
          ) : (
            <MdOutlineLogin className="nav-btn-icon" />
          )}
        </NavLink>
      </div>
    </nav>
  );
};
export { Navbar };
