import axios from "axios";
import React, { useEffect, useState } from "react";
import { addToCart, setProduct } from "../../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductListing = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productReducer);
  console.log("products", products);

  const fetchData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    console.log("response", response.data);
    
    // dispatch
    dispatch(setProduct(response.data));
  };

  return (
    <div>
      <h1>ProductListing</h1>

      {products.map((product) => {
        return (
          <div className="productcard">
            <img src={product.image} />
            <h1>{product.title}</h1>
            <h2> {product.price} </h2>
            <button
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              ADD TO CART
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListing;
