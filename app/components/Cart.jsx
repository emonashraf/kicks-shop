import Image from 'next/image';
import { ChevronDown, Heart, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { SelectDemo } from './SelectDemo';
import Button from './Button';

export default function Cart() {
  return (
    <section className='mt-8 mb-10'>
      <div className="container">
        {/* Top Promotional Text */}
        <div className="mb-fluid-32">
          <h1 className="text-flueid-32 font-bold mb-2">Saving to celebrate</h1>
          <p className="text-sm text-zinc-600">
            Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
          </p>
          <div className="mt-2 text-sm underline font-semibold flex gap-4">
            <Link href="/" className='underline'>Join us</Link>
            <span>or</span>
            <Link href="/" className='underline'>Sign-in</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT: Your Bag Section */}
          <div className="lg:col-span-2">
            <div className="bg-off-white rounded-3xl p-fluid-24">
              <div className='mb-fluid-48'>
                <h2 className="text-flueid-32 mb-1">Your Bag</h2>
                <p className=" ">Items in your bag not reserved- check out now to make them yours.</p>
              </div>

              {/* Individual Product Item */}
              <div className="flex gap-fluid-24">
                <div className="relative w-full md:w-52 aspect-13/14  rounded-3xl overflow-hidden">
                  <Image
                    src="/img/products/1.jpg"
                    alt="Dropset Trainer Shoes"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grow">
                  <div className="flex flex-wrap gap-4 justify-between items-start mb-1">
                    <div>
                      <h3 className="text-fluid-24">DROPSET TRAINER SHOES</h3>
                      <div className=' space-y-2'>
                        <p className="text-fluid-20 font-semibold">Men's Road Running Shoes</p>
                        <p className="text-fluid-20 font-semibold">Enamel Blue / University White</p>
                      </div>
                      <div className="flex gap-8 mt-fluid-20">
                        <SelectDemo
                          placeholder="Size 10"
                          options={[
                            { label: "Size 10", value: "10" },
                            { label: "Size 12", value: "12" },
                            { label: "Size 14", value: "14" },
                            { label: "Size 16", value: "16" }
                          ]}

                        />
                        <SelectDemo
                          placeholder="Quantity 1"
                          options={[
                            { label: "Quantity 1", value: "1" },
                            { label: "Quantity 2", value: "2" },
                            { label: "Quantity 3", value: "3" },
                            { label: "Quantity 4", value: "4" }
                          ]}
                        />
                      </div>
                    </div>
                    <span className="text-primary text-fluid-24 font-rubik font-semibold leading-0">$130.00</span>
                  </div>
                  <div className="flex gap-4 mt-fluid-48">
                    <button className="p-1 hover:text-primary transition-colors">
                      <Heart size={22} />
                    </button>
                    <button className="p-1 hover:text-red-500 transition-colors">
                      <Trash2 size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Order Summary Section */}
          <div className="lg:col-span-1 space-y-fluid-24 py-5">
            <h2 className="text-flueid-32">Order Summary</h2>
            <div className="space-y-4  text-[clamp(16px,1.5vw,20px)] font-samibol">
              <div className="flex items-center justify-between">
                <span>1 ITEM</span>
                <span className='text-dark-gray/80'>$130.00</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className='text-dark-gray/80'>$6.99</span>
              </div>
              <div className="flex justify-between">
                <span>Sales Tax</span>
                <span className='text-dark-gray/80'>-</span>
              </div>
              <div className="flex justify-between text-[clamp(20px,1.5vw,24px)] font-semibold font-rubik">
                <span>Total</span>
                <span className='text-dark-gray/80'>$136.99</span>
              </div>
            </div>
            <Button variant='darkGray' text='CHECKOUT' className='w-full' />

            <Link href="/" className=" text-text-[clamp(16px,1.5vw,20px)] font-semibold underline decoration-1 block">
              User a promo code
            </Link>
          </div>
        </div>
      </div>
    </section >
  );
}