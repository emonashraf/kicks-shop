"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProductCard from './Product';

// Import Swiper necessary styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function PdoructSlider({ products = [] }) {

  if (!products || products.length === 0) return null;

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        navigation={{
          prevEl: '.prev-btn',
          nextEl: '.next-btn',
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              product={product}
              key={product.id}
              badge="NEW"
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* MINIMALIST PROGRESS DOTS */}
      <div className="mt-8 flex justify-center">
        <div className="custom-pagination"></div>
      </div>
    </>
  );
};
