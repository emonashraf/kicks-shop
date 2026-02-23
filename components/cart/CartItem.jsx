import Image from 'next/image';
import { SelectDemo } from '../ui/SelectDemo';
import { Heart, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartItem({ product }) {
  const { deleteCartItem } = useCart();
  const handleDelete = () => {
    deleteCartItem(product);
  }
  return (
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
            <h3 className="text-fluid-24">{product?.title}</h3>
            <div className=' space-y-2'>
              <p className="text-fluid-20 font-semibold">{product.category.name}</p>
              <p className="text-fluid-20 font-semibold">{product.color}</p>
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
          <span className="text-primary text-fluid-24 font-heading font-semibold leading-0">${product.price}</span>
        </div>
        <div className="flex gap-4 mt-fluid-48">
          <button className="p-1 hover:text-primary transition-colors">
            <Heart size={22} />
          </button>

          <button className="p-1 hover:text-red-500 transition-colors" onClick={handleDelete}>
            <Trash2 size={22} />
          </button>
        </div>
      </div>
    </div>
  )
}
