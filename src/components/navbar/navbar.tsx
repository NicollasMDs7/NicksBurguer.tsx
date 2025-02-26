
import {

  ShoppingCart,
  Instagram,
  Facebook,
 
  Phone,
  MapPin,
  Utensils,
  Store,
} from "lucide-react";

import Link from "next/link";





export function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="w-screen  flex justify-between items-center px-4 py-2 border-b-2 border-black xfixed top-0 z-[50]">
        <div className="w-20 h-12 justify-center flex rounded-full">
          <img src="/logo.jpg" alt="logo" />
        </div>
        <div className="flex justify-center hidden sm:flex">
          <span className="px-8 font-serif text-lg font-bold whitespace-nowrap">
            Nicks Burguer
          </span>
        </div>

        <div className="w-full">
          <div className=" text-center">
            {/* Texto para celular */}
            <p className="sm:hidden font-serif text-lg font-bold">
              Nicks Burguer
            </p>

            {/* Texto para PC */}

            <div className="w-full flex justify-center gap-8 items-center">
              <div className="group hidden sm:flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-blue-500">
                <Link
                  href="/menu"
                  className="group hidden sm:flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-slate-500"
                >
                  <Utensils className="text-3xl group-hover:scale-110 transition-transform" />
                  <span className="font-sans text-lg font-semibold">Menu</span>
                </Link>
              </div>

              <div className="group hidden sm:flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-slate-500">
                <Store className="text-3xl group-hover:scale-110 transition-transform" />
                <span className="font-sans text-lg font-semibold">
                  Sobre nós
                </span>
              </div>

              <div className="group hidden sm:flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-slate-500">
                <MapPin className="text-3xl group-hover:scale-110 transition-transform" />
                <span className="font-sans text-lg font-semibold">
                  Localização
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <a href="https://wa.me/5511979686224?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20poderia%20me%20ajudar%3F">
            <Phone className="hidden sm:block" />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61573456281685&mibextid=wwXIfr&mibextid=wwXIfr">
            <Facebook className="hidden sm:block" />
          </a>

          <a href="https://www.instagram.com/nick.s_burguer?igsh=dXFzZDk0emVqcWFt">
            <Instagram className="hidden sm:block" />
          </a>
          <a href="">
            <ShoppingCart />
          </a>
        </div>
      </div>
    </header>
  );
}
