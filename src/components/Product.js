import React from "react";

const Product = (props) => {
  return (
    <>
      <div className="container flex-sb">
        <div className="product-item">
          <div className="free-shipping">Free Shipping</div>
          <img src={props.sku} />
          <div className="itemDetail">
            <p>{props.title}</p>
            <p>{props.description}</p>
            <h3>{props.currencyFormat + props.price}</h3>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
