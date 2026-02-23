import Image from 'next/image';
import Link from 'next/link';
import Button from "@/components/ui/Button";

const Product = ({ product, badge, index }) => {

  return (
    <div className="group flex flex-col align-between">
      <div className="bg-off-white rounded-fluid-28 p-2 overflow-hidden">
        {/* New Badge */}
        <div className="relative">
          <span className="absolute top-0 left-0 bg-primary text-white text-sm font-semibold px-fluid-16 py-fluid-12 rounded-br-fluid-24 rounded-tl-fluid-24 z-10">{badge}</span>
          {/* Product Image */}
          <Link href={product.slug} className="relative w-full block  overflow-hidden rounded-fluid-24">
            <Image src={`/img/products/${index + 1}.jpg`} alt={product.title} width={200} height={200} className="object-cover  transition-transform duration-500 group-hover:scale-105 w-full h-full" />
            {/* As api image is not working for now we are using static image */}
            {/* <Image src={product.images[0]} alt={product.title} width={200} height={200} className="object-cover  transition-transform duration-500 group-hover:scale-105 w-full h-full" /> */}
          </Link>
        </div>
      </div>
      {/* Product Info */}
      <div className="mt-4">
        <h4 className="leading-[1.17] tracking-tight transition duration-300 hover:text-primary uppercase"><Link href={`product/${product.slug}`}>{product.title}</Link> </h4>
        <Button variant="darkGray" href={`product/${product.slug}`} className="w-full mt-2 md:mt-3 xl:mt-4 text-xs md:text-sm uppercase">
          View Product —
          <span className="text-secondary">${product.price}</span>
        </Button>
      </div>
    </div>
  );
};

export default Product;

