import { useContext, useState } from "react";
import { AuthContext } from "../../index.js";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { userLogged, userLogout, authState } = useContext(AuthContext);

  const handleLogin = () => {
    userLogged(userData);
  };
  console.log(localStorage.getItem("authState"));
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
      <button onClick={handleLogin}>Login</button>
      <button onClick={userLogout}>Logout</button>
      <p>{authState?.isLogged.toString()}</p>
      <p>{localStorage.getItem("token")}</p>
      <p>{authState.message.length > 0 && authState.message}</p>
    </>
  );
};

export { Login };
