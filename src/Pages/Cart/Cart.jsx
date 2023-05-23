import { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductContext";

const Cart = () => {
  const { productState } = useContext(ProductContext);
  const { cart } = productState;
  return (
    <>
      {productState?.cart?.length > 0 ? (
        <h1>Empty Cart</h1>
      ) : (
        <div>
          <h1>Cart({cart.length})</h1>
          <p></p>
        </div>
      )}
    </>
  );
};
export { Cart };
