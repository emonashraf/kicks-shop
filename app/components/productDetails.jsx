"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation, Pagination } from 'swiper/modules';
import Button from './Button';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

export default function ProductDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0].name);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 px-4">

      {/* LEFT COLUMN: Gallery (Slider for Mobile, Grid for Desktop) */}
      <div className="lg:col-span-8 min-w-0">

        {/* Mobile View: Swiper Slider with Thumbs (Hidden on Desktop) */}
        <div className="sm:hidden -mx-4 group">
          <div className="relative">
            <Swiper
              modules={[Pagination, Navigation, Thumbs]}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
              }}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              slidesPerView={1}
              className="w-full aspect-square"
            >
              {productData.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-full bg-white/50">
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Slider Navigation Buttons */}
            <button className="swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
              <ChevronLeft size={20} />
            </button>
            <button className="swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Thumbnail Navigation (Mobile) */}
          <div className="mt-4 px-4">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView={4}
              watchSlidesProgress={true}
              modules={[Thumbs]}
              className="h-20"
            >
              {productData.images.map((img, i) => (
                <SwiperSlide key={i} className="cursor-pointer rounded-xl overflow-hidden border-2 border-transparent [.swiper-slide-thumb-active]:border-black transition-all">
                  <div className="relative w-full h-full bg-white/50">
                    <Image src={img.src} alt="thumb" fill className="object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Desktop View: Original 2x2 Grid with Custom Rounded Corners */}
        <div className="hidden sm:grid grid-cols-2 gap-4">
          {productData.images.map((img, i) => (
            <div
              key={i}
              className={`relative bg-white/50 overflow-hidden aspect-square group transition-all duration-500 ${img.rounded}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                sizes="40vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Product Information */}
      <div className="lg:col-span-4 flex flex-col space-y-7">
        {/* Header Info */}
        <div>
          <span className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-semibold font-heading inline-block mb-4">
            {productData.tag}
          </span>
          <h1 className="text-3xl font-bold leading-tight">{productData.name}</h1>
          <h2 className="text-primary text-2xl font-bold mt-3">${productData.price.toFixed(2)}</h2>
        </div>

        {/* Color Selector */}
        <div>
          <h6 className="tracking-wide mb-4 font-bold text-sm uppercase">Color</h6>
          <div className="flex gap-4">
            {productData.colors.map((color) => (
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
            {productData.sizes.map((size) => {
              const isOutOfStock = productData.outOfStockSizes.includes(size);
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
          <Button variant='darkGray' text="ADD TO CART" className="flex-[4]" />
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="w-12 h-12 rounded-lg border-2 border-dark-gray flex items-center justify-center transition-all active:scale-95"
          >
            <Heart
              size={24}
              fill={isWishlisted ? "red" : "none"}
              stroke={isWishlisted ? "red" : "currentColor"}
            />
          </button>
        </div>
        <Button text='BUY IT NOW' variant="primary" className="w-full" />

        {/* Footer Details */}
        <div className="pt-4">
          <h6 className="tracking-wide mb-2 font-bold text-sm uppercase">About the product</h6>
          <div className="space-y-3 text-sm text-dark-gray/80">
            <p>{productData.shortDescription}</p>
            <p>{productData.description}</p>
            <ul className="space-y-3">
              {productData.details.map((detail, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span> {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Global Style for Swiper Customization */}
      <style jsx global>{`
        .swiper-pagination-bullet-active { background: #000 !important; }
        .lg\:hidden .swiper-pagination { bottom: 8px !important; }
      `}</style>
    </div>
  );
}