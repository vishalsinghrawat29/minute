import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import "./UserProfileStyle.css";

const UserProfile = () => {
  const { userLogout } = useContext(AuthContext);
  const { firstName, lastName, email } = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="user-profile-container">
      <div className="user-profile-body">
        <p>
          <span>Name: </span> {firstName + " " + lastName}
        </p>
        <p>
          <span>Email: </span>
          {email}
        </p>
        <button onClick={userLogout}>LogOut</button>
      </div>
    </div>
  );
};
export { UserProfile };
