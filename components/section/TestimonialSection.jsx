"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import Container from "../layout/Container";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      productImage: "/img/testimonials/1.jpg",
      userImage: "/img/testimonials/user-1.jpg",
      title: "Good Quality",
      review: "I highly recommend shopping from kicks",
      rating: "4.5",
    },
    {
      id: 2,
      productImage: "/img/testimonials/2.jpg",
      userImage: "/img/testimonials/user-1.jpg",
      title: "Good Quality",
      review: "I highly recommend shopping from kicks",
      rating: "4.5",
    },
    {
      id: 3,
      productImage: "/img/testimonials/3.jpg",
      userImage: "/img/testimonials/user-1.jpg",
      title: "Good Quality",
      review: "I highly recommend shopping from kicks",
      rating: "4.5",
    },
  ];

  return (
    <section className="my-fluid-128 overflow-hidden">
      <Container>
        <SectionHeading title="REVIEWS" buttonText="SEE ALL" />

        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard
                productImage={item.productImage}
                userImage={item.userImage}
                title={item.title}
                review={item.review}
                rating={item.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialSection;