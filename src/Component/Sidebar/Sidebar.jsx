import { useContext } from "react";
import "./SidebarStyle.css";
import { ProductContext } from "../../Contexts/ProductContext.jsx";
import { AiFillStar } from "react-icons/ai";
const Sidebar = () => {
  const { productState, filtersState, filtersDispatch } =
    useContext(ProductContext);
  const ratingArr = [4, 3, 2, 1];
  const sortByPrice = [
    { label: "High To Low", value: "desc" },
    { label: "Low To High", value: "asc" },
    { label: "Reset", value: "reset" },
  ];
  return (
    <div className="filters-container">
      <div className="filters-head">
        <p>Filters</p>
        <button
          onClick={() => filtersDispatch({ type: "setClear", payload: "" })}
        >
          Clear
        </button>
      </div>
      <div className="filter-box">
        <h3>Price</h3>
        <div className="row price-range">
          <p>100</p>
          <p>10000</p>
        </div>
        <input
          type="range"
          className="price-slider"
          min={100}
          max={10000}
          value={filtersState?.priceRange}
          onChange={(e) =>
            filtersDispatch({
              type: "setPriceRange",
              payload: e.target.value,
            })
          }
        />
      </div>
      <div className="filter-box ">
        <h3>Category</h3>
        {productState?.categories?.map(({ _id, categoryName }) => (
          <label key={_id} style={{ display: "block" }}>
            <input
              type="checkbox"
              name={categoryName}
              value={categoryName}
              checked={filtersState.categoryFilter.includes(categoryName)}
              onChange={(e) =>
                filtersDispatch({
                  type: "setCategoryFilter",
                  payload: e.target.value,
                })
              }
            />{" "}
            {categoryName}
          </label>
        ))}
      </div>
      <div className="filter-box ">
        <h3>Rating</h3>
        {ratingArr?.map((ratingValue) => (
          <label key={ratingValue} style={{ display: "block" }}>
            <input
              type="radio"
              value={ratingValue}
              name="ratingFilter"
              checked={Number(filtersState.ratingFilter) === ratingValue}
              onChange={(e) =>
                filtersDispatch({
                  type: "setRatingFilter",
                  payload: e.target.value,
                })
              }
            />
            {ratingValue} <AiFillStar /> and Above
          </label>
        ))}
      </div>
      <div className="filter-box ">
        <h3>Sort by Price</h3>
        {sortByPrice?.map(({ label, value }) => (
          <label key={value} style={{ display: "block" }}>
            <input
              type="radio"
              value={value}
              name="sortByPrice"
              checked={filtersState?.sortByPriceFilter === value}
              onChange={(e) =>
                filtersDispatch({
                  type: "setSortByPriceFilter",
                  payload: e.target.value,
                })
              }
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
};
export { Sidebar };
