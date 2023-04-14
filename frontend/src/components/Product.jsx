import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <div className=" group shadow-xl card overflow-hidden border">
        <div>
          <Link to={`/product/${product._id}`}>
            <img src={product.image} alt="" />
          </Link>
        </div>
        <div className="flex flex-col space-y-3 m-6">
          <div className="text-md group-hover:underline font-bold">
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </div>
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
