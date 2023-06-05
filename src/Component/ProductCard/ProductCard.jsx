import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillStar, AiFillHeart } from "react-icons/ai";
import { BiCartAdd, BiCartDownload } from "react-icons/bi";
import { ProductContext } from "../../Contexts/ProductContext";
import { AuthContext } from "../../Contexts/AuthContext";
import { addProductToCart, isProductInCart } from "../../utils/cartUtils.jsx";
import {
  addProductToWishlist,
  isProductInWishlist,
  removeProductFromWishlist,
} from "../../utils/wishlistUtils";
import "./ProductCardStyle.css";

const ProductCard = ({ product }) => {
  const { productState, productDispatch } = useContext(ProductContext);
  const { authState } = useContext(AuthContext);
  const [cartBtnDisabled, setCartBtnDisabled] = useState(false);
  const [wishlistBtnDisabled, setWishlistBtnDisabled] = useState(false);

  const navigate = useNavigate();
  const isLogged = authState?.token?.length > 0;
  const encodedToken = authState?.token;

  const addToCartHandler = (product) => {
    if (isLogged) {
      if (isProductInCart(productState?.cart, product?._id)) {
        navigate("/cart");
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

  const addToWishlistHandler = (product) => {
    if (isLogged) {
      if (isProductInWishlist(productState?.wishlist, product?._id)) {
        removeProductFromWishlist(
          productDispatch,
          product?._id,
          encodedToken,
          setWishlistBtnDisabled
        );
      } else {
        addProductToWishlist(
          product,
          productDispatch,
          encodedToken,
          setWishlistBtnDisabled
        );
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="product-card">
        <div className="product-card-top">
          <p>{product.isBestSeller && "BEST SELLER"}</p>
          <button
            onClick={() => addToWishlistHandler(product)}
            className={`pc-center ${
              isProductInWishlist(productState?.wishlist, product?._id)
                ? "wishlist"
                : ""
            } ${wishlistBtnDisabled && "wishlist-disabled"}`}
            disabled={wishlistBtnDisabled}
          >
            {isProductInWishlist(productState?.wishlist, product?._id) ? (
              <AiFillHeart />
            ) : (
              <AiOutlineHeart />
            )}
          </button>
        </div>
        <div
          className="product-card-img"
          onClick={() => navigate(`/products/${product._id}`)}
        >
          <img src={product.image} alt={product.name} width="250px" />
        </div>
        <div className="product-body">
          <div className="product-brand-review">
            <p className="product-brand">{product.brand}</p>
            <p className="product-review pc-center">
              <AiFillStar className="starIcon" />
              {product.customerReviews.avgValue}({product.customerReviews.count}
              )
            </p>
          </div>
          <h3 className="product-name">{product.name}</h3>
          {/* <p>{product._id}</p> */}
          <p className="product-price">MRP: ₹{product.price}</p>
          <button
            className={`product-cart-btn pc-center ${
              cartBtnDisabled && "cart-disabled"
            }`}
            onClick={() => addToCartHandler(product)}
            disabled={cartBtnDisabled}
          >
            {isProductInCart(productState?.cart, product?._id) ? (
              <p className="pc-center">
                <BiCartDownload className="cartIcon" /> Go To Cart
              </p>
            ) : (
              <p className="pc-center">
                <BiCartAdd className="cartIcon" />
                Add To Cart
              </p>
            )}
          </button>
        </div>
      </div>
    </>
  );
};
export { ProductCard };
