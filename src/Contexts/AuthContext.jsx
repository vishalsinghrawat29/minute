import { createContext, useReducer } from "react";
import { AuthReducer } from "../Reducer/AuthReducer.jsx";

import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthProivider = ({ children }) => {
  const initialAuthState = {
    isLogged: false,
    user: {},
    token: "",
    message: "",
  };
  const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState);
  const location = useLocation();
  const navigate = useNavigate();

  const userLogged = async (loginData) => {
    try {
      const config = {
        method: "POST",
        body: JSON.stringify(loginData),
      };
      const res = await fetch("/api/auth/login", config);
      const resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        localStorage.setItem("token", resJson?.encodedToken);
        authDispatch({
          type: "setIsLogged",
          payload: true,
        });
        authDispatch({ type: "setUser", payload: resJson?.foundUser });
        authDispatch({ type: "setToken", payload: resJson?.encodedToken });
        authDispatch({
          type: "setMessage",
          payload: "Login SuccessFully",
        });
        navigate(
          location?.state?.from?.pathname
            ? location?.state?.from?.pathname
            : "/"
        );
      } else {
        authDispatch({
          type: "setMessage",
          payload: resJson?.errors[0],
        });
      }
    } catch (err) {
      userLogout();
      console.log(err.message);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("token");
    authDispatch({ type: "setIsLogged", payload: false });
    authDispatch({ type: "setUser", payload: {} });
    authDispatch({ type: "setToken", payload: "" });
    authDispatch({
      type: "setMessage",
      payload: "Logout",
    });
  };
  localStorage.setItem("authState", JSON.stringify(authState));
  return (
    <AuthContext.Provider value={{ authState, userLogged, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
