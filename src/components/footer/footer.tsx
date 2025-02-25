import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white py-4 fixed bottom-0 w-full z-[100]">
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-[70%] flex justify-center items-center gap-8 border-2 border-black p-2 rounded-full sm:hidden">
          <div className="w-12 flex justify-center">
            <Link href="/menu" passHref>
              <Facebook />
            </Link>
          </div>

          <div className="w-12 flex justify-center">
            <a
              href="https://wa.me/5511979686224?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20poderia%20me%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer" // Adiciona segurança ao abrir links em novas abas
            >
              <Phone />
            </a>
          </div>

          <div className="w-12 flex justify-center">
            <a href="https://www.instagram.com/nick.s_burguer?igsh=dXFzZDk0emVqcWFt">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
