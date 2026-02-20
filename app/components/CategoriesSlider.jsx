"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const categories = [
  { id: 1, name: "Lifestyle Shoes", image: "/img/categories/1.png", href: "#" },
  { id: 2, name: "Basketball Shoes", image: "/img/categories/2.png" },
  { id: 3, name: "Running Shoes", image: "/img/categories/1.png" },
  { id: 4, name: "Casual Sneakers", image: "/img/categories/2.png" },
];
const CategoriesSlider = () => {

  // Odd/Even background colors
  const colors = ["#ECEEF0", "#F6F6F6"];

  return (
    <div className="container-left">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2 },
        }}
        className="rounded-tl-[48px] overflow-hidden"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={cat.id}>
            <Link href="/"
              className="relative h-100 md:h-137.5 p-10 flex flex-col justify-end group cursor-pointer"
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              {/* Product Image */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={500}
                  height={400}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Category Info */}
              <div className="relative z-10 flex items-end justify-between">
                <h3 className="text-2xl md:text-4xl font-black uppercase leading-tight text-[#232321] max-w-50">
                  <div >{cat.name}</div>
                </h3>

                {/* Arrow Icon */}
                <div className="bg-[#232321] text-white p-3 rounded-xl">
                  <ArrowUpRight size={28} className="transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoriesSlider;