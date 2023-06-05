import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { CiDiscount1 } from "react-icons/ci";
import { ProductContext } from "../../Contexts/ProductContext";
import { AuthContext } from "../../Contexts/AuthContext";
import { OrderAddress } from "../OrderAddress/OrderAddress";
import { clearCart } from "../../utils/cartUtils";
import "./CheckoutPriceStyle.css";

const CheckoutPrice = ({ setOrderPlace }) => {
  const { productState, orderState, setOrder, orderDispatch, productDispatch } =
    useContext(ProductContext);
  const { authState } = useContext(AuthContext);
  const {
    orderAddress,
    priceDetails: { price, discount, coupon, totalAmt },
  } = orderState;
  const { firstName, lastName, email } = localStorage.getItem("user");
  const encodedToken = authState?.token;

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load, check you connection");
      return;
    }

    const options = {
      key: "rzp_test_Uk5Nb4mrqd04Rm",
      amount: totalAmt * 100,
      currency: "INR",
      name: "Minute",
      description: "Thank you for shopping with us",
      image:
        "https://github.com/vishalsinghrawat29/minute/blob/master/src/Assets/minuteLogoDarkMode.png?raw=true",
      handler: function (response) {
        const orderData = {
          _id: uuid(),
          orderProducts: [...productState?.cart],
          amount: totalAmt,
          deliveryAddress: orderAddress,
          paymentId: response.razorpay_payment_id,
        };

        setOrder({ ...orderData });
        setOrderPlace(true);
        clearCart(productDispatch, productState?.cart, encodedToken);
        productDispatch({ type: "setCartReset" });
        orderDispatch({ type: "setOrderReset" });
        toast.success(`Payment of Rs. ${totalAmt} Successful!`);
      },
      prefill: {
        name: `${firstName} ${lastName}`,
        email: `${email}`,
        contact: `${orderState?.orderAddress?.mobile}`,
      },
      theme: {
        color: "#0f172a",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const placeOrderHandler = () => {
    displayRazorpay();
  };

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
        onClick={() => placeOrderHandler()}
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
