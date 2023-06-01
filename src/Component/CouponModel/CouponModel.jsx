// import { useContext } from "react";
// import { ProductContext } from "../../Contexts/ProductContext";

const CoupensData = [
  { couponName: "TIME100", value: "100" },
  { couponName: "WATCHSALE", value: "150" },
];
const CouponModel = ({ setCouonModel }) => {
  //   const { couponValue, setCoupenValue, productState } =
  //     useContext(ProductContext);

  return (
    <div
      style={{
        background: " #342e2ebf",
        position: "fixed",
        top: "3.6rem",
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
          margin: "10rem auto",
          borderRadius: "10px",
        }}
      >
        <div>
          <h3>Apply Coupon</h3>
          <button onClick={() => setCouonModel(false)}>Close</button>
        </div>
        <div>
          {CoupensData.map(({ couponName, value }) => (
            <div key={couponName}></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export { CouponModel };
