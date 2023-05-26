import { createContext, useEffect, useReducer, useState } from "react";
import { AuthReducer } from "../Reducer/AuthReducer.jsx";
import { getUserAddress } from "../utils/addressUtils.jsx";

import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthProivider = ({ children }) => {
  const initialAuthState = {
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
    address: localStorage.getItem("address"),
  };

  const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const encodedToken = localStorage.getItem("token");

  const userLogged = async (loginData) => {
    if (loginData.email && loginData.password !== "") {
      try {
        const config = {
          method: "POST",
          body: JSON.stringify(loginData),
        };
        const res = await fetch("/api/auth/login", config);
        const resJson = await res.json();
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(resJson?.foundUser));
          localStorage.setItem("token", resJson?.encodedToken);
          authDispatch({ type: "setUser", payload: resJson?.foundUser });
          authDispatch({ type: "setToken", payload: resJson?.encodedToken });

          navigate(
            location?.state?.from?.pathname
              ? location?.state?.from?.pathname
              : "/"
          );
        } else {
          setErrorMessage(resJson?.errors[0]);
        }
      } catch (err) {
        userLogout();
        console.log(err.message);
        setErrorMessage(err.message);
      }
    } else {
      setErrorMessage("Please Enter Data!!");
    }
  };

  const userLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("address");
    authDispatch({ type: "setUser", payload: {} });
    authDispatch({ type: "setToken", payload: "" });
    authDispatch({ type: "setAddress", payload: [] });
  };

  const userSignup = async (signupData) => {
    console.log(signupData);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(signupData),
      });
      const resJson = await res.json();
      if (res.status === 201) {
        localStorage.setItem("user", JSON.stringify(resJson?.createdUser));
        localStorage.setItem("token", resJson?.encodedToken);
        authDispatch({
          type: "setUser",
          payload: JSON.stringify(resJson?.foundUser),
        });
        authDispatch({ type: "setToken", payload: resJson?.encodedToken });
        navigate("/");
      }
      console.log(resJson);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const setUserAddress = async () => {
      const addressRes = await getUserAddress(encodedToken);
      const addressResJson = await addressRes?.json();
      console.log(addressResJson);
      localStorage.setItem("address", addressResJson);
      authDispatch({ type: "setAddress", payload: addressResJson });
    };

    setUserAddress();
  }, [encodedToken]);

  return (
    <AuthContext.Provider
      value={{
        authState,
        userLogged,
        userLogout,
        errorMessage,
        userSignup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
