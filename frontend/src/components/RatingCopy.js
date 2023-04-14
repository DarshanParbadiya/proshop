import React from "react";
import { FaStar, FaStarHalf, FaCartPlus } from "react-icons/fa";

const RatingCopy = ({ rating, numReviews }) => {
  const star = (numReviews) => {
    while (rating > 0) {
      rating--;
      return <FaStar />;
    }
    if (rating === 0.5) {
      return <FaStar />;
    }
  };
  return <div className="flex items-center space-x-4">{star()}</div>;
};

export default RatingCopy;
