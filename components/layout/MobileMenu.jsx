"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    if (isOpen) {

      const frame = requestAnimationFrame(() => {
        setShowPanel(true);
      });
      return () => cancelAnimationFrame(frame);
    } else {
      const timeout = setTimeout(() => setShowPanel(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="cursor-pointer">
          <Menu size={24} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="p-0 bg-transparent border-none shadow-none [&>button]:hidden pointer-events-none"
      >
        <div
          className={`
            h-full w-[85%] max-w-[320px] bg-white p-6 shadow-2xl flex flex-col
            pointer-events-auto will-change-transform
            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${(isOpen && showPanel) ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
          `}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <SheetTitle className="font-heading font-bold text-2xl uppercase italic tracking-tighter">
              Menu
            </SheetTitle>

            <SheetClose asChild>
              <button
                className="p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <X size={30} strokeWidth={2.5} />
              </button>
            </SheetClose>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-6 text-xl font-bold font-heading tracking-tight">
            <Link href="/" onClick={() => setIsOpen(false)}>NEW DROPS 🔥</Link>
            <Link href="/" onClick={() => setIsOpen(false)}>MEN</Link>
            <Link href="/" onClick={() => setIsOpen(false)}>WOMEN</Link>
          </nav>

          {/* Bottom */}
          <div className="mt-auto pt-6 border-t border-zinc-100">
            <div className="flex flex-col gap-4 text-sm font-semibold text-zinc-400 uppercase italic">
              <Link href="/" onClick={() => setIsOpen(false)}>My Account</Link>
              <Link href="/" onClick={() => setIsOpen(false)}>Track Order</Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}