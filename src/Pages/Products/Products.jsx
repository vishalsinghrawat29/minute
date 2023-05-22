import { useContext } from "react";
import { ProductCard } from "../../Component/ProductCard/ProductCard";
import { ProductContext } from "../../Contexts/ProductContext";

const Products = () => {
  const {
    productState: { products },
    isLoading,
  } = useContext(ProductContext);
  return (
    <>
      <h1>Products Page</h1>
      {isLoading ? <p>Loding...</p> : <ProductCard productsData={products} />}
    </>
  );
};
export { Products };
