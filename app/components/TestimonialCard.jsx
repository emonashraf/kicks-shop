import Image from 'next/image';
import Avatar from './Avater';
import ProductRating from './ProductRating';

const TestimonialCard = ({ title, review, rating, userImage, productImage }) => {
  return (
    <div className="w-full bg-white rounded-4xl overflow-hidden shadow-sm">
      {/* Top Content Section */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4>{title}</h4>
            <p className="text-gray-600 mt-1">{review}</p>
          </div>
          {/* User Avatar */}
          <Avatar src={userImage} />
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