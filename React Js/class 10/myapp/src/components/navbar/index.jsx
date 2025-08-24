import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <ul className={styles.container}>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

      <li>
        <Link to="/product">All product</Link>
      </li>
    </ul>
  );
};

export default Navbar;
