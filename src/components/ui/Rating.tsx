"use client";

import React from "react";
import { Star, StarHalf } from "lucide-react";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((value) => {
        if (value <= Math.floor(rating)) {
          return (
            <Star
              key={value}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          );
        } else if (value === Math.ceil(rating) && !Number.isInteger(rating)) {
          return (
            <StarHalf
              key={value}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          );
        } else {
          return <Star key={value} className="w-4 h-4 text-gray-200" />;
        }
      })}
      <span className="text-sm text-gray-500 ml-1">{rating}/5</span>
    </div>
  );
};

export default Rating;
