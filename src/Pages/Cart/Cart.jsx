import { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductContext";
import {
  handleProductQunatityInCart,
  removeProductFromCart,
} from "../../utils/cartUtils";

const Cart = () => {
  const { productState, productDispatch } = useContext(ProductContext);
  const { cart } = productState;
  return (
    <>
      {productState?.cart?.length === 0 ? (
        <h1>Empty Cart</h1>
      ) : (
        <div>
          <h1>Cart({cart?.length})</h1>
          <div>
            {cart.map(({ _id, name, qty }) => (
              <div
                key={_id}
                style={{
                  border: "1px solid black",
                  padding: "1rem",
                  margin: "1rem auto",
                  width: "500px",
                }}
              >
                <p>{name}</p>
                <p>Qunatity: {qty}</p>
                <button
                  onClick={() =>
                    handleProductQunatityInCart(
                      productDispatch,
                      _id,
                      "increment"
                    )
                  }
                >
                  Increase Qunatity
                </button>
                <button
                  onClick={() => removeProductFromCart(productDispatch, _id)}
                >
                  Remove From cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export { Cart };
