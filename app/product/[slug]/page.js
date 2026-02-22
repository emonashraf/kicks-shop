import React from 'react'
// import ProductSlider from '@/app/components/PdoructSlider'
import SectionHeading from '@/app/components/SectionHeading';
import ProductDetails from '@/app/components/ProductDetails';

// import ProductDetails from '@/app/components/productDetails';

export default function ProductPage() {

  return (
    <>
      <div className='mt-8 mb-32'>
        <div className="container">
          {/* <ProductDetails /> */}
          <ProductDetails />
        </div>
      </div>
      <section className='mb-15'>
        <div className="container">
          <SectionHeading title="You may also like" sliderBtn={true} arrowClassName="text-white disabled:bg-[#858582]! bg-dark-gray!" />
          {/* <ProductSlider products={[]} /> */}
        </div>
      </section>

    </>
  )
}
