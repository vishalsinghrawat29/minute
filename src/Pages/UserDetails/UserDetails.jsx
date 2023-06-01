import { useState } from "react";
import { UserProfile } from "../../Component/UserProfile/UserProfile";
import { UserAddress } from "../../Component/UserAddress/UserAddress";

const UserDetails = () => {
  const [check, setChecked] = useState(true);

  return (
    <div style={{ margin: "5rem auto" }}>
      <h1>User Details</h1>
      <input
        type="radio"
        name="tabs"
        id="profile"
        checked={check}
        onChange={() => setChecked(!check)}
      />
      <label htmlFor="profile">Profile</label>
      <input
        type="radio"
        name="tabs"
        id="address"
        checked={!check}
        onChange={() => setChecked(!check)}
      />
      <label htmlFor="address">Address</label>
      {check ? <UserProfile /> : <UserAddress />}
    </div>
  );
};
export { UserDetails };
