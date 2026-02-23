import React from 'react'
import ProductSlider from './PdoructSlider'
import { fetchProducts } from '@/lib/product';
import SectionHeading from '../SectionHeading';
import Container from '../layout/Container';

export default async function RelatedProducts() {
  const products = await fetchProducts({ limit: 8 });

  return (
    <section className='mb-15'>
      <Container>
        <SectionHeading
          title="You may also like"
          sliderBtn={true}
          arrowClassName="text-white disabled:bg-[#858582]! bg-dark-gray!"
          titleClassName=' text-fluid-48 capitalize!'
        />
        <ProductSlider
          products={products}
        />
      </Container>
    </section>
  )
}
