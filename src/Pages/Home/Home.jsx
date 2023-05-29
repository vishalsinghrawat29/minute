import { NavLink } from "react-router-dom";
import headerWatch from "../../Assets/header-watch.jpg";
import "./HomeStyle.css";

const Home = () => {
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
            <button>Shop Now</button>
          </NavLink>
        </div>
      </header>
    </div>
  );
};
export { Home };
