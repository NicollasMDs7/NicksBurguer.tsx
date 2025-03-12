"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const promocoes = [
  {
    nome: "Big Burguer",
    mensagem:
      "Pão de brioche, maionese verde, smach de carne, queijo mussarela, picles, alface, tomate e molho especial.", 
    imagem: "/big-burguer.jpg",
  },
  {
    nome: "Gringos Burguer",
    mensagem:
      "Pão de brioche, maionese verde, hamburguer de carne, molho cheddar, picles e bacon", 
    imagem: "/gringos.jpg",
  },
  {
    nome: "Salada Duplo",
    mensagem:
      "Pão de brioche, maionese verde, 2 smach de carne, queijo mussarela, alface e tomate", 
    imagem: "/salada-duplo.jpg",
  },
];

export function Depoimentos() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % promocoes.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + promocoes.length) % promocoes.length);
  };

  return (
    <section className="flex justify-center w-full p-8 ">
      <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg text-center relative">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          Os lanches mais pedidos
        </h2>

        {/* Depoimento */}
        <div className="flex flex-col items-center">
          <img
            src={promocoes[index].imagem}
            alt={promocoes[index].nome}
            className="w-20 h-20  object-cover border-2 border-black shadow-md"
          />
          <p className="mt-4 text-gray-700 italic text-sm sm:text-base">
            "{promocoes[index].mensagem}"
          </p>
          <p className="mt-2 font-semibold text-gray-900">
            {promocoes[index].nome}
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
