"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const depoimentos = [
  {
    nome: "Lavínia Alves",
    mensagem:
      "Os melhores hambúrgueres que já provei! Atendimento impecável e ambiente incrível.",
    imagem: "/lavinia.jpeg",
  },
  {
    nome: "Maria Silva",
    mensagem:
      "Simplesmente delicioso! Ingredientes frescos e sabor incrível. Recomendo demais!",
    imagem: "/maria.jpeg",
  },
  {
    nome: "Julia Silva",
    mensagem:
      "Experiência maravilhosa! Hambúrguer suculento e muito bem preparado.",
    imagem: "/julia.jpeg",
  },
];

export function Depoimentos() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section className="flex justify-center w-full p-8 ">
      <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg text-center relative">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          O que nossos clientes dizem
        </h2>

        {/* Depoimento */}
        <div className="flex flex-col items-center">
          <img
            src={depoimentos[index].imagem}
            alt={depoimentos[index].nome}
            className="w-20 h-20 rounded-full object-cover border-2 border-green-500 shadow-md"
          />
          <p className="mt-4 text-gray-700 italic text-sm sm:text-base">
            "{depoimentos[index].mensagem}"
          </p>
          <p className="mt-2 font-semibold text-gray-900">
            {depoimentos[index].nome}
          </p>
        </div>

        {/* Controles do carrossel */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
