import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

const Signup = () => {
  const { userSignup } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const signupDataHandler = () => {
    if (
      Object.values(userDetails).includes("") ||
      confirmPassword !== userDetails.password
    ) {
      alert("Enter Valid Data");
    } else {
      userSignup(userDetails);
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "2rem auto",
        border: "1px solid black",
        padding: "1rem",
      }}
    >
      <h1>Signup Page</h1>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        required
        onChange={(e) =>
          setUserDetails((prev) => ({ ...prev, firstName: e.target.value }))
        }
      />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        required
        onChange={(e) =>
          setUserDetails((prev) => ({ ...prev, lastName: e.target.value }))
        }
      />{" "}
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        required
        onChange={(e) =>
          setUserDetails((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        required
        onChange={(e) =>
          setUserDetails((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <br />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        required
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <p>
        {confirmPassword !== "" &&
          confirmPassword !== userDetails.password &&
          "Password Dosn't match "}
      </p>
      <button onClick={signupDataHandler}>Signup</button>
      <NavLink to="/login">Already Have an Account</NavLink>
    </div>
  );
};
export { Signup };
