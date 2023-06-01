import { MdOutlineDiscount } from "react-icons/md";
import { ProductContext } from "../../Contexts/ProductContext";
import { useContext } from "react";
const CartPrice = () => {
  const { productState } = useContext(ProductContext);
  const totalQunatity = productState?.cart.reduce(
    (acc, { qty }) => acc + qty,
    0
  );
  const totalPrice = productState?.cart.reduce(
    (acc, { price, qty }) => acc + qty * price,
    0
  );
  return (
    <div
      style={{
        width: "500px",
        border: "1px solid black",
        padding: "1rem",
        margin: "1rem 0",
      }}
    >
      <div>
        <p>
          <MdOutlineDiscount /> <span>Have a Coupen ?</span>
        </p>
        <button>Apply</button>
        <hr />
        <h1>Price Details</h1>
        <hr />
      </div>
      <div>
        <p>Price ({totalQunatity})</p>
        <p>₹ {totalPrice}</p>
      </div>
      <div>
        <p>Coupon Discount</p>
        <p></p>
      </div>
    </div>
  );
};
export { CartPrice };
