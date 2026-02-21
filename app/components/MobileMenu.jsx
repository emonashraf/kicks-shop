"use client"; // এই লাইনটা মাস্ট, নাহলে এরর যাবে না

import React, { useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileMenu() {

  const removeDefaultClose = () => {
    setTimeout(() => {
      const defaultButtons = document.querySelectorAll('button[type="button"]');
      defaultButtons.forEach((btn) => {
        if (btn.querySelector('svg.lucide-x') && !btn.classList.contains('my-custom-close')) {
          btn.style.display = 'none';
        }
      });
    }, 10);
  };

  return (
    <Sheet onOpenChange={(open) => open && removeDefaultClose()}>
      <SheetTrigger asChild>
        <button className="p-2 bg-white rounded-xl shadow-sm active:scale-90 transition-transform outline-none border-none">
          <Menu size={24} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="custom-sheet-anim fixed left-0 top-0 z-[100] h-full w-[80%] max-w-[320px] bg-white p-6 shadow-2xl border-none outline-none flex flex-col"
      >
        <div className="flex justify-between items-center mb-10">
          <SheetTitle className="font-rubik font-bold text-2xl uppercase italic tracking-tighter">
            Menu
          </SheetTitle>

          {/* আপনার কাস্টম ক্লোজ বাটন */}
          <SheetClose className="my-custom-close p-2 hover:bg-zinc-100 rounded-full transition-colors outline-none border-none">
            <X size={30} strokeWidth={2.5} className="text-black" />
          </SheetClose>
        </div>

        <nav className="flex flex-col gap-6 text-xl font-bold font-rubik tracking-tight">
          <Link href="/" className="hover:text-primary transition-all duration-300">NEW DROPS 🔥</Link>
          <Link href="/" className="hover:text-primary transition-all duration-300">MEN</Link>
          <Link href="/" className="hover:text-primary transition-all duration-300">WOMEN</Link>
          <Link href="/" className="hover:text-primary transition-all duration-300">KIDS</Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-zinc-100">
          <div className="flex flex-col gap-4 text-sm font-semibold text-zinc-400 uppercase italic">
            <Link href="/" className="hover:text-black">My Account</Link>
            <Link href="/" className="hover:text-black">Track Order</Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}