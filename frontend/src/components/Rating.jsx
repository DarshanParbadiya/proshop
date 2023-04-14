import React from "react";
import { FaStar, FaStarHalfAlt, FaCartPlus, FaGrinStars } from "react-icons/fa";

import { AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, numReviews }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        {rating >= 1 ? (
          <FaStar className=" inline-block " />
        ) : rating === 0.5 ? (
          <FaStarHalfAlt className=" inline-block " />
        ) : (
          <AiOutlineStar className="text-lg" />
        )}
        {rating >= 2 ? (
          <FaStar className=" inline-block " />
        ) : rating === 1.5 ? (
          <FaStarHalfAlt className=" inline-block " />
        ) : (
          <AiOutlineStar className="text-lg" />
        )}
        {rating >= 3 ? (
          <FaStar className=" inline-block " />
        ) : rating === 2.5 ? (
          <FaStarHalfAlt className=" inline-block " />
        ) : (
          <AiOutlineStar className="text-lg" />
        )}
        {rating >= 4 ? (
          <FaStar className=" inline-block " />
        ) : rating === 3.5 ? (
          <FaStarHalfAlt className=" inline-block " />
        ) : (
          <AiOutlineStar className="text-lg" />
        )}
        {rating >= 5 ? (
          <FaStar className=" inline-block " />
        ) : rating === 4.5 ? (
          <FaStarHalfAlt className=" inline-block " />
        ) : (
          <AiOutlineStar className="text-lg" />
        )}
      </div>

      <div>{numReviews} reviews</div>
    </div>
  );
};

export default Rating;
