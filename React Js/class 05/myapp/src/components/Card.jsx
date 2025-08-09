import "./style.css";

const CartItem = ({ title, desc, price }) => {
  console.log("title", title);

  return (
    <div className="cardContainer">
      <h1> TITLE:{title} </h1>
      <h1> DESC: {desc} </h1>
      <h1>Price: {price}$ </h1>
      <h1>Buy now </h1>
    </div>
  );
};

export default CartItem;
