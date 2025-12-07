import React from "react";
import styles from "./header.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { addToCart } = useSelector((store) => store.productReducer);
  console.log("addToCart", addToCart);
  return (
    <div className={styles.header}>
      <h1> Header: Product Page</h1>

      <div>
        <Link to="/add-to-cart">addtoCart : {addToCart.length}</Link>
      </div>
    </div>
  );
};

export default Header;
