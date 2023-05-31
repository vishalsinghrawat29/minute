import loaderGif from "../../Assets/Hourglass.gif";
import "./LoaderStyle.css";
const Loader = () => {
  return (
    <div className="loader-wrapper flex-senter">
      <img src={loaderGif} className="loader" alt="loading.." />
    </div>
  );
};
export { Loader };
