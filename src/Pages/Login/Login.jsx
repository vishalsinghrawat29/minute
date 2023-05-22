import { useContext, useState } from "react";
import { AuthContext } from "../../index.js";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { userLogged, userLogout, errorMessage } = useContext(AuthContext);

  const isToken = localStorage.getItem("token");
  const userDetails = localStorage.getItem("user");

  const handleLogin = () => {
    userLogged(userData);
  };

  console.log(userDetails);

  return (
    <>
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
      <p>{localStorage.getItem("token")}</p>
      <p>{errorMessage}</p>
    </>
  );
};

export { Login };
