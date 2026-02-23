import React from 'react'
import SectionHeading from '../SectionHeading'
import CategoriesSlider from '../CategoriesSlider'
import { fetchCategories } from '@/lib/category';
import Container from '../layout/Container';

const categories = await fetchCategories();

export default function CategorySection() {
  return (
    <section className="bg-dark-gray pt-fluid-128 pb-6 sm:pb-0">
      <Container>
        {/* section heading */}
        <SectionHeading title="CATEGORIES" titleClassName="text-white" sliderBtn={true} />
      </Container>
      {/* Categories Slider */}
      <CategoriesSlider categories={categories} />
    </section>
  )
}
