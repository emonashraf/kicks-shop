import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";


export default function NewsletterSection() {
  return (
    <div className="px-fluid-72 pt-fluid-72 pb-10 flex flex-col gap-8 lg:flex-row justify-between lg:items-center  relative z-10">
      <div className="lg:max-w-xl">
        <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-5xl font-black uppercase leading-tight tracking-tighter mb-fluid-16">
          Join our KicksPlus Club & get 15% off
        </h2>
        <p className="text-body-bg text-lg">Sign up for free! Join the community.</p>
        <div className="mt-fluid-32 flex  gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="bg-transparent border border-white rounded-xl px-4  sm:px-5 md:px-6 lg:px-7 xl:px-8 py-2.5 md:py-2.5 lg:py-3 xl:py-3.5 text-sm text-white placeholder:text-white/50 focus:outline-none w-full lg:w-75"
          />
          <Button variant="darkGray" text="SUBMIT" />
        </div>
      </div>
      {/* Logo in Blue Box */}
      <div className="relative max-w-47.5 xl:max-w-87.5">
        <Link className="block" href="/">
          <Image src="/img/logo/white-logo.png" alt="logo" width={200} height={300} className="w-full h-full object-contain" />
          <span className=" absolute -top-2.5 lg:-top-4 xl:-top-6 -right-3 lg:-right-5.5 xl:-right-4.5 bg-secondary text-primary w-4.25 h-4.25 lg:w-6.5 lg:h-6.5 grid place-items-center rounded-full"><Plus className="w-3.25 h-3.25 md:w-4 md:h-4" /></span>
        </Link>
      </div>
    </div>
  )
}
