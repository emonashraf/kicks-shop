import Link from 'next/link';
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';
import Container from '../layout/Container';

export default function Cart() {
  return (
    <section className='mt-8 mb-10'>
      <Container>
        {/* Top Promotional Text */}
        <div className="mb-fluid-32">
          <h1 className=" text-fluid-32 font-bold mb-2">Saving to celebrate</h1>
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
                <h2 className="text-fluid-32 mb-1">Your Bag</h2>
                <p className=" ">Items in your bag not reserved- check out now to make them yours.</p>
              </div>

              <CartItems />
            </div>
          </div>

          {/* RIGHT: Order Summary Section */}
          <OrderSummary />
        </div>
      </Container>
    </section >
  );
}