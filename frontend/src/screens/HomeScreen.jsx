import React from "react";
import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <div>
      <div className="text-2xl mb-6">Latest Products</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => {
          return <Product key={product._id} product={product} />;
          //   return <div>{product.name}</div>;
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
