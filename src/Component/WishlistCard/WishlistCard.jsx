import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { ProductContext } from "../../Contexts/ProductContext";
import { AuthContext } from "../../Contexts/AuthContext";
import {
  isProductInWishlist,
  removeProductFromWishlist,
} from "../../utils/wishlistUtils";
import {
  addProductToCart,
  isProductInCart,
  handleProductQunatityInCart,
} from "../../utils/cartUtils";
import "./WishlistCardStyle.css";

const WishlistCard = ({ product }) => {
  const { productState, productDispatch } = useContext(ProductContext);
  const { authState } = useContext(AuthContext);

  const [cartBtnDisabled, setCartBtnDisabled] = useState(false);
  const [wishlistBtnDisabled, setWishlistBtnDisabled] = useState(false);
  const navigate = useNavigate();

  const isLogged = authState?.token?.length > 0;
  const encodedToken = authState?.token;

  const removeFromWishlistHandler = (product) => {
    if (isLogged) {
      if (isProductInWishlist(productState?.wishlist, product?._id)) {
        removeProductFromWishlist(
          productDispatch,
          product?._id,
          encodedToken,
          setWishlistBtnDisabled
        );
      }
    } else {
      navigate("/login");
    }
  };

  const addToCartHandler = (product) => {
    if (isLogged) {
      if (isProductInCart(productState?.cart, product?._id)) {
        handleProductQunatityInCart(
          productDispatch,
          product?._id,
          "increment",
          encodedToken,
          setCartBtnDisabled
        );
      } else {
        addProductToCart(
          product,
          productDispatch,
          encodedToken,
          setCartBtnDisabled
        );
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div key={product._id} className="wishlist-product-card ">
        <div
          className="wishlist-product-img"
          onClick={() => navigate(`/products/${product._id}`)}
        >
          {product?.isBestSeller && (
            <p className="wishlist-product-best-seller">Best Seller</p>
          )}
          <img src={product?.image} alt={product?.name} />
        </div>
        <div className="wishlist-product-body">
          <div className="wishlist-product-brand-review">
            <p className="wishlist-product-brand">{product.brand}</p>
            <p className="wishlist-product-review pc-center">
              <AiFillStar className="starIcon" />
              {product.customerReviews.avgValue}({product.customerReviews.count}
              )
            </p>
          </div>
          <h1 className="wishlist-product-name">{product.name}</h1>
          <p className="wishlist-product-price">MRP: ₹{product.price}</p>

          <button
            className={`wishlist-product-remove-btn pc-center ${
              wishlistBtnDisabled && "wishlist-product-remove-disabled"
            }`}
            onClick={() => removeFromWishlistHandler(product)}
            disabled={wishlistBtnDisabled}
          >
            <p className="pc-center">
              <AiFillHeart className="wishlist-product-icon" />
              Remove From Wishlist
            </p>
          </button>

          <button
            className={`wishlist-product-cart-btn pc-center ${
              cartBtnDisabled && "wishlist-cart-disabled"
            }`}
            onClick={() => addToCartHandler(product)}
            disabled={cartBtnDisabled}
          >
            <p className="pc-center">
              <BiCartAdd className="wishlist-cart-icon" />
              Add To Cart
            </p>
          </button>
        </div>
      </div>
    </>
  );
};
export { WishlistCard };
