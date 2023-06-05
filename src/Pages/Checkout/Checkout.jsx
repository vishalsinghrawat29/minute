import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Contexts/ProductContext";
import { OrderAddress } from "../../Component/OrderAddress/OrderAddress";
import { CheckoutPrice } from "../../Component/CheckoutPrice/CheckoutPrice";
import { popper } from "../../utils/popper.jsx";
import "./CheckoutStyle.css";

const Checkout = () => {
  const [orderPlacedMsg, setOrderPlace] = useState(false);
  const navigate = useNavigate();
  const { productState } = useContext(ProductContext);

  const placedHandler = () => {
    popper();
    setTimeout(() => {
      navigate("/orderSummary");
    }, 1500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="checkout-page-container">
      {orderPlacedMsg ? (
        <h1 className="place-order-message">
          🥂 You order has successfully placed !{placedHandler()}
        </h1>
      ) : (
        <div className="checkout-container">
          <h1 className="checkout-heading">Checkout</h1>
          {productState?.cart?.length === 0 ? (
            <div className="empty-checkout">
              <h2>There are no Products in Cart!☹️</h2>
              <button onClick={() => navigate("/products")}>Shop Now</button>
            </div>
          ) : (
            <div className="checkout-box">
              <div>
                <OrderAddress />
              </div>
              <div>
                <CheckoutPrice setOrderPlace={setOrderPlace} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export { Checkout };
