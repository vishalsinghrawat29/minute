const ProductReducer = (state, action) => {
  switch (action.type) {
    case "setProducts":
      return { ...state, products: action.payload };
    case "setFilteredProducts":
      return { ...state, filteredProducts: action.payload };
    case "setCart":
      return { ...state, cart: action.payload };
    case "setWishlist":
      return { ...state, wishlist: action.payload };
    default:
      return state;
  }
};
export { ProductReducer };
