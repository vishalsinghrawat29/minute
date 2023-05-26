import { useContext, useState } from "react";
import { AddressCard } from "../AddressCard/AddressCard";
import { AuthContext } from "../../Contexts/AuthContext";
import { AddressForm } from "../AddressForm/AddressForm";

const UserAddress = () => {
  const { authState } = useContext(AuthContext);
  const [isAddressForm, setIsAddressForm] = useState(false);

  const addressArr = authState?.address?.address;
  return (
    <div
      style={{
        width: "500px",
        margin: "0 auto",
        border: "1px solid black",
        textAlign: "center",
      }}
    >
      <h1>User Address Page</h1>
      {addressArr?.length === 0 ? (
        <p>No Address added yet</p>
      ) : (
        addressArr?.map((address) => (
          <AddressCard key={address._id} address={address} />
        ))
      )}
      <button onClick={() => setIsAddressForm(true)}>Add Address</button>
      {isAddressForm && <AddressForm setIsAddressForm={setIsAddressForm} />}
    </div>
  );
};
export { UserAddress };
