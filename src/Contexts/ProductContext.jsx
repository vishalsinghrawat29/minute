import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { ProductReducer } from "../Reducer/ProductReducer.jsx";
import { FiltersReducer } from "../Reducer/FiltersReducer.jsx";
import { getCartProducts } from "../utils/cartUtils.jsx";
import { AuthContext } from "./AuthContext.jsx";
import { getWishlistProduct } from "../utils/wishlistUtils.jsx";
import { OrderReducer, intialOrderState } from "../Reducer/OrderReducer.jsx";

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
  const { authState, setLoader } = useContext(AuthContext);

  const encodedToken = authState?.token;

  const [productState, productDispatch] = useReducer(
    ProductReducer,
    productInitialState
  );
  const [isLoading, setIsLoading] = useState(true);
  const [filtersState, filtersDispatch] = useReducer(
    FiltersReducer,
    filtersInitialState
  );
  const [couponValue, setCoupenValue] = useState({ couponName: "", value: 0 });
  const [isProfileTab, setIsProfileTab] = useState(true);
  const [orderState, orderDispatch] = useReducer(
    OrderReducer,
    intialOrderState
  );
  const [order, setOrder] = useState({});

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

  const getSingleProductDetails = async (productID) => {
    try {
      const res = await fetch(`/api/products/${productID}`);
      const resJson = await res.json();
      if (res?.status === 200) {
        return resJson;
      }
    } catch (err) {
      console.log(err);
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

  const [showFilters, setShowFilters] = useState(false);
  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    setLoader(true);
    const setCartAndWishlistProduct = async () => {
      try {
        const cartResponse = await getCartProducts(encodedToken);
        const wishlistResponse = await getWishlistProduct(encodedToken);
        if (cartResponse && cartResponse.status === 200) {
          const cartJSonResponse = await cartResponse.json();
          productDispatch({ type: "setCart", payload: cartJSonResponse?.cart });
        }
        if (wishlistResponse && wishlistResponse.status === 200) {
          const wishlistJSONResponse = await wishlistResponse.json();
          productDispatch({
            type: "setWishlist",
            payload: wishlistJSONResponse?.wishlist,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    const clearCartAndWishlist = () => {
      productDispatch({ type: "setCart", payload: [] });
      productDispatch({ type: "setWishlist", payload: [] });
    };

    getProducts();
    getCategories();
    !encodedToken && clearCartAndWishlist();
    encodedToken && setCartAndWishlistProduct();
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, [productDispatch, encodedToken, setLoader]);

  return (
    <ProductContext.Provider
      value={{
        productState,
        productDispatch,
        isLoading,
        filtersState,
        filtersDispatch,
        filteredProducts,
        showFilters,
        toggleShowFilters,
        getSingleProductDetails,
        couponValue,
        setCoupenValue,
        isProfileTab,
        setIsProfileTab,
        orderState,
        orderDispatch,
        order,
        setOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
