import React from 'react'
import Heroslider from "@/components/HeroSlider";
import Container from '../layout/Container';

export default function HeroSection() {
  return (
    <Container>
      {/* Heading */}
      <h1 className="my-6 text-6xl sm:text-[100px] md:text-[120px] lg:text-[160px] xl:text-[200px] 2xl:text-[223.5px] font-bold">DO IT <span className="text-primary">RIGHT</span></h1>
      {/* HeroSlider  */}
      <Heroslider />
    </Container>
  )
}
