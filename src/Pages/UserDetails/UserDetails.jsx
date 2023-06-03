import { useContext } from "react";
import { UserProfile } from "../../Component/UserProfile/UserProfile";
import { UserAddress } from "../../Component/UserAddress/UserAddress";
import "./UserDetailsStyle.css";
import { ProductContext } from "../../Contexts/ProductContext";

const UserDetails = () => {
  const { isProfileTab, setIsProfileTab } = useContext(ProductContext);

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
              checked={isProfileTab}
              onChange={() => setIsProfileTab(!isProfileTab)}
            />
            <label htmlFor="profile">Profile</label>
          </div>
          <div className="user-details-tab">
            <input
              type="radio"
              name="tabs"
              id="address"
              checked={!isProfileTab}
              onChange={() => setIsProfileTab(!isProfileTab)}
            />
            <label htmlFor="address">Address</label>
          </div>
        </div>

        {isProfileTab ? <UserProfile /> : <UserAddress />}
      </div>
    </div>
  );
};
export { UserDetails };
