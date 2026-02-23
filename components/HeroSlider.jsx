"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Button from "./ui/Button";

export default function HeroSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = [
    {
      id: 1,
      title: "Nike Air Max",
      desc: "Nike introducing the new air max for everyone's comfort",
      image: "/img/hero/01.jpg",
      thumb: "/img/hero/thumb-01.jpg",
    },
    {
      id: 2,
      title: "Nike Zoom Pro",
      desc: "Experience the ultimate speed with our new zoom series",
      image: "/img/hero/02.jpg",
      thumb: "/img/hero/thumb-02.jpg",
    },
  ];

  return (
    <div className="relative rounded-fluid-64 overflow-hidden ">
      <Swiper
        loop
        spaceBetween={0}
        autoplay={{ delay: 5000000, disableOnInteraction: false }}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed
              ? thumbsSwiper
              : null,
        }}
        modules={[FreeMode, Thumbs, Autoplay]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full max-h-187.5 min-h-95.5">

              {/* Background Image: aspect-[44/25] v4 syntax */}
              <Image
                src={slide.image}
                alt={slide.title}
                width={1320}
                height={750}
                priority
                className="object-cover w-full h-full "
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-black/0 from-47% to-black opacity-50" aria-hidden="true" />
              <div className="absolute left-0 top-[clamp(1.438rem,5.352vw+0.183rem,5rem)] bg-[#232321] p-fluid-24-8 rounded-r-2xl z-10">
                <p className="font-semibold text-white [writing-mode:vertical-lr] text-fluid-16 rotate-180">
                  Nike product of the year
                </p>
              </div>

              {/* ===== CONTENT ===== */}
              <div className="absolute bottom-fluid-48-16 left-fluid-48-16 text-white z-10 max-w-58.75 md:max-w-122.5">
                <h2 className="font-semibold leading-tight uppercase">
                  {slide.title}
                </h2>
                <p className="text-body-bg text-fluid-24-14 mb-2 sm:mb-3 lg:mb-4 xl:mb-6 opacity-90">{slide.desc}</p>
                <Button text="SHOP NOW" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      <div className="absolute right-fluid-32-16 bottom-fluid-32-16 z-20 h-48 sm:h-55 md:h-65 lg:h-76 xl:h-84">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction="vertical"
          spaceBetween={15}
          slidesPerView={2}
          freeMode={true}
          watchSlidesProgress={true}
          slideToClickedSlide={true}
          modules={[FreeMode, Thumbs]}
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="cursor-pointer group">

              <div className="h-[clamp(4rem,9.014vw+1.887rem,10rem)] w-[clamp(4rem,9.014vw+1.887rem,10rem)] rounded-fluid-32 overflow-hidden border-2 border-white/30 opacity-60 transition-all duration-300 group-[.swiper-slide-thumb-active]:opacity-100 group-[.swiper-slide-thumb-active]:border-white
          "
              >
                <Image
                  src={slide.thumb}
                  alt="thumb"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full pointer-events-none"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
