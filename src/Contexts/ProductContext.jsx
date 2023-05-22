import { createContext, useEffect, useReducer, useState } from "react";
import { ProductReducer } from "../Reducer/ProductReducer.jsx";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    filteredProducts: [],
    cart: [],
    wishlist: [],
  };

  const [productState, productDispatch] = useReducer(
    ProductReducer,
    initialState
  );
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ productState, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};
