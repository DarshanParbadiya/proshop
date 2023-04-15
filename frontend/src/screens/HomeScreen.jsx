import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");
      const data = res.data;
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="text-2xl mb-6">Latest Products</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => {
          return <Product key={product._id} product={product} />;
          //   return <div>{product.name}</div>;
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
