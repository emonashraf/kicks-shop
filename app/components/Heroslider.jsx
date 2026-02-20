"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import Button from "./Button";

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
    <div className="relative h-187.5 rounded-[40px] overflow-hidden">

      {/* ===== MAIN SLIDER ===== */}
      <Swiper
        loop
        spaceBetween={0}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed
              ? thumbsSwiper
              : null,
        }}
        modules={[FreeMode, Thumbs]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">

              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Left Vertical Badge */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#232321] text-white px-3 py-10 rounded-r-2xl hidden md:block z-10">
                <p className="font-semibold [writing-mode:vertical-lr] rotate-180">
                  Nike product of the year
                </p>
              </div>

              {/* ===== CONTENT ===== */}
              <div className="absolute bottom-12 left-6 md:left-16 text-white z-10 max-w-xl">

                <h2 className=" ">
                  {slide.title}
                </h2>

                <p className="text-base md:text-lg mb-6 opacity-90">
                  {slide.desc}
                </p>

                <Button text="SHOP NOW" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== THUMBNAIL SLIDER ===== */}
      <div className="absolute right-6 bottom-10 z-20 w-24 md:w-40 h-84 ">

        <Swiper
          onSwiper={setThumbsSwiper}
          direction="vertical"
          spaceBetween={15}
          slidesPerView={2}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Thumbs]}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="cursor-pointer group">
              <div
                className="
                  w-full h-full rounded-4xl overflow-hidden
                  border-2 border-white/30
                  opacity-60 transition-all
                  group-[.swiper-slide-thumb-active]:opacity-100
                  group-[.swiper-slide-thumb-active]:border-white
                "
              >
                <Image
                  src={slide.thumb}
                  alt="thumb"
                  width={160}
                  height={160}
                  className="object-cover h-full w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default HeroSlider;