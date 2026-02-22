
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { Search, UserRound} from "lucide-react";

export default function Header() {
  return (
    <div className="container mt-8">
      <header className="bg-off-white rounded-fluid-24 p-fluid-32-16  relative">
        <div className="flex justify-between items-center">

          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <MobileMenu />
            </div>

            <nav className="hidden lg:flex gap-8 font-medium font-rubik uppercase tracking-wide">
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
            <Link href="/cart" className="relative group outline-none">
              <span className="w-8 h-8 bg-secondary rounded-full grid place-items-center">0</span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
