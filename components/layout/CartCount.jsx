'use client'
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import React, { useEffect, useState, useTransition } from 'react'

export default function CartCount() {
  const { cartCount } = useCart();
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  return (
    <Link href="/cart" className="relative group outline-none">
      <span className="w-8 h-8 bg-secondary rounded-full grid place-items-center">
        {mounted ? cartCount : 0}
      </span>
    </Link>
  )
}