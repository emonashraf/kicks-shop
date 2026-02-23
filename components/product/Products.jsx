import React from 'react'
import ProductCard from './Product'
import { fetchProducts } from '@/lib/product';

export default async function Products() {
  const products = await fetchProducts({ limit: 4 });
  {
    products.length === 0 && (
      <p className="text-center text-gray-500">No products available.</p>
    )
  }
  return (
    <>
      {
        products.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">
            {products.map((product, index) => (
              <ProductCard
                product={product}
                key={product.id}
                badge="NEW"
                index={index}
              />
            ))}
          </div>
        )
      }
    </>
  )
}
