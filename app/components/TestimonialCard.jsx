import Image from 'next/image';
import Avatar from './Avater';

const TestimonialCard = ({ title, review, rating, userImage, productImage }) => {
  return (
    <div className="w-full  bg-white rounded-[32px] overflow-hidden shadow-sm">
      {/* Top Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4>{title}</h4>
            <p className="text-gray-600 mt-1">{review}</p>
          </div>
          {/* User Avatar */}
          <Avatar src={userImage} />
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">★</span>
          ))}
          <span className="text-[#232321] font-bold ml-1 text-sm">{rating}</span>
        </div>
      </div>

      {/* Bottom Product/Review Image */}
      <div className="relative w-full h-[300px]">
        <Image
          src={productImage}
          alt="Product Review"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;