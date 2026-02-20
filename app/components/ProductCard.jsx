import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const ProductCard = ({ src, badge, title, buttonText, price, link = "#" }) => {
  return (
    <div className="group pb-32">
      <div className="bg-[#F5F5F5] rounded-[28px] p-2 overflow-hidden">
        {/* New Badge */}
        <div className="relative">
          <span className="absolute top-0 left-0 bg-primary text-white text-sm font-semibold px-4 py-3 rounded-br-[24px] rounded-tl-[32px] z-10">{badge}</span>
          {/* Product Image */}
          <Link href={link} className="relative w-full block  overflow-hidden rounded-[24px]">
            <Image src={src} alt="ADIDAS 4DFWD X PARLEY RUNNING SHOES" width={200} height={200} className="object-cover  transition-transform duration-500 group-hover:scale-105 w-full h-full" />
          </Link>
        </div>
      </div>
      {/* Product Info */}
      <div className="mt-4">
        <h4 className="leading-tight tracking-tight transition duration-300 hover:text-primary"><Link href={link}>{title}</Link> </h4>
        <Button variant="darkGray" href={link} className="w-full mt-4">
          {buttonText} —
          <span className="text-secondary">{price}</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

