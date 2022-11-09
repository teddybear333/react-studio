// Create a component that displays a single bakery item

import React from "react";

const BakeryItem = ({ name, description, picture, price, addToCart }) => (
  <div className="BakeryItem">
    <div className="Image">
      <img src={picture} alt={name} />
    </div>
    <br></br>
    <div className="Name">{name}</div>
    <br></br>
    <div className="Description">{description}</div>
    <br></br>
    <div className="Price">{` $${price}`}</div>
    <br></br>
    <div className="Bottom">
      <button className="Button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  </div>
);
export default BakeryItem;
