import { ThreeDots } from "react-loader-spinner";
import "./LoaderStyle.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#38b5ec"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};
export { Loader };
