"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react"; // Ícones para os botões

  
const promocoes = [
  {
    nome: "Big Burguer",
    mensagem:
      "Pão de brioche, maionese verde, smach de carne, queijo mussarela, picles, alface, tomate e molho especial.",
    imagem: "/big-burguer.jpg",
    preco: "R$ 25,90",
  },
  {
    nome: "Gringos Burguer",
    mensagem:
      "Pão de brioche, maionese verde, hamburguer de carne, molho cheddar, picles e bacon",
    imagem: "/gringos.jpg",
    preco: "R$ 27,90",
  },
  {
    nome: "Salada Duplo",
    mensagem:
      "Pão de brioche, maionese verde, 2 smach de carne, queijo mussarela, alface e tomate",
    imagem: "/salada-duplo.jpg",
    preco: "R$ 29,90",
  },
];

export function Lanches() {
  const [selecionado, setSelecionado] = useState<number | null>(null);
  const [pedido, setPedido] = useState<{ [key: number]: { quantidade: number; adicionais: string } }>({});

  const atualizarPedido = (index: number, campo: "quantidade" | "adicionais", valor: string | number) => {
    setPedido((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [campo]: valor,
      },
    }));
  };

  const alterarQuantidade = (index: number, delta: number) => {
    setPedido((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        quantidade: Math.max(1, (prev[index]?.quantidade || 1) + delta), // Evita valores menores que 1
        adicionais: prev[index]?.adicionais || "",
      },
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {promocoes.map((lanche, index) => (
          <Card
            key={index}
            className="w-full max-w-xs p-3 shadow-md rounded-lg border cursor-pointer"
            onClick={() => setSelecionado(selecionado === index ? null : index)}
          >
            <CardContent className="flex flex-col items-center text-center">
              <img
                src={lanche.imagem}
                alt={lanche.nome}
                className="w-24 h-24 object-cover border-2 border-black shadow-md rounded-lg"
              />
              <p className="mt-2 text-gray-700 italic text-xs sm:text-sm">
                "{lanche.mensagem}"
              </p>
              <p className="mt-1 font-semibold text-gray-900 text-sm sm:text-base">
                {lanche.nome}
              </p>
              <p className="mt-1 font-bold text-md text-green-600">
                {lanche.preco}
              </p>
              {selecionado === index && (
                <div className="mt-3 w-full flex flex-col items-center">
                  <label className="text-sm font-medium">Quantidade:</label>
                  <div className="flex items-center gap-2 mt-1">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation(); // Impede o fechamento do card
                        alterarQuantidade(index, -1);
                      }}
                    >
                      <Minus size={16} />
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      value={pedido[index]?.quantidade || 1}
                      onChange={(e) => atualizarPedido(index, "quantidade", parseInt(e.target.value))}
                      className="w-12 text-center"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation(); // Impede o fechamento do card
                        alterarQuantidade(index, 1);
                      }}
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                  <label className="text-sm font-medium mt-2">Adicionais:</label>
                  <Input
                    type="text"
                    placeholder="Ex: Bacon extra"
                    value={pedido[index]?.adicionais || ""}
                    onChange={(e) => atualizarPedido(index, "adicionais", e.target.value)}
                    className="w-full mt-1"
                  />
                  <Button
                    className="mt-3 bg-green-600 text-white w-full"
                    onClick={(e) => e.stopPropagation()} // Impede o fechamento do card
                  >
                    Adicionar ao pedido
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}