const AddressForm = ({ setIsAddressForm }) => {
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
        <form>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            style={{ width: "100%" }}
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
          />
          <br />
          <br />
          <label htmlFor="state">State</label>
          <br />
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Enter state"
            style={{ width: "100%" }}
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
          />
          <br />
          <br />
          <label htmlFor="pincode">Pincode</label>
          <br />
          <input
            type="number"
            name="pincode"
            id="pincode"
            placeholder="Enter postal code"
            style={{ width: "100%" }}
          />
          <br />
          <br />
          <label htmlFor="mobileNumber">Country</label>
          <br />
          <input
            type="number"
            name="mobileNumber"
            id="mobileNumber"
            placeholder="Enter mobileNumber"
            style={{ width: "100%" }}
          />
          <br />
          <br />
          <button type="submit"> Save</button>
          <button> Fill With Dummy Data</button>
          <button onClick={() => setIsAddressForm(false)}> Cancel</button>
        </form>
      </div>
    </div>
  );
};
export { AddressForm };
