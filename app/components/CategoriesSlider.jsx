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
    <section className="bg-[#232321] pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white ">CATEGORIES</h2>

          <div className="flex gap-2">
            <button className="prev-btn w-10 h-10 cursor-pointer rounded-lg bg-white text-black flex items-center justify-center hover:bg-gray-600 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button className="next-btn w-10 h-10 cursor-pointer rounded-lg bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="container !ml-auto !mx-[unset] max-w-[1700px]">
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
              <div
                className="relative h-[400px] md:h-[550px] p-10 flex flex-col justify-end group cursor-pointer"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                {/* Product Image */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={500}
                    height={400}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Category Info */}
                <div className="relative z-10 flex items-end justify-between">
                  <h3 className="text-2xl md:text-4xl font-black uppercase leading-tight text-[#232321] max-w-50">
                    <Link href="/">{cat.name}</Link>
                  </h3>

                  {/* Arrow Icon */}
                  <div className="bg-[#232321] text-white p-3 rounded-xl transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategoriesSlider;