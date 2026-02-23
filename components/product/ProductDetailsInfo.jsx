"use client";
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from "@/components/ui/Button";

const staticData = {
  colors: [
    { name: "Shadow Navy", code: "#253043" },
    { name: "Army Green", code: "#7D8B7E" }
  ],
  sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
  outOfStockSizes: [39, 40],
  shortDescription: "Shadow Navy / Army Green",
};

export default function ProductDetailsInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState(staticData.colors[0].name);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, selectedSize, selectedColor);
    alert(`${product.title} added to cart!`);
  }

  return (
    <div className="lg:col-span-4 flex flex-col space-y-7">
      {/* Header Info */}
      <div>
        <span className="px-4 py-2 mb-2 md:mb-4 bg-primary text-white rounded-xl text-xs font-semibold font-heading inline-block ">
          New Release
        </span>
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="text-primary text-2xl font-heading font-semibold">${product.price.toFixed(2)}</p>
      </div>

      {/* Color Selector */}
      <div>
        <h6 className="tracking-wide mb-4 font-bold text-sm uppercase">Color</h6>
        <div className="flex gap-4">
          {staticData.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-6 h-6 rounded-full transition-all ${selectedColor === color.name
                ? 'ring-2 ring-black ring-offset-4 scale-110'
                : 'hover:scale-110'
                }`}
              style={{ backgroundColor: color.code }}
            />
          ))}
        </div>
      </div>

      {/* Size Selector */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h6 className="tracking-wide font-bold text-sm uppercase">Size</h6>
          <button className="text-xs font-medium underline underline-offset-4">SIZE CHART</button>
        </div>
        <div className="flex flex-wrap gap-1">
          {staticData.sizes.map((size) => {
            const isOutOfStock = staticData.outOfStockSizes.includes(size);
            return (
              <button
                key={size}
                disabled={isOutOfStock}
                onClick={() => setSelectedSize(size)}
                className={`min-w-12 h-12 text-sm font-black rounded-lg border-2 transition-all duration-300
                    ${isOutOfStock ? 'bg-[#D2D1D3] text-[#8F8C91] cursor-not-allowed border-transparent opacity-50' :
                    selectedSize === size ? 'bg-dark-gray text-white border-dark-gray shadow-lg' : 'bg-white text-dark-gray border-transparent hover:border-gray-300'
                  }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button variant='darkGray' text="ADD TO CART" onClick={() => handleAddToCart(product)} className="flex-4" />

        <Button variant='darkGray'
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="w-12 h-12 rounded-lg border-2 border-dark-gray flex items-center justify-center transition-all active:scale-95"
        >
          <Heart
            size={24}
            fill={isWishlisted ? "red" : "none"}
            stroke={isWishlisted ? "red" : "currentColor"}
          />
        </Button>
      </div>

      <Button text='BUY IT NOW' variant="primary" className="w-full" />

      {/* Footer Details */}
      <div className="pt-4">
        <h6 className="tracking-wide mb-2 font-bold text-sm uppercase">About the product</h6>
        <p>
          {product.description}
        </p>
      </div>
    </div>
  )
}
