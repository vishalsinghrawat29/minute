import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../Contexts/ProductContext";
import "./ProductViewStyle.css";
import {
  AiFillStar,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineTag,
} from "react-icons/ai";
import { BiCartAdd, BiCartDownload } from "react-icons/bi";
import { addProductToCart, isProductInCart } from "../../utils/cartUtils.jsx";
import {
  addProductToWishlist,
  isProductInWishlist,
} from "../../utils/wishlistUtils";
const ProductView = () => {
  const { productID } = useParams();
  const { productState, isLoading, productDispatch } =
    useContext(ProductContext);
  const [cartBtnDisabled, setCartBtnDisabled] = useState(false);
  const [wishlistBtnDisabled, setWishlistBtnDisabled] = useState(false);
  // const [singleProduct, setSingleProduct] = useState({});

  const singleProduct = productState.products?.find((product) => {
    return product.id === productID;
  });

  // useEffect(() => {
  //   const getSingleProduct = async () => {
  //     try {
  //       const res = await getSingleProductDetails(productID);
  //       setSingleProduct(res?.product);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getSingleProduct();
  // }, [getSingleProductDetails, productID]);

  console.log(singleProduct);

  const navigate = useNavigate();
  const isLogged = localStorage.getItem("token")?.length > 0;

  const addToCartHandler = (product) => {
    if (isLogged) {
      if (isProductInCart(productState?.cart, product?._id)) {
        navigate("/cart");
      } else {
        addProductToCart(product, productDispatch, setCartBtnDisabled);
      }
    } else {
      navigate("/login");
    }
  };

  const addToWishlistHandler = (product) => {
    if (isLogged) {
      if (isProductInWishlist(productState?.wishlist, product?._id)) {
        navigate("/wishlist");
      } else {
        addProductToWishlist(product, productDispatch, setWishlistBtnDisabled);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="single-product-container">
          <div className="single-product-img">
            <img src={singleProduct?.image} alt={singleProduct?.name} />
          </div>
          <div className="single-product-body">
            <h1>{singleProduct?.name}</h1>
            <div className="single-product-price-review">
              <p className="single-product-price">₹{singleProduct.price}</p>
              <p>
                <span className="line"></span>
              </p>
              <p className="single-product-review pc-center">
                <AiFillStar className="starIcon" />
                {singleProduct.customerReviews.avgValue}(
                {singleProduct.customerReviews.count} Reviews)
              </p>
            </div>
            <p>
              Brand: <span>{singleProduct?.brand}</span>
            </p>
            <p>
              Category: <span>{singleProduct?.categoryName}</span>
            </p>
            <div className="single-product-description">
              <p>Description:</p>
              <p>{singleProduct?.description}</p>
            </div>
            <hr className="single-product-body-line" />
            <div className="single-product-benfits">
              <p>
                <AiOutlineTag className="tag-icon" /> Fastest Delivery
              </p>
              <p>
                <AiOutlineTag className="tag-icon" /> Inclusive of All Taxes
              </p>
              <p>
                <AiOutlineTag className="tag-icon" /> Cash On Delivery Available
              </p>
            </div>

            <div className="single-product-btn">
              <button
                className={`single-product-cart-btn pc-center ${
                  cartBtnDisabled && "cart-disabled"
                }`}
                onClick={() => addToCartHandler(singleProduct)}
                disabled={cartBtnDisabled}
              >
                {isProductInCart(productState?.cart, singleProduct?._id) ? (
                  <p className="pc-center">
                    <BiCartDownload className="single-product-btn" /> Go To Cart
                  </p>
                ) : (
                  <p className="pc-center">
                    <BiCartAdd className="single-product-btn" />
                    Add To Cart
                  </p>
                )}
              </button>
              <button
                onClick={() => addToWishlistHandler(singleProduct)}
                className={` single-product-wishlist-btn pc-center ${
                  isProductInWishlist(
                    productState?.wishlist,
                    singleProduct?._id
                  )
                    ? "wishlist"
                    : ""
                } ${wishlistBtnDisabled && "wishlist-disabled"}`}
                disabled={wishlistBtnDisabled}
              >
                {isProductInWishlist(
                  productState?.wishlist,
                  singleProduct?._id
                ) ? (
                  <p className="pc-center">
                    <AiFillHeart className="single-product-btn" /> Go To
                    Wishlist
                  </p>
                ) : (
                  <p className="pc-center">
                    <AiOutlineHeart className="single-product-btn" />
                    Add To Wishlist
                  </p>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export { ProductView };
