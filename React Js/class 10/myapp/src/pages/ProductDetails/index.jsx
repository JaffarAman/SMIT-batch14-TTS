import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const params = useParams();
  console.log("params", params);

  const [singleProduct, setsingleProduct] = useState({});

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const fetchSingleProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      console.log("response", response.data);
      setsingleProduct(response.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <h1> ProductDetails : {params.id} ...</h1>

      <div style={{ border: "1px solid black" }}>
        <img src={singleProduct.image} width={300} height={200} />
        <h1>{singleProduct.title}</h1>
        <h1>PRICE: {singleProduct.price} </h1>
      </div>
    </div>
  );
};

export default ProductDetails;
