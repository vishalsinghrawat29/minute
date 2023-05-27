import { useContext, useState } from "react";
import { AddressCard } from "../AddressCard/AddressCard";
import { AuthContext } from "../../Contexts/AuthContext";
import { AddressForm } from "../AddressForm/AddressForm";

const UserAddress = () => {
  const { authState } = useContext(AuthContext);
  const [isAddressForm, setIsAddressForm] = useState(false);
  const initialAddressForm = {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  };
  const [addressForm, setAddressForm] = useState(initialAddressForm);

  const addressArr = authState?.address;
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
          <AddressCard
            key={address._id}
            address={address}
            setAddressForm={setAddressForm}
            setIsAddressForm={setIsAddressForm}
          />
        ))
      )}
      <button onClick={() => setIsAddressForm(true)}>Add Address</button>
      {isAddressForm && (
        <AddressForm
          setIsAddressForm={setIsAddressForm}
          addressForm={addressForm}
          setAddressForm={setAddressForm}
          initialAddressForm={initialAddressForm}
        />
      )}
    </div>
  );
};
export { UserAddress };
