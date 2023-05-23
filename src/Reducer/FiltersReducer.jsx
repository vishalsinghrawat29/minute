const FiltersReducer = (state, action) => {
  switch (action.type) {
    case "setSearch":
      return { ...state, search: action.payload };
    case "setPriceRange":
      return { ...state, priceRange: action.payload };
    case "setCategoryFilter":
      return {
        ...state,
        categoryFilter: state?.categoryFilter?.includes(action.payload)
          ? state?.categoryFilter?.filter(
              (category) => category !== action.payload
            )
          : [...state?.categoryFilter, action.payload],
      };
    case "setRatingFilter":
      return {
        ...state,
        ratingFilter: action.payload,
      };
    case "setSortByPriceFilter":
      return {
        ...state,
        sortByPriceFilter: action.payload,
      };
    case "setClear":
      return {
        search: "",
        priceRange: 10000,
        categoryFilter: [],
        ratingFilter: "",
        sortByPriceFilter: "",
      };

    default:
      return state;
  }
};
export { FiltersReducer };
