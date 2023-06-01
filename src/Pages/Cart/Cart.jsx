import { useContext, useState } from "react";
import { ProductContext } from "../../Contexts/ProductContext";

import { CartCard } from "../../Component/CartCard/CartCard";
import { CartPrice } from "../../Component/CartPrice/CartPrice";
import { CouponModel } from "../../Component/CouponModel/CouponModel";

const Cart = () => {
  const { productState } = useContext(ProductContext);
  const { cart } = productState;
  const [couponModel, setCouonModel] = useState(false);
  return (
    <>
      {productState?.cart?.length === 0 ? (
        <h1 style={{ marginTop: "4rem" }}>Empty Cart</h1>
      ) : (
        <div style={{ marginTop: "4rem" }}>
          <h1>Cart({cart?.length})</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              {cart.map((product) => (
                <CartCard key={product?._id} product={product} />
              ))}
            </div>
            <div>
              <CartPrice setCouonModel={setCouonModel} />
            </div>
            {couponModel && <CouponModel setCouonModel={setCouonModel} />}
          </div>
        </div>
      )}
    </>
  );
};
export { Cart };
