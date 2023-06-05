import { useContext, useEffect } from "react";
import { BsFilter } from "react-icons/bs";
import { ProductContext } from "../../Contexts/ProductContext";
import { AuthContext } from "../../Contexts/AuthContext";
import { ProductCard } from "../../Component/ProductCard/ProductCard";
import { Sidebar } from "../../Component/Sidebar/Sidebar.jsx";
import "./ProductsStyle.css";

const Products = () => {
  const {
    isLoading,
    filteredProducts,
    productState,
    showFilters,
    toggleShowFilters,
  } = useContext(ProductContext);
  const { setLoader } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isLoading) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [setLoader, isLoading]);

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <div className="products-page">
          <aside
            className={`display-filters ${
              showFilters ? "filters-visible" : ""
            }`}
          >
            <Sidebar />
          </aside>
          <section className="display-products-list">
            <div className="products-list-header">
              <div className="heading-container">
                <button onClick={toggleShowFilters}>
                  <BsFilter className="showFilters-btn" />
                </button>
                <h2 className="heading">
                  Showing All Products({filteredProducts.length})
                </h2>
              </div>
              {filteredProducts.length === 0 &&
                productState.products.length > 0 && (
                  <h1 className="empty-product-list">
                    Oops! Watches are currently out of stock in this category.
                  </h1>
                )}
            </div>
            <div className="products-list-container">
              {showFilters && <div className="filters-overlay"></div>}
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};
export { Products };
