import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BsArrowRight, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import headerWatch from "../../Assets/header-watch.jpg";
import { ProductContext } from "../../Contexts/ProductContext";
import "./HomeStyle.css";

const Home = () => {
  const { productState, filtersDispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <div className="header-img">
          <img src={headerWatch} alt="watch" />
        </div>
        <div className="header-body">
          <h1>Stay in the moment</h1>
          <p>
            Shop our wide selection of watches today and find the perfect one
            for you.
          </p>
          <NavLink to="/products">
            <button
              onClick={() => filtersDispatch({ type: "setClear", payload: "" })}
            >
              Shop Now
            </button>
          </NavLink>
        </div>
      </header>
      <section className="category-section">
        <div className="category-head">
          <h1>Category</h1>
          <p>Discover more. Good things are waiting for you</p>
        </div>
        <div className="category-container">
          {productState.categories.map(
            ({ _id, image, categoryName, description }) => (
              <div
                key={_id}
                className="category-card"
                onClick={() => {
                  filtersDispatch({ type: "setClear", payload: "" });
                  filtersDispatch({
                    type: "setCategoryFilter",
                    payload: categoryName,
                  });
                  navigate("/products");
                }}
              >
                <div className="category-image">
                  <img src={image} alt={categoryName} />
                </div>
                <div className="category-body">
                  <h1>{categoryName}</h1>
                  <p>{description}</p>
                  <button>
                    see Collection <BsArrowRight />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <p className="footer-head">
            &#169; 2023 Minute. All Rights Reserved.
          </p>
          <div className="footer-policy">
            <span>Terms & Condition</span>
            <span>Shipping Policy</span>
            <span>Cancellation Policy</span>
            <span>Privacy Policy</span>
          </div>
          <p className="footer-creator">
            Developed by{" "}
            <a
              href="https://vishalsinghrawat.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Vishal Singh Rawat
            </a>
          </p>
          <div className="footer-url" rel="noopener">
            <a
              href="https://github.com/vishalsinghrawat29/minute"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>

            <a
              href="https://twitter.com/vsrawat2906"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/vishalsinghrawat/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export { Home };
