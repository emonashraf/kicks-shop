import { notFound } from "next/navigation";
import ProductDetailsBanner from '@/components/product/ProductDetailsBanner';
import ProductDetailsInfo from '@/components/product/ProductDetailsInfo';
import RelatedProducts from "@/components/product/RelatedProducts";
import { fetchProduct } from "@/lib/product";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await fetchProduct(slug);

  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.title} | Your Store`,
    description: product.description,
  };
}

// Separate fetch logic for reuse and clarity
export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await fetchProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className='mt-8 mb-32'>
        <Container>
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LEFT COLUMN: Images/Banner */}
            <ProductDetailsBanner product={product} />

            {/* RIGHT COLUMN: Product Information */}
            <ProductDetailsInfo product={product} />
          </div>
        </Container>
      </div>

      <RelatedProducts />

    </>
  );
}