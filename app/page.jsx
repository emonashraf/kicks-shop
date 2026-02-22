import ProductCard from "./components/ProductCard";
import Heroslider from "./components/Heroslider";
import CategoriesSlider from "./components/CategoriesSlider";
import SectionHeading from "./components/SectionHeading";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="container">
          {/* Heading */}
          <h1 className=" my-6 text-6xl sm:text-[100px] md:text-[120px] lg:text-[160px] xl:text-[200px] 2xl:text-[223.5px] font-bold">DO IT <span className="text-primary">RIGHT</span></h1>
          {/* HeroSlider  */}
          <Heroslider />
        </div>
      </section>
      {/* New Products Section */}
      <section className="mt-fluid-90 mb-fluid-128">
        <div className="container">
          <SectionHeading title=" Don't miss out new drops" buttonText="Shop New Drops" />
          {/* Products Card Wrapper */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">
            <ProductCard src="/img/products/1.jpg" link="/product/1" badge="NEW" title="ADIDAS 4DFWD X PARLEY RUNNING SHOES" buttonText="VIEW PRODUCT" price="$125" />
            <ProductCard src="/img/products/2.jpg" link="/" badge="NEW" title="ADIDAS 4DFWD X PARLEY RUNNING SHOES" buttonText="VIEW PRODUCT" price="$125" />
            <ProductCard src="/img/products/3.jpg" link="/" badge="NEW" title="ADIDAS 4DFWD X PARLEY RUNNING SHOES" buttonText="VIEW PRODUCT" price="$125" />
            <ProductCard src="/img/products/4.jpg" link="/" badge="NEW" title="ADIDAS 4DFWD X PARLEY RUNNING SHOES" buttonText="VIEW PRODUCT" price="$125" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-dark-gray pt-fluid-128 pb-6 sm:pb-0">
        <div className="container mx-auto px-4">
          {/* section heading */}
          <SectionHeading title="CATEGORIES" titleClassName="text-white" sliderBtn={true} />
        </div>
        {/* Categories Slider */}
        <CategoriesSlider />
      </section>

      {/* Reviews Section */}
      {/* <section className="py-30">
        <div className="container">
          <SectionHeading title="REVIEWS" buttonText="SEE ALL" />
          <div className="grid grid-cols-3 gap-4">
            <TestimonialCard productImage="/img/testimonials/1.jpg" userImage="/img/testimonials/user-1.jpg" title="Good Quality " review="I highly recommend shopping from kicks" rating="4.5" />
            <TestimonialCard productImage="/img/testimonials/2.jpg" userImage="/img/testimonials/user-1.jpg" title="Good Quality " review="I highly recommend shopping from kicks" rating="4.5" />
            <TestimonialCard productImage="/img/testimonials/3.jpg" userImage="/img/testimonials/user-1.jpg" title="Good Quality " review="I highly recommend shopping from kicks" rating="4.5" />
          </div>
        </div>
      </section> */}
      <Testimonials />
    </>
  );
}
