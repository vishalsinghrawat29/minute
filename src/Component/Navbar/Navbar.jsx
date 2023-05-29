import { useContext, useState } from "react";
import {
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineClose,
} from "react-icons/ai";
import "./Navbar.css";

import { MdOutlineLogin } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

import minuteLogo from "../../Assets/minuteLogoLightMode.png";
import { ProductContext } from "../../Contexts/ProductContext";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const { filtersDispatch, filtersState } = useContext(ProductContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  return (
    <nav>
      <div className="logo-container">
        <NavLink to="/" className="nav-link" activeClassName="active-nav-link">
          <div className="logo">
            <img src={minuteLogo} alt="Minute Logo" className="logo-icon" />
            <span className="logo-name">Minute</span>
          </div>
        </NavLink>
      </div>

      <div
        className={`search-bar-contianer ${
          isSearchBarVisible ? " search-bar-visible" : ""
        }`}
      >
        <CiSearch className="input-icon" />
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
        <button
          className="nav-btn"
          onClick={() => setSearchBarVisible(!isSearchBarVisible)}
        >
          <AiOutlineClose className="btn-icon" />
        </button>
      </div>

      <div className="nav-btn-container">
        <button
          className="nav-link nav-btn"
          onClick={() => setSearchBarVisible(!isSearchBarVisible)}
        >
          <BiSearch className="btn-icon" />
        </button>
        <NavLink
          to="/products"
          className="nav-link nav-btn"
          activeClassName="active-nav-link"
        >
          <AiOutlineShopping className="btn-icon" />
        </NavLink>
        <NavLink
          to="/wishlist"
          className="nav-link nav-btn"
          activeClassName="active-nav-link"
        >
          <AiOutlineHeart className="btn-icon" />
        </NavLink>
        <NavLink
          to="/cart"
          className="nav-link nav-btn"
          activeClassName="active-nav-link"
        >
          <AiOutlineShoppingCart className="btn-icon" />
        </NavLink>
        <NavLink
          to={token ? "/userDetails" : "/login"}
          className="nav-link nav-btn"
          activeClassName="active-nav-link"
        >
          {token ? (
            <>
              <AiOutlineUser className="btn-icon" />
              <span>{JSON.parse(user)?.firstName}</span>
            </>
          ) : (
            <MdOutlineLogin className="btn-icon" />
          )}
        </NavLink>
      </div>
    </nav>
  );
};
export { Navbar };
