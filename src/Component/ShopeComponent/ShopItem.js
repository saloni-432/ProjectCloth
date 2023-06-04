import React from "react";

function ShopItem({ imageUrl, name, price }) {
  return (
    <>
      <div>
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="eachItemProduct"
        >
          <button className="AddToCart">ADD TO CART</button>
        </div>
        <div className="ProductDescription">
          <div>{name}</div>

          <div>{`₹${price}00`}</div>
        </div>
      </div>
    </>
  );
}

export default ShopItem;
