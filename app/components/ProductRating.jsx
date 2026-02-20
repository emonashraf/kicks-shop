"use client"; // client component for hooks if needed

import React from "react";
import { Star } from "lucide-react";

export default function ProductRating({ rating = 0, maxRating = 5, showNumber = true }) {
  const stars = Array.from({ length: maxRating }, (_, i) => {
    const starNumber = i + 1;
    if (rating >= starNumber) {
      return <Star key={i} className="text-yellow-500 w-5 h-5 fill-yellow-500" />;
    } else if (rating + 0.5 >= starNumber) {
      return <Star key={i} className="text-yellow-500 w-5 h-5" />;
    } else {
      return <Star key={i} className="text-yellow-500 w-5 h-5" />;
    }
  });

  return (
    <div className="flex items-center space-x-1">
      {stars}
      {showNumber && (
        <span className="text-gray-600 ml-2 font-medium">{Number(rating).toFixed(1)}</span>
      )}
    </div>
  );
}