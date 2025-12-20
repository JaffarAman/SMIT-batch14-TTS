import axios from "axios";
import { useEffect } from "react";
import { fetchProductApi } from "./store/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  // console.log("listing");

  const dispatch = useDispatch();
  const { allProduct, loading, error } = useSelector(
    (state) => state.productReducer
  );
  // console.log("loading", loading);
  // console.log("allProduct", allProduct);
  console.log("error", error);

  useEffect(() => {
    // fetchData();
    // dispatch(fetchProductApi({
    //   name : "saylani"
    // }));

    dispatch(fetchProductApi());
  }, []);

  // const fetchData = async () => {
  //   const res = await axios.get("https://fakestoreapi.com/products");
  //   console.log("api calling", res.data);
  // };

  return <div>{loading ? <h1>Loader...</h1> : <h1>Product listing</h1>}</div>;
};

export default App;
