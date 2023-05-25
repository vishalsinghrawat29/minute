import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const UserProfile = () => {
  const { userLogout } = useContext(AuthContext);

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
          <button onClick={userLogout}>LogOut</button>
        </div>
      </div>
    </div>
  );
};
export { UserProfile };
