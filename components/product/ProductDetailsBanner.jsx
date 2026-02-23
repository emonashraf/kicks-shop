'use client';
import React, { useState } from 'react';
import { Thumbs, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Swiper CSS
import 'swiper/css'
import 'swiper/css/pagination';


const productData = {
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


export default function ProductDetailsBanner() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <div className="lg:col-span-8 min-w-0">
      {/* Desktop View: Original 2x2 Grid with Custom Rounded Corners */}
      <div className="sm:hidden  group">
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation, Thumbs]}
            pagination={{ clickable: true }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            slidesPerView={1}
            className="w-full aspect-square rounded-2xl max-h-68.25"
          >
            {productData.images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full bg-white/50">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnail Navigation (Mobile) */}
        <div className="mt-6">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={12}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="h-17"
          >
            {productData.images.map((img, i) => (
              <SwiperSlide key={i} className="cursor-pointer rounded-xl w-17! overflow-hidden border-2 border-transparent [.swiper-slide-thumb-active]:border-primary transition-all">
                <div className="relative w-full h-full bg-white/50">
                  <Image src={img.src} alt="thumb" fill className="object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
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


  )
}
