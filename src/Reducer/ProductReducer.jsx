const ProductReducer = (state, action) => {
  switch (action.type) {
    case "setProducts":
      return { ...state, products: action.payload };
    case "setCart":
      return { ...state, cart: action.payload };
    case "setWishlist":
      return { ...state, wishlist: action.payload };
    case "setCategories":
      return { ...state, categories: action.payload };
    case "setCartReset":
      return { ...state, cart: [] };
    default:
      return state;
  }
};
export { ProductReducer };
