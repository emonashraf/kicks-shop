"use client";
import React, { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import Button from "./Button";

import "swiper/css";

const HeroSlider = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  const slides = [
    {
      id: 1,
      title: "Nike Air Max",
      desc: "Nike introducing the new air max for everyone's comfort",
      image: "/img/hero/banner-1.jpg",
      thumb: "/img/hero/banner-1.jpg",
    },
    {
      id: 2,
      title: "Nike Zoom Pro",
      desc: "Experience the ultimate speed with our new zoom series",
      image: "/img/hero/banner-2.jpg",
      thumb: "/img/hero/banner-2.jpg",
    },
  ];

  return (
    <div className="px-4 py-6 mx-auto">
      <div className="relative max-h-187.5 md:h-187.5 rounded-[40px] overflow-hidden group">

        {/* Main Swiper Slider */}
        <Swiper
          loop={true}
          spaceBetween={0}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Left Side: Vertical Text Badge */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#232321] text-white px-2 py-8 rounded-r-2xl hidden md:block z-10">
                  <p className="font-semibold [writing-mode:vertical-lr] rotate-180">Nike product of the year</p>
                </div>

                {/* Bottom Left: Content */}
                <div className="absolute bottom-12 left-6 md:left-16 text-white z-10">
                  <h2 className=" leading-[0.9] mb-4 tracking-tighter ">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-lg mb-6 max-w-xs md:max-w-md opacity-90">
                    {slide.desc}
                  </p>
                  <Button text="SHOP NOW" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Side: Thumbnail Slider */}
        <div className="absolute right-6 bottom-10 z-20 w-24 md:w-36 h-[180px] md:h-[280px]">
          <Swiper
            onSwiper={setThumbsSwiper}
            direction="vertical"
            spaceBetween={15}
            slidesPerView={2}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-full w-full thumb-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="cursor-pointer">
                <div className="w-full h-full rounded-2xl border-2 border-white/30 overflow-hidden opacity-60 transition-all [.swiper-slide-thumb-active_&]:opacity-100 [.swiper-slide-thumb-active_&]:border-white">
                  <Image
                    src={slide.thumb}
                    alt="thumb"
                    width={150}
                    height={150}
                    className="object-cover h-full w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CSS fixes for Vertical Thumbnails */}
      <style jsx global>{`
        .thumb-swiper .swiper-wrapper {
          flex-direction: column !important;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;