import React from "react";
import { FaStar, FaStarHalfAlt, FaCartPlus, FaGrinStars } from "react-icons/fa";

import { AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, numReviews }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        {rating >= 1 ? (
          <FaStar className=" inline-block text-amber-400" />
        ) : rating === 0.5 ? (
          <FaStarHalfAlt className=" inline-block text-amber-400" />
        ) : (
          <AiOutlineStar className="text-lg text-amber-400" />
        )}
        {rating >= 2 ? (
          <FaStar className=" inline-block text-amber-400" />
        ) : rating === 1.5 ? (
          <FaStarHalfAlt className=" inline-block text-amber-400" />
        ) : (
          <AiOutlineStar className="text-lg text-amber-400" />
        )}
        {rating >= 3 ? (
          <FaStar className=" inline-block text-amber-400" />
        ) : rating === 2.5 ? (
          <FaStarHalfAlt className=" inline-block text-amber-400" />
        ) : (
          <AiOutlineStar className="text-lg text-amber-400" />
        )}
        {rating >= 4 ? (
          <FaStar className=" inline-block text-amber-400" />
        ) : rating === 3.5 ? (
          <FaStarHalfAlt className=" inline-block text-amber-400" />
        ) : (
          <AiOutlineStar className="text-lg text-amber-400" />
        )}
        {rating >= 5 ? (
          <FaStar className=" inline-block text-amber-400" />
        ) : rating === 4.5 ? (
          <FaStarHalfAlt className=" inline-block text-amber-400" />
        ) : (
          <AiOutlineStar className="text-lg text-amber-400" />
        )}
      </div>

      <div>{numReviews} reviews</div>
    </div>
  );
};

export default Rating;
