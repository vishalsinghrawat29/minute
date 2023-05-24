import { useContext } from "react";
import "./ProductCardStyle.css";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { ProductContext } from "../../Contexts/ProductContext";
import { addProductToCart, isProductInCart } from "../../utils/cartUtils.jsx";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ productsData }) => {
  const { productState, productDispatch } = useContext(ProductContext);
  console.log("productState", productState);

  const navigate = useNavigate();
  const isLogged = localStorage.getItem("token")?.length > 0;

  const addToCartHandler = (product) => {
    if (isLogged) {
      if (isProductInCart(productState?.cart, product?._id)) {
        navigate("/cart");
      } else {
        addProductToCart(product, productDispatch);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <h2 className="heading">Showing Products({productsData.length})</h2>
      <div className="product-container">
        {productsData.map((product) => (
          <div key={product._id} className="product-card">
            <p>{product._id}</p>
            <div className="row bestSeller-wishlist">
              <p style={{ padding: product.isBestSeller && "0.25rem" }}>
                {product.isBestSeller && "BEST SELLER"}
              </p>
              <button>
                <AiOutlineHeart />
              </button>
            </div>
            <img src={product.image} alt={product.name} width="250px" />
            <div className="product-body">
              <div className="row brand-review">
                <p>{product.brand}</p>
                <p className="row">
                  <AiFillStar className="starIcon" />
                  {product.customerReviews.avgValue}(
                  {product.customerReviews.count})
                </p>
              </div>
              <h3 className="product-name">
                {product.name.length > 50
                  ? product.name.substring(0, 50) + "..."
                  : product.name}
              </h3>
              <p className="product-price">MRP: ₹{product.price}</p>
              <button
                className="product-cart-btn"
                onClick={() => addToCartHandler(product)}
              >
                <BiCartAdd className="cardAddIcon" />
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export { ProductCard };
