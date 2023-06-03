import { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductContext";
import { CiDiscount1 } from "react-icons/ci";
import { AuthContext } from "../../Contexts/AuthContext";
import { OrderAddress } from "../OrderAddress/OrderAddress";
import "./CheckoutPriceStyle.css";

const CheckoutPrice = () => {
  const { productState, orderState } = useContext(ProductContext);
  const { authState } = useContext(AuthContext);
  const {
    orderAddress,
    priceDetails: { price, discount, coupon, totalAmt },
  } = orderState;
  console.log(coupon);

  return (
    <div className="checkout-price-container">
      <div className="checkout-price-box-container">
        <h3>Order Details</h3>
        <div className="checkout-price-box">
          <div className="checkout-price-row checkout-price-row-title">
            <p>Item</p>
            <p>Qty</p>
          </div>
          <div className="checkout-price-row-container">
            {productState?.cart?.map(({ _id, name, qty }) => (
              <div key={_id} className="checkout-price-row">
                <p>{name}</p>
                <p>{qty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="checkout-price-box-container">
        <h3>Price Details</h3>
        <div className="checkout-price-box">
          <div className="checkout-price-row">
            <p>Price ({productState?.cart?.length} items)</p>
            <p>₹ {price}</p>
          </div>
          <div className="checkout-price-row">
            <p>Discount</p>
            <p> - ₹ {discount.toFixed(2)}</p>
          </div>
          <div className="checkout-price-row">
            <p>Delivery Charges</p>
            <p>FREE</p>
          </div>
          <div className="checkout-price-row">
            <p>Coupon Discount</p>
            <p>
              {coupon !== 0 && "- "}₹ {coupon?.value?.toFixed(2)}
            </p>
          </div>
          {coupon.value !== 0 && (
            <div className="checkout-price-row coupon-card">
              <p className="pc-center">
                <CiDiscount1 className="checkout-coupon-icon" />
                {coupon.couponName}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="checkout-price-box-container">
        <div className="checkout-price-box">
          <div className="checkout-price-row checkout-price-total">
            <p>Total Amount</p>
            <p>{totalAmt}</p>
          </div>
        </div>
      </div>

      <div className="checkout-price-box-container">
        <h3>Deliver To</h3>
        <div className="checkout-price-box">
          {orderAddress ? (
            <div className="checkout-price-address">
              <strong>{orderAddress?.name}</strong>
              <p>
                {orderAddress?.street}, {orderAddress?.city},
                {orderAddress?.state}
              </p>
              <p>
                Pincode: {orderAddress?.zipCode}, {orderAddress?.country}
              </p>
              <p>Mobile No. : {orderAddress?.mobile}</p>
            </div>
          ) : (
            <p>No address is added!</p>
          )}
        </div>
      </div>

      <button
        className="checkout-price-btn"
        disabled={
          authState?.address?.length === 0 || OrderAddress === undefined
        }
      >
        Place Order
      </button>
    </div>
  );
};
export { CheckoutPrice };
