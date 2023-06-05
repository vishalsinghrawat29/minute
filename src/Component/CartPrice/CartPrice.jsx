import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Contexts/ProductContext";
import { MdOutlineDiscount } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import "./CartPriceStyle.css";

const CartPrice = ({ setCouponModel }) => {
  const { productState, couponValue, setCoupenValue, orderDispatch } =
    useContext(ProductContext);

  const navigate = useNavigate();

  const totalQunatity = productState?.cart.reduce(
    (acc, { qty }) => acc + qty,
    0
  );
  const totalPrice = productState?.cart
    .reduce((acc, { price, qty }) => acc + qty * price, 0)
    .toFixed(2);
  const discountPrice = productState?.cart.reduce(
    (acc, { qty }) => acc + qty * 50,
    0
  );
  const couponPrice = parseFloat(couponValue.value);
  const totalDiscount = discountPrice + couponPrice;

  const netPrice = totalPrice - discountPrice - couponPrice;

  const checkoutHandler = () => {
    orderDispatch({
      type: "setPriceDetails",
      payload: {
        price: totalPrice,
        discount: discountPrice,
        coupon: couponValue,
        totalAmt: netPrice,
        totalDiscount: totalDiscount,
      },
    });
    navigate("/checkout");
  };

  return (
    <div className="cart-price-card">
      <div>
        <div className="cart-price-coupen-apply">
          <p className="pc-center">
            <MdOutlineDiscount /> <span>Have a Coupen ?</span>
          </p>
          <button onClick={() => setCouponModel(true)}>Apply</button>
        </div>

        <hr />
        <h1 className="cart-price-heading">Price Details</h1>
        <hr />
      </div>
      <div className="cart-price-row">
        <p>Price ({totalQunatity})</p>
        <p>₹ {totalPrice}</p>
      </div>
      <div className="cart-price-row">
        <p>Discount</p>
        <p> - ₹ {discountPrice.toFixed(2)}</p>
      </div>
      <div className="cart-price-row">
        <p>Delivery Charges</p>
        <p>FREE</p>
      </div>
      <div className="cart-price-row">
        <p>Coupon Discount</p>
        <p>
          {couponPrice !== 0 && "- "}₹ {couponPrice.toFixed(2)}
        </p>
      </div>

      {couponPrice !== 0 && (
        <div className="cart-price-row cart-price-card-coupon">
          <p className="pc-center">
            <CiDiscount1 className="cart-coupon-icon" />
            {couponValue.couponName}
          </p>
          <button
            onClick={() => {
              setCoupenValue({ couponName: "", value: 0 });
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
      )}

      <hr />
      <div className="cart-price-net">
        <p>Total Amount</p>
        <p>₹ {netPrice}</p>
      </div>
      <hr />
      <p className="discount-msg">
        You will save <span>₹ {totalDiscount.toFixed(2)}</span> on this order
      </p>
      <button className="cart-price-checkout-btn" onClick={checkoutHandler}>
        Checkout
      </button>
    </div>
  );
};
export { CartPrice };
