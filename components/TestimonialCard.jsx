import Image from 'next/image';

import ProductRating from './product/ProductRating';
import Link from 'next/link';

const TestimonialCard = ({ title, review, rating, userImage, productImage }) => {
  return (
    <div className="w-full bg-white rounded-fluid-32-16 overflow-hidden shadow-sm">
      {/* Top Content Section */}
      <div className="p-fluid-32-16">
        <div className="flex justify-between gap-0.5 items-start mb-2">
          <div>
            <h4>{title}</h4>
            <p className="text-gray-600 mt-1">{review}</p>
          </div>
          {/* User Avatar */}
          <div>
            <Link href="#" className='rounded-full w-fluid-64 h-fluid-64 overflow-hidden block'>
              <Image src={userImage} alt="User Avatar" width={50} height={50} className="object-cover w-full h-full" />
            </Link>
          </div>
        </div>

        {/* Rating Stars */}
        <ProductRating rating={rating} />

      </div>

      {/* Bottom Product/Review Image */}
      <div className="relative w-full h-full">
        <Image
          src={productImage}
          alt="Product Review"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;