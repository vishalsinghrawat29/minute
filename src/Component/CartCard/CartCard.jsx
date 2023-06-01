import { useContext, useState } from "react";
import { ProductContext } from "../../Contexts/ProductContext";
import {
  handleProductQunatityInCart,
  removeProductFromCart,
} from "../../utils/cartUtils";
import { useNavigate } from "react-router-dom";
import {
  addProductToWishlist,
  isProductInWishlist,
} from "../../utils/wishlistUtils";

const CartCard = ({ product }) => {
  const { productState, productDispatch } = useContext(ProductContext);
  const { _id, name, qty, price } = product;

  const navigate = useNavigate();
  const isLogged = localStorage.getItem("token")?.length > 0;

  const [isRmvFromCartBtnDisabled, setRmvFromCartBtnDisabled] = useState(false);
  const [isAddToWishlistBtnDisabled, setAddToWishlistBtnDisabled] =
    useState(false);
  const [isIncreaseQtyBtnDisabled, setIncreaseQtyBtnDisabled] = useState(false);
  const [isDecreaseQtyBtnDisabled, setDecreaseQtyBtnDisabled] = useState(false);

  const addToWishlistHandler = (product) => {
    if (isLogged) {
      if (isProductInWishlist(productState?.wishlist, product?._id)) {
        navigate("/wishlist");
      } else {
        addProductToWishlist(
          product,
          productDispatch,
          setAddToWishlistBtnDisabled
        );
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
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
        <p>Price: {price}</p>
        <button
          onClick={() =>
            handleProductQunatityInCart(
              productDispatch,
              _id,
              "increment",
              setIncreaseQtyBtnDisabled
            )
          }
          disabled={isIncreaseQtyBtnDisabled}
        >
          Increase Qunatity
        </button>
        <button
          onClick={() =>
            handleProductQunatityInCart(
              productDispatch,
              _id,
              "decrement",
              setDecreaseQtyBtnDisabled
            )
          }
          disabled={isDecreaseQtyBtnDisabled || qty <= 1}
        >
          Decrease Qunatity
        </button>
        <button
          onClick={() =>
            removeProductFromCart(
              productDispatch,
              _id,
              setRmvFromCartBtnDisabled
            )
          }
          disabled={isRmvFromCartBtnDisabled}
        >
          Remove From cart
        </button>
        <button
          onClick={() => addToWishlistHandler(product)}
          disabled={isAddToWishlistBtnDisabled}
        >
          {isProductInWishlist(productState?.wishlist, product?._id) ? (
            <p>Go To Wishlist</p>
          ) : (
            <p>Add To Wishlist</p>
          )}
        </button>
      </div>
    </>
  );
};
export { CartCard };
