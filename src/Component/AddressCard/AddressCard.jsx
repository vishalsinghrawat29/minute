import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { removeUserAddress } from "../../utils/addressUtils";
import "./AddressCardStyle.css";

const AddressCard = ({ address, setAddressForm, setIsAddressForm }) => {
  const { _id, name, street, city, state, country, zipCode, mobile } = address;
  const { authState, authDispatch } = useContext(AuthContext);
  const encodedToken = authState?.token;

  const editAddress = (
    _id,
    name,
    street,
    city,
    state,
    country,
    zipCode,
    mobile
  ) => {
    setIsAddressForm(true);
    setAddressForm((prev) => ({
      ...prev,
      _id,
      name,
      street,
      city,
      state,
      country,
      zipCode,
      mobile,
    }));
  };

  return (
    <div className="user-address-card-container">
      <p className="user-address-card-name">{name}</p>
      <p>
        {street}, {city}, {state}
      </p>
      <p>
        PinCode: {zipCode}, {country}
      </p>
      <p>Mobile No. {mobile}</p>
      <button
        onClick={() =>
          editAddress(_id, name, street, city, state, country, zipCode, mobile)
        }
      >
        Edit
      </button>
      <button
        onClick={() =>
          removeUserAddress(address._id, encodedToken, authDispatch)
        }
      >
        Delete
      </button>
    </div>
  );
};
export { AddressCard };
