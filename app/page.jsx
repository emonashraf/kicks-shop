import ProductCard from "./components/ProductCard";
import Heroslider from "./components/Heroslider";
import CategoriesSlider from "./components/CategoriesSlider";
import SectionHeading from "./components/SectionHeading";
import TestimonialCard from "./components/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="container">
          {/* Heading */}
          <h1 className="my-6">DO IT <span className="text-primary">RIGHT</span></h1>
          {/* Banners Slider */}
          <div className=" rounded-[64px] overflow-hidden">
            {/* HeroSlider  */}
            <Heroslider />
          </div>
        </div>
      </section>
      {/* New Products Section */}
      <section className="pt-22.5 pb-32">
        <div className="container">
          <SectionHeading title="DON'T MISS OUT NEW DROPS" buttonText="Shop New Drops" />

          {/* Products Card Wrapper */}
          <div className="grid grid-cols-4 gap-4">
            <ProductCard src="/img/products/1.jpg" link="/" badge="NEW" title="ADIDAS 4DFWD X PARLEY RUNNING SHOES" buttonText="VIEW PRODUCT" price="$125" />
            <ProductCard src="/img/products/2.jpg" link="/" badge="NEW" title="ADIDAS 4DFWD X PARLEY RUNNING SHOES" buttonText="VIEW PRODUCT" price="$125" />
            <ProductCard src="/img/products/3.jpg" link="/" badge="NEW" title="ADIDAS 4DFWD X PARLEY RUNNING SHOES" buttonText="VIEW PRODUCT" price="$125" />
            <ProductCard src="/img/products/4.jpg" link="/" badge="NEW" title="ADIDAS 4DFWD X PARLEY RUNNING SHOES" buttonText="VIEW PRODUCT" price="$125" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-dark-gray pt-24">
        <div className="container mx-auto px-4">
          {/* section heading */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white">CATEGORIES</h2>
            <div className="flex gap-4">
              <button className="prev-btn w-10 h-10 cursor-pointer rounded-lg bg-white text-dark-gray flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-100 disabled:bg-[#E7E7E3]">
                <ChevronLeft size={24} />
              </button>

              <button className="next-btn w-10 h-10 cursor-pointer rounded-lg bg-white text-dark-gray flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-100 disabled:bg-[#E7E7E3]">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
        {/* Categories Slider */}
        <CategoriesSlider />
      </section>

      {/* Reviews Section */}
      <section className="py-30">
        <div className="container">
          <SectionHeading title="REVIEWS" buttonText="SEE ALL" />
          <div className="grid grid-cols-3 gap-4">
            <TestimonialCard productImage="/img/testimonials/1.jpg" userImage="/img/testimonials/user-1.jpg" title="Good Quality " review="I highly recommend shopping from kicks" rating="4.5" />
            <TestimonialCard productImage="/img/testimonials/2.jpg" userImage="/img/testimonials/user-1.jpg" title="Good Quality " review="I highly recommend shopping from kicks" rating="4.5" />
            <TestimonialCard productImage="/img/testimonials/3.jpg" userImage="/img/testimonials/user-1.jpg" title="Good Quality " review="I highly recommend shopping from kicks" rating="4.5" />
          </div>
        </div>
      </section>

      {/* Newsletter & Footer */}


      {/* Footer Bottom */}
      {/* <div>
        <p>&copy; All rights reserved </p>
      </div> */}
    </>
  );
}
