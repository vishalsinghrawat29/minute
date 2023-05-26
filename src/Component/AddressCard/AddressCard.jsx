const AddressCard = ({ address }) => {
  const { name, street, city, state, country, zipCode, mobile } = address;
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
    </div>
  );
};
export { AddressCard };
