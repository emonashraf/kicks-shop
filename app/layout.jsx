import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { Search, UserRound, Menu, X } from "lucide-react";
import { Rubik, Open_Sans } from "next/font/google";
import Footer from "./components/Footer";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import MobileMenu from "./components/MobileMenu";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} ${openSans.variable}`}>
      <body className="font-body bg-white text-zinc-900">
        <div className="container mt-8">
          <header className="bg-off-white rounded-3xl p-fluid-32-16 shadow-sm relative">
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

              <div className="flex items-center gap-3 md:gap-8">
                <button className="p-2 hover:bg-zinc-200/50 rounded-full transition-colors hidden sm:block outline-none"><Search size={22} /></button>
                <button className="p-2 hover:bg-zinc-200/50 rounded-full transition-colors hidden sm:block outline-none"><UserRound size={22} /></button>
                <Link href="/cart" className="relative group outline-none">
                  <span className="w-10 h-10 bg-[#FFD500] text-black font-black italic text-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">0</span>
                </Link>
              </div>
            </div>
          </header>
        </div>

        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}