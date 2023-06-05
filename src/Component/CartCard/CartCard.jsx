import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Contexts/ProductContext";
import { AuthContext } from "../../Contexts/AuthContext";
import {
  handleProductQunatityInCart,
  removeProductFromCart,
} from "../../utils/cartUtils";
import {
  addProductToWishlist,
  isProductInWishlist,
} from "../../utils/wishlistUtils";
import "./CartCardStyle.css";

const CartCard = ({ product }) => {
  const { productState, productDispatch } = useContext(ProductContext);
  const { authState } = useContext(AuthContext);
  const { _id, name, image, qty, price } = product;

  const navigate = useNavigate();
  const isLogged = authState?.token?.length > 0;
  const encodedToken = authState?.token;

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
          encodedToken,
          setAddToWishlistBtnDisabled
        );
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="cart-card">
        <div
          className="card-product-img"
          onClick={() => navigate(`/products/${_id}`)}
        >
          <img src={image} alt={name} />
        </div>
        <div className="cart-product-body">
          <p className="cart-product-name">{name}</p>
          <p className="cart-product-price">₹ {price}</p>
          <div className="cart-product-qunatity">
            <button
              className={
                isDecreaseQtyBtnDisabled || qty <= 1 ? "cart-qty-diabled" : ""
              }
              onClick={() =>
                handleProductQunatityInCart(
                  productDispatch,
                  _id,
                  "decrement",
                  encodedToken,
                  setDecreaseQtyBtnDisabled
                )
              }
              disabled={isDecreaseQtyBtnDisabled || qty <= 1}
            >
              -
            </button>
            <p>{qty}</p>
            <button
              className={isIncreaseQtyBtnDisabled ? "cart-qty-diabled" : ""}
              onClick={() =>
                handleProductQunatityInCart(
                  productDispatch,
                  _id,
                  "increment",
                  encodedToken,
                  setIncreaseQtyBtnDisabled
                )
              }
              disabled={isIncreaseQtyBtnDisabled}
            >
              +
            </button>
          </div>
          <div className="cart-product-btn-container">
            <button
              className={
                isRmvFromCartBtnDisabled ? "cart-product-btn-disbaled" : ""
              }
              onClick={() =>
                removeProductFromCart(
                  productDispatch,
                  _id,
                  encodedToken,
                  setRmvFromCartBtnDisabled
                )
              }
              disabled={isRmvFromCartBtnDisabled}
            >
              Remove From cart
            </button>
            <button
              className={
                isAddToWishlistBtnDisabled ? "cart-product-btn-disbaled" : ""
              }
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
        </div>
      </div>
    </>
  );
};
export { CartCard };
