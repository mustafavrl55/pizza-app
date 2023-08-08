import React, { useState } from "react";

const Product = ({ item }) => {
  const [isAdded, setIsAdded] = useState(item.soldOut);
  const [isDark, setIsDark] = useState(false);

 

  const handleButton = () => {
    setIsAdded(true);
    
    setIsDark(!isDark);
  };

  return (
    <div className="product " >
      <img className="product-img" src={item.photoName} alt="" />
      <div className="product-content">
        <div className="product-title">{item.name} </div>
        <div className="product-text">{item.ingredients}</div>
        <div className="product-price">
          <span> $ </span>
          <span className="price">{item.price} </span>
        </div>
        <button className="product-button " onClick={() => handleButton()}>
          {isAdded ? "Soult Out" : "Add to Cart"}
          
        </button>
      </div>
    </div>
  );
};

export default Product;

