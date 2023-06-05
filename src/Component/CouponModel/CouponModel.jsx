import { useContext, useState } from "react";
import { ProductContext } from "../../Contexts/ProductContext";
import { AiOutlineClose } from "react-icons/ai";
import "./CouponModelStyle.css";

const CoupensData = [
  { couponName: "TIME99", value: 99 },
  { couponName: "WATCHSALE", value: 120 },
];

const CouponModel = ({ setCouponModel }) => {
  const { couponValue, setCoupenValue } = useContext(ProductContext);
  const [couponInput, setCoupenInput] = useState(couponValue);

  return (
    <div className="coupon-model-wrapper">
      <div className="coupon-model-container">
        <div className="coupon-model-head ">
          <h3>Apply Coupon</h3>
          <button onClick={() => setCouponModel(false)}>
            <AiOutlineClose className="coupon-model-close" />
          </button>
        </div>
        <div className="coupon-model-body">
          {CoupensData.map(({ couponName, value }) => (
            <div key={couponName} className="coupon-box">
              <input
                type="radio"
                name="coupon"
                id={couponName}
                onChange={() =>
                  setCoupenInput({
                    ...couponInput,
                    couponName: couponName,
                    value: value,
                  })
                }
                checked={value === couponInput.value}
              />
              <label htmlFor={couponName}>
                {couponName}: ₹ {value} OFF
              </label>
            </div>
          ))}
        </div>
        <div className="coupon-submit-btn">
          <button
            onClick={() => {
              setCouponModel(false);
              setCoupenValue(couponInput);
            }}
          >
            Apply Coupon
          </button>
        </div>
      </div>
    </div>
  );
};
export { CouponModel };
