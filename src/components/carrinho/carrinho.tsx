"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["faixada.jpg", "lanches.jpg", "logo.jpg"];

export function Carrinho() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexMobile, setCurrentIndexMobile] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlideMobile = () => {
    setCurrentIndexMobile((prev) => (prev + 1) % images.length);
  };

  const prevSlideMobile = () => {
    setCurrentIndexMobile((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center p-4 sm:p-8 gap-6">
      {/* Card Sobre Nós */}
      <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 max-w-sm sm:max-w-lg w-full">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Sobre Nós
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          Somos uma hamburgueria artesanal apaixonada por sabores autênticos e
          ingredientes de qualidade. Cada hambúrguer é preparado com carne
          fresca, pão artesanal e acompanhamentos feitos com carinho. Venha
          viver essa experiência única!
        </p>

        {/* Carrossel - visível apenas no celular */}
        <div className="flex sm:hidden items-center justify-center relative w-full mt-4 overflow-hidden rounded-2xl shadow-md">
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            onClick={prevSlideMobile}
          >
            <ChevronLeft size={24} />
          </button>
          <img
            src={images[currentIndexMobile]}
            alt="Hambúrguer artesanal"
            className="w-full h-[200px] object-cover rounded-2xl"
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            onClick={nextSlideMobile}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Carrossel - visível apenas no desktop */}
      <div className="hidden lg:flex items-center relative w-[300px] h-[200px] overflow-hidden rounded-2xl shadow-lg">
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
        <img
          src={images[currentIndex]}
          alt="Hambúrguer artesanal"
          className="w-full h-full object-cover rounded-2xl"
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}