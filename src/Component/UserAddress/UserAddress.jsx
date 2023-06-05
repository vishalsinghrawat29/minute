import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { AddressCard } from "../AddressCard/AddressCard";
import { AddressForm } from "../AddressForm/AddressForm";
import "./UserAddressStyle.css";

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
    <div className="user-address-container">
      {addressArr?.length === 0 || addressArr === null ? (
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
      <button
        className="user-address-add-btn"
        onClick={() => setIsAddressForm(true)}
      >
        Add New Address
      </button>
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
