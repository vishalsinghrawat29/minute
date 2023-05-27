import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { addUserAddress, updateUserAddress } from "../../utils/addressUtils";

const AddressForm = ({
  setIsAddressForm,
  setAddressForm,
  addressForm,
  initialAddressForm,
}) => {
  const { authDispatch } = useContext(AuthContext);
  const encodedToken = localStorage.getItem("token");

  const fillFormValue = (e) => {
    setAddressForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fillFormWithDummy = (e) => {
    e.preventDefault();
    setAddressForm((form) => ({
      ...form,
      name: "Admin",
      street: "33 , MG Road",
      city: "Ajmer",
      state: "Rajasthan",
      country: "India",
      zipCode: "305001",
      mobile: "9493492301",
    }));
  };

  const saveAddressHandler = (e) => {
    e.preventDefault();
    addressForm._id
      ? updateUserAddress(
          addressForm,
          encodedToken,
          authDispatch,
          setIsAddressForm
        )
      : addUserAddress(
          addressForm,
          encodedToken,
          authDispatch,
          setIsAddressForm
        );
  };
  return (
    <div
      style={{
        background: " #342e2ebf",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        zIndex: "10",
      }}
    >
      <div
        style={{
          padding: "1rem 2rem 3rem 2rem",
          backgroundColor: "white",
          textAlign: "center",
          width: "400px",
          height: "auto",
          margin: "2rem auto",
          borderRadius: "10px",
        }}
      >
        <h3>Add New Address </h3>
        <br />
        <form onSubmit={(e) => saveAddressHandler(e)}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            style={{ width: "100%" }}
            value={addressForm.name}
            onChange={(e) => fillFormValue(e)}
            required
          />
          <br />
          <br />
          <label htmlFor="street">Street</label>
          <br />
          <input
            type="text"
            name="street"
            id="street"
            placeholder="Enter House No., Road, Colony"
            style={{ width: "100%" }}
            value={addressForm.street}
            onChange={(e) => fillFormValue(e)}
            required
          />
          <br />
          <br />
          <label htmlFor="city">City</label>
          <br />
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter city"
            style={{ width: "100%" }}
            value={addressForm.city}
            onChange={(e) => fillFormValue(e)}
            required
          />
          <br />
          <br />
          <label htmlFor="state">State</label>
          <br />
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Enter State"
            style={{ width: "100%" }}
            value={addressForm.state}
            onChange={(e) => fillFormValue(e)}
            required
          />
          <br />
          <br />
          <label htmlFor="country">Country</label>
          <br />
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Enter country"
            style={{ width: "100%" }}
            value={addressForm.country}
            onChange={(e) => fillFormValue(e)}
            required
          />
          <br />
          <br />
          <label htmlFor="zipCode">ZipCode</label>
          <br />
          <input
            type="number"
            name="zipCode"
            id="zipCode"
            placeholder="Enter ZipCode"
            style={{ width: "100%" }}
            value={addressForm.zipCode}
            onChange={(e) => fillFormValue(e)}
            required
          />
          <br />
          <br />
          <label htmlFor="mobileNumber">Mobile Number</label>
          <br />
          <input
            type="number"
            name="mobile"
            id="mobileNumber"
            placeholder="Enter Mobile Number"
            style={{ width: "100%" }}
            value={addressForm.mobile}
            onChange={(e) => fillFormValue(e)}
            required
          />
          <br />
          <br />
          <button type="submit"> Save</button>
          <button onClick={(e) => fillFormWithDummy(e)}>
            Fill With Dummy Data
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setAddressForm(initialAddressForm);
              setIsAddressForm(false);
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
export { AddressForm };
