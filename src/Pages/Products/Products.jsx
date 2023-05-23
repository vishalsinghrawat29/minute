import { useContext } from "react";
import { ProductCard } from "../../Component/ProductCard/ProductCard";
import { ProductContext } from "../../Contexts/ProductContext";
import { Sidebar } from "../../Component/Sidebar/Sidebar.jsx";
import "./ProductsStyle.css";

const Products = () => {
  const { isLoading, filteredProducts } = useContext(ProductContext);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="products-page">
          <aside className="display-filter">
            <Sidebar />
          </aside>
          <section className="display-product">
            <ProductCard productsData={filteredProducts} />
          </section>
        </div>
      )}
    </>
  );
};
export { Products };
