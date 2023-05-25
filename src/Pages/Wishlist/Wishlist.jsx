import { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductContext";
import { removeProductFromWishlist } from "../../utils/wishlistUtils";
import { addProductToCart, isProductInCart } from "../../utils/cartUtils";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { productState, productDispatch } = useContext(ProductContext);
  const { wishlist } = productState;
  const navigate = useNavigate();
  return (
    <>
      {wishlist?.length === 0 ? (
        <p>Empty Wishlist</p>
      ) : (
        <div>
          <h1>Wishlist Page({wishlist?.length})</h1>
          <div>
            {wishlist.map((product) => (
              <div
                key={product._id}
                style={{
                  border: "1px solid black",
                  padding: "1rem",
                  margin: "1rem auto",
                  width: "500px",
                }}
              >
                <p>{product.name}</p>
                <button
                  onClick={() =>
                    removeProductFromWishlist(productDispatch, product._id)
                  }
                >
                  Remove From Wishlist
                </button>
                <button
                  onClick={() => {
                    if (isProductInCart(productState?.cart, product?._id)) {
                      navigate("/cart");
                    } else {
                      addProductToCart(product, productDispatch);
                    }
                  }}
                >
                  {isProductInCart(productState?.cart, product?._id)
                    ? "Go To Cart"
                    : "Add To cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export { Wishlist };
