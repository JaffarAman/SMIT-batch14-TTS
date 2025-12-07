import axios from "axios";
import React, { useEffect, useState } from "react";
import { addToCart, setProduct } from "../../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

const AddToCardPage = () => {
  const { addToCart } = useSelector((store) => store.productReducer);
  console.log("selector", addToCart);

  return (
    <div>
      <h1>Add To Card Page</h1>
    </div>
  );
};

export default AddToCardPage;
