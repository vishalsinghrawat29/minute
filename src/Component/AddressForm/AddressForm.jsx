import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { addUserAddress, updateUserAddress } from "../../utils/addressUtils";
import "./AddressFormStyle.css";

const AddressForm = ({
  setIsAddressForm,
  setAddressForm,
  addressForm,
  initialAddressForm,
}) => {
  const { authState, authDispatch } = useContext(AuthContext);
  const encodedToken = authState?.token;

  const fillFormValue = (e) => {
    setAddressForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fillFormWithDummy = (e) => {
    e.preventDefault();
    setAddressForm((form) => ({
      ...form,
      name: "Test User",
      street: "123 Test Street",
      city: "Test City",
      state: "Test State",
      country: "Test Country",
      zipCode: "12345",
      mobile: "9876543210",
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
    <div className="address-form-wrapper">
      <div className="address-form-container">
        <h3 className="address-form-heading">Add New Address </h3>
        <div className="address-form-field-container">
          <form
            onSubmit={(e) => {
              saveAddressHandler(e);
              setAddressForm(initialAddressForm);
              setIsAddressForm(false);
            }}
          >
            <div className="address-form-field ">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                value={addressForm.name}
                onChange={(e) => fillFormValue(e)}
                required
              />

              <input
                type="text"
                name="street"
                id="street"
                placeholder="Enter House No., Road, Colony"
                value={addressForm.street}
                onChange={(e) => fillFormValue(e)}
                required
              />

              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter city"
                value={addressForm.city}
                onChange={(e) => fillFormValue(e)}
                required
              />

              <input
                type="text"
                name="state"
                id="state"
                placeholder="Enter State"
                value={addressForm.state}
                onChange={(e) => fillFormValue(e)}
                required
              />

              <input
                type="text"
                name="country"
                id="country"
                placeholder="Enter country"
                value={addressForm.country}
                onChange={(e) => fillFormValue(e)}
                required
              />

              <input
                type="number"
                name="zipCode"
                id="zipCode"
                placeholder="Enter ZipCode"
                value={addressForm.zipCode}
                onChange={(e) => fillFormValue(e)}
                required
              />

              <input
                type="number"
                name="mobile"
                id="mobileNumber"
                placeholder="Enter Mobile Number"
                value={addressForm.mobile}
                onChange={(e) => fillFormValue(e)}
                required
              />
            </div>

            <div className="address-form-btn-container">
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export { AddressForm };
