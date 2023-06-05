import { useContext, useEffect } from "react";
import { ProductContext } from "../../Contexts/ProductContext";
import { UserProfile } from "../../Component/UserProfile/UserProfile";
import { UserAddress } from "../../Component/UserAddress/UserAddress";
import "./UserDetailsStyle.css";

const UserDetails = () => {
  const { isProfileTab, setIsProfileTab } = useContext(ProductContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
