import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Contexts/ProductContext";
import "./OrderSummaryStyle.css";

const OrderSummary = () => {
  const { order } = useContext(ProductContext);
  const { _id, orderProducts, amount, deliveryAddress, paymentId } = order;
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="order-summary-page">
      {paymentId ? (
        <div className="order-summary-container">
          <h1 className="order-summary-heading">Order Summary</h1>
          <div className="order-summary-box">
            <h3 className="order-summary-status">Order Confirmed</h3>
            <div className="order-summary-details">
              <p className="order-summary-row">
                <span>Order ID : </span>
                <span>{_id}</span>
              </p>
              <p className="order-summary-row">
                <span>Payement ID : </span>
                <span>{paymentId}</span>
              </p>
              <p className="order-summary-row">
                <span>Total Amount : </span>
                <span>₹ {amount}</span>
              </p>
              <div className="order-summary-address">
                <p>
                  <span>Order will be delivered to : </span>
                </p>
                <p>{deliveryAddress?.name}</p>
                <p>
                  {deliveryAddress?.street}, {deliveryAddress?.city},{" "}
                  {deliveryAddress?.state}
                </p>
                <p>
                  PinCode: {deliveryAddress?.zipCode},{" "}
                  {deliveryAddress?.country}
                </p>
                <p>Mobile No.: {deliveryAddress?.mobile}</p>
              </div>
            </div>
            <div className="order-summary-product-container">
              {orderProducts.map(({ image, name, _id, price, qty }) => (
                <div key={_id} className="order-summary-product">
                  <div className="order-summary-product-img">
                    <img src={image} alt={name} />
                  </div>
                  <div className="order-summary-product-info">
                    <p>{name}</p>
                    <p>Total Quantity : {qty}</p>
                    <p>Price : ₹ {price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="order-summary-empty">
          <h3>Your Order is Empty!☹️</h3>
          <p>Start shopping now to discover our amazing watches.</p>
          <button onClick={() => navigate("/products")}>Buy Watches</button>
        </div>
      )}
    </div>
  );
};
export { OrderSummary };
