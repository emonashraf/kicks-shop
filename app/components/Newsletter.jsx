import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";


export default function Newsletter() {
  return (
    <div className=" px-18 pt-17.5 pb-10 flex flex-col md:flex-row justify-between items-center gap-8  relative z-10">
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight tracking-tighter mb-4">
          Join our KicksPlus Club & get 15% off
        </h2>
        <p className="text-white/80 text-lg">Sign up for free! Join the community.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="bg-transparent border border-white rounded-xl px-4 py-3.5 text-white placeholder:text-white/50 focus:outline-none w-full sm:w-[300px]"
          />
          <Button variant="darkGray" text="SUBMIT" />
        </div>
      </div>

      {/* Logo in Blue Box */}
      <div className="hidden relative lg:block">
        <Link className="  block" href="/">
          <Image src="/img/logo/white-logo.png" alt="logo" width={200} height={300} className="w-full h-full object-contain" />
          <span className=" absolute -top-8 -right-3 bg-secondary text-primary w-8 h-8 grid place-items-center rounded-full"><Plus /></span>
        </Link>
      </div>
    </div>
  )
}
