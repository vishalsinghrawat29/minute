import { useContext, useState } from "react";
import { ProductContext } from "../../Contexts/ProductContext";

import { CartCard } from "../../Component/CartCard/CartCard";
import { CartPrice } from "../../Component/CartPrice/CartPrice";
import { CouponModel } from "../../Component/CouponModel/CouponModel";
import "./CartStyle.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { productState } = useContext(ProductContext);
  const { cart } = productState;
  const [couponModel, setCouponModel] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {productState?.cart?.length === 0 ? (
        <div className="empty-cart">
          <h1>Your Cart is Empty!🙁</h1>
          <p>
            Don't worry, we have a stunning collection of watches waiting for
            you.
          </p>
          <button onClick={() => navigate("/products")}>Explore Watches</button>
        </div>
      ) : (
        <div className="cart-page-container">
          <h1 className="cart-heading">Cart ({cart?.length})</h1>
          <div className="cart-container">
            <div className="cart-card-container">
              {cart.map((product) => (
                <CartCard key={product?._id} product={product} />
              ))}
            </div>
            <div className="cart-price-container">
              <CartPrice setCouponModel={setCouponModel} />
            </div>
            {couponModel && <CouponModel setCouponModel={setCouponModel} />}
          </div>
        </div>
      )}
    </>
  );
};
export { Cart };
