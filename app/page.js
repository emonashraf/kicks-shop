import Image from "next/image";
import ProductCard from "./components/ProductCard";
import ReviewCard from "./components/TestimonialCard";
import Button from "./components/Button";
import Heroslider from "./components/Heroslider";
import CategoriesSlider from "./components/CategoriesSlider";
import SectionHeading from "./components/SectionHeading";
import TestimonialCard from "./components/TestimonialCard";


export default function Home() {
  return (
    <main>
      {/* Banner Section */}
      <section>
        <div className="container">
          {/* Heading */}
          <h1 className="text-[223.5px] text-center">DO IT <span className="text-primary">RIGHT</span></h1>
          {/* Banners Slider */}
          <div className=" rounded-[64px] overflow-hidden">
            {/* HeroSlider  */}
            <Heroslider />
          </div>
        </div>
      </section>

      {/* New Products Section */}
      <section className="pt-22.5">
        {/* Heading */}
        <div className="container bg-dark-gray">
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
      <section>
        <CategoriesSlider />

        {/* Category slider */}
        <div>
          {/* <CategoryCard />
          <CategoryCard /> */}
        </div>

      </section>

      {/* Reviews Section */}
      <section className="py-30">
        <div className="container">
          <SectionHeading title="REVIEWS" buttonText="SEE ALL" />
          <div className="grid grid-cols-3 gap-4">
            <TestimonialCard productImage="/img/testimonials/1.jpg" userImage="/img/testimonials/user-1.jpg" title="ADIDAS 4DFWD X PARLEY RUNNING SHOES" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quae." rating="4.5" />
            <TestimonialCard productImage="/img/testimonials/2.jpg" userImage="/img/testimonials/user-1.jpg" title="ADIDAS 4DFWD X PARLEY RUNNING SHOES" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quae." rating="4.5" />
            <TestimonialCard productImage="/img/testimonials/3.jpg" userImage="/img/testimonials/user-1.jpg" title="ADIDAS 4DFWD X PARLEY RUNNING SHOES" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quae." rating="4.5" />

          </div>
        </div>
      </section>

      {/* Newsletter & Footer */}
      <section>
        {/* Newsletter */}
        <div>
          {/* Left */}
          <div>
            <h4>Join our KicksPlus Club & get 15% off</h4>
            <p>Sign up for free! Join the community.</p>
            <form>
              <input type="email" />
              <button>Submit</button>
            </form>
          </div>

          {/* Right */}
          <div>
            {/* Logo */}
          </div>
        </div>

        {/* Footer */}
        <div>
          {/* Top */}
          <div>
            {/* About */}
            <div>
              <h5>
                About us
              </h5>
              <p>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
            </div>

            {/* Links */}
            <div>
              <div>
                <h6>Categories</h6>
                <ul>
                  <li><a href="/">Runners</a></li>
                  <li><a href="/">Sneakers</a></li>
                  <li><a href="/">Basketball</a></li>
                  <li><a href="/">Outdoor</a></li>
                  <li><a href="/">Golf</a></li>
                  <li><a href="/">Hiking</a></li>
                </ul>
              </div>
              <div>
                <h6>Company</h6>
                <ul>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Contact</a></li>
                  <li><a href="/">Blogs</a></li>
                </ul>
              </div>

              <div>
                <h6>Follow us </h6>
                <ul>
                  <li><a href="/">Facebook</a></li>
                  <li><a href="/">Instagram</a></li>
                  <li><a href="/">Twitter</a></li>
                  <li><a href="/">Tiktok</a></li>
                </ul>
              </div>

            </div>
          </div>
          {/* Bottom */}
          <div>
            {/* Logo Vector */}
          </div>
        </div>
      </section>
      {/* Footer Bottom */}
      <div>
        <p>&copy; All rights reserved </p>
      </div>
    </main>
  );
}
