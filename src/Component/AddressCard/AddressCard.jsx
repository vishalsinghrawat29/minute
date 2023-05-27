import { useContext } from "react";
import { removeUserAddress } from "../../utils/addressUtils";
import { AuthContext } from "../../Contexts/AuthContext";

const AddressCard = ({ address, setAddressForm, setIsAddressForm }) => {
  const { _id, name, street, city, state, country, zipCode, mobile } = address;
  const { authDispatch } = useContext(AuthContext);
  const encodedToken = localStorage.getItem("token");

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
    <div
      style={{
        margin: "1rem",
        border: "1px solid red",
        padding: "0.25rem",
        textAlign: "left",
      }}
    >
      <p>{name}</p>
      <p>
        {street}, {city}, {state}.
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
