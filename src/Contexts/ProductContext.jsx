import { createContext, useEffect, useReducer, useState } from "react";
import { ProductReducer } from "../Reducer/ProductReducer.jsx";
import { FiltersReducer } from "../Reducer/FiltersReducer.jsx";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const productInitialState = {
    products: [],
    cart: [],
    wishlist: [],
    categories: [],
  };

  const filtersInitialState = {
    search: "",
    priceRange: 10000,
    categoryFilter: [],
    ratingFilter: "",
    sortByPriceFilter: "",
  };

  const [productState, productDispatch] = useReducer(
    ProductReducer,
    productInitialState
  );
  const [isLoading, setIsLoading] = useState(true);
  const [filtersState, filtersDispatch] = useReducer(
    FiltersReducer,
    filtersInitialState
  );

  const getProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const resJson = await res.json();
      productDispatch({ type: "setProducts", payload: resJson?.products });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      const resJson = await res.json();
      productDispatch({ type: "setCategories", payload: resJson.categories });
    } catch (err) {
      console.log(err);
    }
  };

  const searchFilteredProducts =
    filtersState?.search?.length > 0
      ? productState?.products?.filter(({ name }) =>
          name.toLowerCase().includes(filtersState?.search.toLowerCase())
        )
      : productState?.products;

  const priceRangeFilteredProducts = searchFilteredProducts?.filter(
    ({ price }) => Number(price) <= Number(filtersState?.priceRange)
  );

  const categoryFilteredProducts =
    filtersState?.categoryFilter?.length > 0
      ? priceRangeFilteredProducts.filter(({ categoryName }) =>
          filtersState?.categoryFilter?.includes(categoryName)
        )
      : priceRangeFilteredProducts;

  const ratingFilteredProducts =
    filtersState?.ratingFilter?.length > 0
      ? categoryFilteredProducts.filter(
          ({ customerReviews: { avgValue } }) =>
            Number(avgValue) >= Number(filtersState?.ratingFilter)
        )
      : categoryFilteredProducts;

  const sortByPriceFilteredProducts =
    filtersState?.sortByPriceFilter?.length > 0
      ? (() => {
          switch (filtersState?.sortByPriceFilter) {
            case "asc":
              return [...ratingFilteredProducts].sort(
                (product1, product2) => product1.price - product2.price
              );
            case "desc":
              return [...ratingFilteredProducts].sort(
                (product1, product2) => product2.price - product1.price
              );
            case "reset":
              return ratingFilteredProducts;
            default:
              return ratingFilteredProducts;
          }
        })()
      : ratingFilteredProducts;

  const filteredProducts = sortByPriceFilteredProducts;

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productState,
        productDispatch,
        isLoading,
        filtersState,
        filtersDispatch,
        filteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
