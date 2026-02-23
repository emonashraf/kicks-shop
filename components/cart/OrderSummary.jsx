'use client'
import { useCart } from '@/context/CartContext';
import React, { useEffect, useState, useTransition } from 'react'
import Link from 'next/link';
import Button from "@/components/ui/Button";

export default function OrderSummary() {
  const { cartCount, cartTotal } = useCart();
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  return (
    <div className="lg:col-span-1 space-y-fluid-24 py-5">
      <h2 className=" text-fluid-32 ">Order Summary</h2>
      <div className="space-y-4  text-[clamp(16px,1.5vw,20px)] font-samibol">

        <div className="flex items-center justify-between">
          <span>{mounted ? cartCount : 0} ITEM</span>
          <span className='text-dark-gray/80'>${mounted ? cartTotal.toFixed(2) : 0}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span className='text-dark-gray/80'>${mounted ? 6.99 : 0}</span>
        </div>
        <div className="flex justify-between">
          <span>Sales Tax</span>
          <span className='text-dark-gray/80'>-</span>
        </div>
        <div className="flex justify-between text-[clamp(20px,1.5vw,24px)] font-semibold font-heading">
          <span>Total</span>
          <span className='text-dark-gray/80'>${mounted ? (cartTotal + 6.99).toFixed(2) : 0}</span>
        </div>
      </div>
      <Button variant='darkGray' text='CHECKOUT' className='w-full' />

      <Link href="/" className=" text-text-[clamp(16px,1.5vw,20px)] font-semibold underline decoration-1 block">
        User a promo code
      </Link>
    </div>
  )
}
