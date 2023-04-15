import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { FaBackward } from "react-icons/fa";
import axios from "axios";

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const prod = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${prod.id}`);
      setProduct(data);
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <div>
        {/* back button */}
        <Link className="text-md font-semibold " to={"/"}>
          <div className="flex items-center inline-block pl-6 space-x-2">
            {/* <FaBackward className="inline-block" /> */}
            <div className="text-lg">Go back</div>
          </div>
        </Link>
        {/* main container */}
        <div className="flex flex-col md:flex-row mt-5 shadow-2xl p-8 rounded-lg space-x-6">
          <div className="w-full md: w-1/2  flex justify-center items-start">
            <img className="w-[450px] rounded-md" src={product.image} alt="" />
          </div>

          {/* right side of product  */}
          <div className="w-full md: w-1/2 flex flex-col space-y-3">
            <div className="border-b pb-5">
              <div className="text-3xl mb-2">{product.name}</div>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </div>

            <div className="text-4xl ">${product.price}</div>
            <div className="text-md border-t pt-4">{product.description}</div>

            <div>
              {product.countInStock > 0 ? (
                <div className="flex items-center space-x-3 hover:animate-pulse ">
                  <div className=" bg-green-500 rounded-full w-3 h-3"></div>
                  <div>Item is in stock</div>
                </div>
              ) : (
                <div className="flex items-center space-x-3 hover:animate-pulse ">
                  <div className=" bg-red-500 rounded-full w-3 h-3"></div>
                  <div>Item not in stock</div>
                </div>
              )}
            </div>

            <div className="flex space-x-9 pt-3 pb-3">
              <button className="btn text-white bg-lime-600">
                Add to cart
              </button>
              <button className="btn text-white bg-indigo-500">Buy now</button>
            </div>

            {/* product description lower part */}
            <div className="border-t pt-4">
              {/* brand: 'Apple',
  //   category: 'Electronics',
  //   price: 89.99,
  //   countInStock: 10, */}
              <div className="border rounded-md inline-block ">
                <div className="text-lg text-center">Description</div>
                <table className="table shadow-xl  table-zebra">
                  <tbody>
                    <tr>
                      <td>brand</td>
                      <td>{product.brand}</td>
                    </tr>
                    <tr>
                      <td>category</td>
                      <td>{product.category}</td>
                    </tr>
                    <tr>
                      <td>price</td>
                      <td>{product.price}</td>
                    </tr>
                    <tr>
                      <td>stock</td>
                      <td>{product.countInStock}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
