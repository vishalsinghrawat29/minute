import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <h1>Signup Page</h1>
      <NavLink to="/login">Already Have an Account</NavLink>
    </>
  );
};
export { Signup };
