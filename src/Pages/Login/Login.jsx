import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../index.js";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "./LoginStyle.css";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { userLogged, authState } = useContext(AuthContext);
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const navigate = useNavigate();

  const isToken = authState?.token;

  const guestUserData = {
    email: "vishal@gmail.com",
    password: "vishal1234",
  };

  const handleLogin = () => {
    userLogged(userData);
  };

  const handleGuestLogin = () => {
    setUserData(guestUserData);
    userLogged(guestUserData);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="login-page-container">
      <h1 className="login-heading">Login Page</h1>
      <div className="login-body">
        <div className="login-field-container">
          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="test@gmail.com"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={isPasswordHide ? "password" : "text"}
              placeholder={isPasswordHide ? "********" : "Enter Password"}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <span onClick={() => setIsPasswordHide(!isPasswordHide)}>
              {isPasswordHide ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </div>
        <div className="loign-btn-container">
          <button
            className="login-btn"
            onClick={handleLogin}
            disabled={isToken?.length}
          >
            Login
          </button>
          <button onClick={handleGuestLogin}>Login as Guest</button>
        </div>
        <p className="login-new-account" onClick={() => navigate("/signup")}>
          Create New Account
        </p>
      </div>
    </div>
  );
};

export { Login };
