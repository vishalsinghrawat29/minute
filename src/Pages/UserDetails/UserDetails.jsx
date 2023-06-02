import { useState } from "react";
import { UserProfile } from "../../Component/UserProfile/UserProfile";
import { UserAddress } from "../../Component/UserAddress/UserAddress";
import "./UserDetailsStyle.css";

const UserDetails = () => {
  const [check, setChecked] = useState(true);

  return (
    <div className="user-details-page">
      <h1 className="user-details-heading">User Details</h1>
      <div className="user-details-container">
        <div className="user-details-tab-container">
          <div className="user-details-tab">
            <input
              type="radio"
              name="tabs"
              id="profile"
              checked={check}
              onChange={() => setChecked(!check)}
            />
            <label htmlFor="profile">Profile</label>
          </div>
          <div className="user-details-tab">
            <input
              type="radio"
              name="tabs"
              id="address"
              checked={!check}
              onChange={() => setChecked(!check)}
            />
            <label htmlFor="address">Address</label>
          </div>
        </div>

        {check ? <UserProfile /> : <UserAddress />}
      </div>
    </div>
  );
};
export { UserDetails };
