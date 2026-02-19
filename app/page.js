import ProductCard from "./components/ProductCard";
import ReviewCard from "./components/ReviewCard";

export default function Home() {
  return (
    <main>
      {/* Banner Section */}
      <section>
        {/* Heading */}
        <h1 className="text-[223.5px]">Do it right</h1>
        {/* Banners Slider */}
        <div>

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
          <CategoryCard />
          <CategoryCard />
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
