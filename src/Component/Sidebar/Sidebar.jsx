import { useContext } from "react";
import "./SidebarStyle.css";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { ProductContext } from "../../Contexts/ProductContext.jsx";

const Sidebar = () => {
  const { productState, filtersState, filtersDispatch, toggleShowFilters } =
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
        <button onClick={toggleShowFilters}>
          <AiOutlineClose className="filters-close-btn" />
        </button>
        <button
          onClick={() => filtersDispatch({ type: "setClear", payload: "" })}
        >
          Clear
        </button>
      </div>
      <div className="filter-box">
        <h3>Price</h3>
        <div className="row price-range">
          <p>₹ 100</p>
          <p>₹ 10,000</p>
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
          <div key={_id} className="category-box">
            <input
              type="checkbox"
              id={categoryName}
              name={categoryName}
              value={categoryName}
              checked={filtersState?.categoryFilter?.includes(categoryName)}
              onChange={(e) =>
                filtersDispatch({
                  type: "setCategoryFilter",
                  payload: e.target.value,
                })
              }
            />
            <label htmlFor={categoryName}>{categoryName}</label>
          </div>
        ))}
      </div>
      <div className="filter-box ">
        <h3>Rating</h3>
        {ratingArr?.map((ratingValue) => (
          <div key={ratingValue} className="rating-box">
            <input
              type="radio"
              id={ratingValue}
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
            <label htmlFor={ratingValue}>
              {ratingValue} <AiFillStar className="star" /> and Above
            </label>
          </div>
        ))}
      </div>
      <div className="filter-box ">
        <h3>Sort by Price</h3>
        {sortByPrice?.map(({ label, value }) => (
          <div key={value} className="price-box">
            <input
              type="radio"
              id={label}
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
            <label htmlFor={label}>{label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
export { Sidebar };
