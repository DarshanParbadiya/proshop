import React from "react";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <>
      <div className=" shadow-xl card overflow-hidden border">
        <div>
          <img src={product.image} alt="" />
        </div>
        <div className="flex flex-col space-y-3 m-6">
          <div className="text-md font-bold">{product.name}</div>
          <div className="text-sm">
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </div>
          <div className="text-xl font-bold">${product.price}</div>
        </div>
      </div>
    </>
  );
};

export default Product;
