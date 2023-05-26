import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const UserProfile = () => {
  const { userLogout } = useContext(AuthContext);
  const { firstName, lastName, email } = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div
      style={{
        width: "300px",
        margin: "2rem auto",
        border: "1px solid black",
        textAlign: "center",
      }}
    >
      <h1>User Profile Page</h1>
      <div>
        <div className="tab-body">
          <p>Name: {firstName + " " + lastName}</p>
          <p>Email: {email}</p>
          <button onClick={userLogout}>LogOut</button>
        </div>
      </div>
    </div>
  );
};
export { UserProfile };
