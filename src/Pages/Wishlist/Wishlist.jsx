import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Contexts/ProductContext";
import { WishlistCard } from "../../Component/WishlistCard/WishlistCard";
import "./WishlistStyle.css";

const Wishlist = () => {
  const { productState } = useContext(ProductContext);
  const { wishlist } = productState;
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {wishlist?.length === 0 ? (
        <div className="empty-wishlist">
          <h1>Your Wishlist is Empty!🙁</h1>
          <p>Start exploring Watches and add your favourites to Wishlist.</p>
          <button onClick={() => navigate("/products")}>Explore Watches</button>
        </div>
      ) : (
        <div className="wishlist-container">
          <h1 className="wishlist-heading">Wishlist ({wishlist?.length})</h1>
          <div className="wishlist-card-container">
            {wishlist.map((product) => (
              <WishlistCard key={product?._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export { Wishlist };
