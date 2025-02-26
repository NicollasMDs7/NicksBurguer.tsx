import * as React from "react";

export function Inicio() {
  return (
    <section>
      <div className="flex justify-center w-full p-8 bg-center h-auto md:mt-0">
        <div className="w-full max-w-7xl flex flex-col md:flex-row md:space-x-4">
          {/* Imagem com hover (visível em celular) */}
          <div className="w-full md:w-[45%] h-auto flex justify-center items-center relative md:p-4">
            {/* Aumenta a imagem em desktop e reduz o padding */}
            <img
              src="faixada.jpg"
              alt="faixada"
              className="w-full h-auto object-cover shadow-md rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-lg p-4 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              Seja bem-vinda ao Nick's! 🍔
            </div>
          </div>

          {/* Texto (escondido em celular, visível em desktop) */}
          <div className="w-full md:w-[55%] p-4 md:p-4 flex justify-center items-center hidden md:block">
            <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 flex justify-center items-center text-center">
              <p className="text-lg text-gray-700">
                🍔 Bem-vindo ao Nick's Burger! 🍔 Aqui no Nick's Burger, a arte
                do hambúrguer artesanal é nossa paixão! Com ingredientes
                frescos, receitas exclusivas e muito amor, criamos hambúrgueres
                que vão deixar o seu paladar pedindo mais. Cada mordida é uma
                explosão de sabor feita especialmente para você, seja para uma
                refeição rápida ou para curtir com a galera. No nosso cardápio,
                você encontra opções irresistíveis que combinam qualidade, sabor
                e aquele toque especial que só o Nick's Burger pode oferecer.
                Agradecemos por escolher o Nick's Burger. Estamos prontos para
                surpreender o seu apetite! 😋
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
