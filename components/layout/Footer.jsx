import React from 'react';
import { Facebook, Instagram, Twitter, Music2 } from 'lucide-react';
import Newsletter from '../section/NewsletterSection';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';


export default function Footer() {
  return (
    <footer>
      <Container>

        {/* Newsletter Section (Blue Box) */}
        <div className="bg-primary rounded-fluid-48">
          <Newsletter />

          {/* Main Footer Links (Black Box) */}
          <div className="relative bg-dark-gray rounded-fluid-48 p-10 pb-0 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 ">

              {/* About Us */}
              <div className='sm:col-span-2'>
                <h3 className="text-secondary mb-1">About us</h3>
                <p className="text-body-bg text-fluid-20-16 font-semibold max-w-121.5">We are the biggest hyperstore in the universe. We got you all covered with our exclusive collections and latest drops.</p>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-secondary mb-3.5">Categories</h4>
                <ul className="text-body-bg space-y-2 font-medium">
                  <li><Link href="#" className="text-fluid-20-16 font-semibold hover:text-white transition-colors">Runners</Link></li>
                  <li><Link href="#" className="text-fluid-20-16 font-semibold hover:text-white transition-colors">Sneakers</Link></li>
                  <li><Link href="#" className="text-fluid-20-16 font-semibold hover:text-white transition-colors">Basketball</Link></li>
                  <li><Link href="#" className="text-fluid-20-16 font-semibold hover:text-white transition-colors">Outdoor</Link></li>
                  <li><Link href="#" className="text-fluid-20-16 font-semibold hover:text-white transition-colors">Golf</Link></li>
                  <li><Link href="#" className="text-fluid-20-16 font-semibold hover:text-white transition-colors">Hiking</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-secondary mb-3.5">Company</h4>
                <ul className="text-body-bg space-y-2 font-medium">
                  <li><Link href="#" className="text-fluid-20-16 font-semibold hover:text-white transition-colors">About</Link></li>
                  <li><Link href="#" className="text-fluid-20-16 font-semibold hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="#" className="text-fluid-20-16 font-semibold hover:text-white transition-colors">Blogs</Link></li>
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <h4 className="text-secondary mb-3.5">Follow us</h4>
                <div className="flex gap-4">
                  <Link href="#" className="text-body-bg hover:scale-105 duration-300 transition-transform"><Facebook /></Link>
                  <Link href="#" className="text-body-bg hover:scale-105 duration-300 transition-transform"><Instagram /></Link>
                  <Link href="#" className="text-body-bg hover:scale-105 duration-300 transition-transform"><Twitter /></Link>
                  <Link href="#" className="text-body-bg hover:scale-105 duration-300 transition-transform"><Music2 /></Link>
                </div>
              </div>
            </div>

            {/* Big Background Logo */}
            <div className=" mt-23 sm:mt-30 md:mt-40 lg:mt-52  xl:mt-72">
              <Link href="/" className="block absolute -bottom-2.5 left-7.5 right-7.5" >
                <Image src="/img/logo/footer-logo.svg" alt="logo" width={300} height={100} className='w-full max-h-78' />
              </Link>
            </div>

          </div>
        </div>
        <div className="pt-7 pb-4.5 text-center">
          <p>&copy; All rights reserved .</p>
        </div>
      </Container>
    </footer>
  );
};

