'use client'
import { useCart } from '@/context/CartContext';
import React, { useEffect, useState, useTransition } from 'react'
import CartItem from './CartItem';

export default function CartItems() {
  const { cart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  if (!mounted) {
    // Render a consistent placeholder (matches server-side initial state)
    return <div className="space-y-6 mt-6 animate-pulse">Loading bag...</div>;
  }

  return (
    <div className="space-y-6 mt-6">
      {cart.length === 0 ? (
        <p className="text-center text-zinc-600">Your cart is empty.</p>
      ) : (
        cart.map((product, index) => (
          <CartItem key={`${product.id}-${product.size}-${index}`} product={product} />
        ))
      )}
    </div>
  )
}
