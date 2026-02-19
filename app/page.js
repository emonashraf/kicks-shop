import Image from "next/image";
import ProductCard from "./components/ProductCard";
import ReviewCard from "./components/ReviewCard";
import Button from "./components/Button";
import Heroslider from "./components/Heroslider";


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
            {/* <div className="relative  max-h-187.5 overflow-hidden rounded-[40px]"> */}

            {/* Main Background Image */}
            {/* <Image src="/img/hero/banner-1.jpg" alt="Hero Banner" width={1600} height={600} className="w-full" />
              <div className="absolute left-0 top-20 bg-[#232321] text-white p-6 rounded-r-2xl hidden md:block">
                <p className=" font-semibold [writing-mode:vertical-lr] rotate-180">Nike product of the year</p>
              </div>
              <div className="absolute bottom-12 left-8 md:left-16 text-white max-w-md">
                <h2>Nike Air Max</h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90">Nike introducing the new air max for everyone's comfort</p>
                <Button text="SHOP NOW" />
              </div> */}

            {/* Right Side: Small Thumbnails */}
            {/* <div className="absolute right-8 bottom-12 flex flex-col gap-4">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-2 border-white overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                  <Image
                    src="/img/hero/banner-2.jpg"
                    alt="Thumbnail 1"
                    width={128} height={128}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-2 border-white/50 overflow-hidden cursor-pointer hover:scale-105 transition-transform opacity-80">
                  <Image
                    src="/img/hero/banner-3.jpg"
                    alt="Thumbnail 2"
                    width={128} height={128}
                    className="object-cover h-full w-full"
                  />
                </div>

              </div> */}

            {/* </div> */}
            <Heroslider />
          </div>
          <div>

          </div>
        </div>
      </section>

      {/* New Products Section */}
      <section>
        {/* Heading */}
        <div className="flex justify-between">
          <h3>Don’t miss out new drops</h3>
          <button type="button">Shop New Drops</button>
        </div>

        {/* Products Card Wrapper */}
        <div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      {/* Categories Section */}
      <section>
        {/* Heading */}
        <div className="flex justify-between">
          <h3>Don’t miss out new drops</h3>
          <div>
            <ul>
              <li><button type="button">Prev</button></li>
              <li><button type="button">Next</button></li>
            </ul>
          </div>
        </div>

        {/* Category slider */}
        <div>
          {/* <CategoryCard />
          <CategoryCard /> */}
        </div>

      </section>

      {/* Reviews Section */}
      <section>
        <div className="flex justify-between">
          <h3>Reviews</h3>
          <button type="button">See all</button>
        </div>
        <div className="flex gap-3">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
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
