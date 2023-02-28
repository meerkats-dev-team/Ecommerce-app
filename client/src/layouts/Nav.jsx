import { NavLink } from "react-router-dom";
import { Home } from "@mui/icons-material";
function Nav() {
  return (
    <nav className="pages-area">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <Home />
        Home
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Products
      </NavLink>
      <NavLink
        to="/about-us"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact-us"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact Us
      </NavLink>
    </nav>
  );
}

export default Nav;
