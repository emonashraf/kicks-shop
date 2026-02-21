"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import Button from './Button';

const productData = {
  id: 1,
  name: "Adidas 4DFWD X Parley Running Shoes",
  price: 125.00,
  tag: "New Release",
  colors: [
    { name: "Shadow Navy", code: "#253043" },
    { name: "Army Green", code: "#7D8B7E" }
  ],
  sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
  outOfStockSizes: [39, 40],
  // 1. Added custom rounded classes for each image
  images: [
    { src: "/img/products/5.jpg", alt: "Side view", rounded: "rounded-tl-[48px]" },
    { src: "/img/products/6.jpg", alt: "On feet", rounded: "rounded-tr-[48px]" },
    { src: "/img/products/7.jpg", alt: "Top view", rounded: "rounded-bl-[48px]" },
    { src: "/img/products/8.jpg", alt: "Bottom view", rounded: "rounded-br-[48px]" }
  ],
  shortDescription: "Shadow Navy / Army Green",

  description: "This product is excluded from all promotional discounts and offers.",
  details: [
    "Pay over time in interest-free installments with Affirm, Klarna or Afterpay.",
    "Join adiClub to get unlimited free standard shipping, returns, & exchanges."
  ]
};

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0].name);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

      {/* LEFT COLUMN: Image Gallery */}
      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {productData.images.map(({ src, alt, rounded }, index) => (
          <div
            key={index}
            className={`relative bg-white/50 overflow-hidden aspect-square group transition-all duration-500 ${rounded}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Product Information */}
      <div className="lg:col-span-4 flex flex-col space-y-7">
        {/* Header Info */}
        <div>
          <span className="px-4 py-2.75 bg-primary text-white rounded-xl text-xs font-semibold font-heading inline-block mb-4">{productData.tag}</span>
          <h3 className="leading-[1.056]">{productData.name}</h3>
          <h4 className="text-primary mt-3">${productData.price.toFixed(2)}</h4>
        </div>

        {/* Color Selector Section */}
        <div>
          <h6 className="tracking-wide mb-4">COLOR</h6>
          <div className="flex gap-4">
            {productData.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                aria-label={`Select color ${color.name}`}
                className={`w-6 h-6 rounded-full transition-all 
                    ${selectedColor === color.name
                    ? 'ring-3 ring-offset-4 scale-110 ml-2.5'
                    : 'hover:scale-110'
                  }`}
                style={{
                  backgroundColor: color.code,
                  '--tw-ring-color': selectedColor === color.name ? color.code : 'transparent',
                  '--tw-ring-offset-color': '#ECEEF0'
                }}
              />
            ))}
          </div>
        </div>

        {/* Size Selector Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h6 className="tracking-wide">SIZE</h6>
            <button className="text-xs font-medium font-rubik underline decoration-1 underline-offset-4">SIZE CHART</button>
          </div>
          <div className="flex flex-wrap gap-1">
            {productData.sizes.map((size) => {
              const isOutOfStock = productData.outOfStockSizes.includes(size);
              return (
                <button
                  key={size}
                  disabled={isOutOfStock}
                  onClick={() => setSelectedSize(size)}
                  className={` min-w-12 h-12 text-sm font-black rounded-lg border-2 transition-all duration-300
                      ${isOutOfStock ? 'bg-[#D2D1D3] text-[#8F8C91] cursor-not-allowed border-transparent opacity-50' :
                      selectedSize === size ? 'bg-dark-gray! text-white border-dark-gray shadow-lg' : 'bg-white text-dark-gray font-heading border-transparent hover:border-gray-300'
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
          <Button variant='darkGray' text="ADD TO CART" href="/cart" className="flex-4" />
          <Button
            variant="darkGray"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="w-12"
            icon={
              <Heart
                size={24}
                fill={isWishlisted ? "red" : "none"}
                stroke={isWishlisted ? "none" : "currentColor"}
                className="transition-colors  duration-300 '}"
              />
            }
          />
        </div>
        <Button text='BUY IT NOW' />

        {/* Footer Details */}
        <div>
          <h6 className="tracking-wide mb-2">ABOUT THE PRODUCT</h6>
          <div className=' space-y-3'>
            <p>{productData.shortDescription}</p>
            <p>{productData.description}</p>
            <ul className="space-y-3">
              {productData.details.map((detail, i) => (
                <li key={i} className="flex gap-2 text-dark-gray/80">
                  <span>•</span> {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ProductPage;