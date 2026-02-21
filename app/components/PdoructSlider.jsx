"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper necessary styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProductCard from './ProductCard';
import SliderArrowBtn from './SliderArrowBtn';
import SectionHeading from './SectionHeading';

const ProductSlider = ({ products = [] }) => {
  // Guard clause to prevent rendering if no products are found
  if (!products || products.length === 0) return null;

  return (
    <>
      {/* SWIPER CAROUSEL */}
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
              src={product.src}
              badge={product.badge}
              title={product.title}
              buttonText="VIEW PRODUCT"
              price={product.price}
              link={product.link}
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

export default ProductSlider;