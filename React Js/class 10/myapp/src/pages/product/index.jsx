import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      // console.log("response", response.data);
      setProducts(response.data);
    } catch (error) {
      console.log("error", error.messag);
    }
  };

  console.log("products", products);

  return (
    <div>
      <Navbar />
      <h1>All Products listing...</h1>

      {products.map((obj) => {
        const { title, price, image } = obj;
        return (
          <div key={obj.id} style={{ border: "1px solid black" }}>
            <img src={image} width={300} height={200} />
            <h1>
              <Link to={`/product/${obj.id}`}>{title}</Link>
            </h1>
            <h1>PRICE: {price} </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
