

import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { Search, UserRound } from "lucide-react";
import CartCount from './CartCount';
import Container from './Container';

export default function Header() {
  return (
    <Container className="mt-8">
      <header className="bg-off-white rounded-fluid-24 p-fluid-32-16  relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <MobileMenu />
            </div>

            <nav className="hidden lg:flex gap-8 font-semibold font-heading uppercase tracking-wide">
              <Link href="/" className="hover:underline decoration-2 underline-offset-8">New Drops 🔥</Link>
              <Link href="/" className="hover:underline decoration-2 underline-offset-8">Men</Link>
              <Link href="/" className="hover:underline decoration-2 underline-offset-8">Women</Link>
            </nav>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <Link href="/" className="block">
              <Image src="/img/logo/logo.png" alt="logo" width={130} height={32} className="w-24 md:w-32 hover:opacity-80 transition-opacity" />
            </Link>
          </div>

          <div className="flex items-center gap-[clamp(0.625rem,1.5vw,2.5rem)]">
            <button className="transition-colors hidden sm:block outline-none hover:text-primary"><Search size={22} /></button>
            <button className=" transition-colors  outline-none hover:text-primary"><UserRound size={22} /></button>
            <CartCount />
          </div>
        </div>
      </header>
    </Container>
  )
}
