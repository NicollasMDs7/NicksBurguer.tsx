"use client";

import Image from "next/image";

export function SobreNos() {
  return (
    <section className="flex justify-center p-4 sm:p-8">
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
      </div>
    </section>
  );
}
