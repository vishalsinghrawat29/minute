import { useContext, useState } from "react";
import { AuthContext } from "../../index.js";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { userLogged, userLogout, errorMessage } = useContext(AuthContext);

  const isToken = localStorage.getItem("token");

  const handleLogin = () => {
    userLogged(userData);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1>Login Page</h1>
      <input
        type="text"
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <input
        type="password"
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <button onClick={handleLogin} disabled={isToken?.length}>
        Login
      </button>
      <button onClick={userLogout} disabled={!isToken?.length}>
        Logout
      </button>
      <p>{errorMessage}</p>
      <NavLink to="/signup">Create New Account</NavLink>
    </div>
  );
};

export { Login };
