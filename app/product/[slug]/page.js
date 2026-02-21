import React from 'react'
import ProductDetails from '../../components/productDetails'
import ProductSlider from '@/app/components/PdoructSlider'
import ProductCard from '@/app/components/ProductCard'
import SectionHeading from '@/app/components/SectionHeading';

export default function ProductPage() {
  const allProducts = [
    {
      src: "/img/products/1.jpg",
      link: "/product/1",
      badge: "NEW",
      title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125"
    },
    {
      src: "/img/products/2.jpg",
      link: "/product/2",
      badge: "NEW",
      title: "ADIDAS ULTRABOOST 22 SHOES",
      price: "$150"
    },
    {
      src: "/img/products/3.jpg",
      link: "/product/3",
      badge: "NEW",
      title: "ADIDAS NMD_R1 V2 SHOES",
      price: "$130"
    },
    {
      src: "/img/products/4.jpg",
      link: "/product/4",
      badge: "HOT",
      title: "ADIDAS OZWEEGO SHOES",
      price: "$110"
    },
    {
      src: "/img/products/5.jpg",
      link: "/product/5",
      badge: "NEW",
      title: "ADIDAS FORUM LOW SHOES",
      price: "$100"
    }
  ];
  return (
    <>
      <div className='mt-8 mb-32'>
        <ProductDetails />
      </div>
      <section className='mb-15'>
        <div className="container">
          <SectionHeading title="You may also like" sliderBtn={true} arrowClassName="text-white disabled:bg-[#858582]! bg-dark-gray!" />
          <ProductSlider products={allProducts} />
        </div>
      </section>

    </>
  )
}
