import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

import { Depoimentos } from "@/components/mais-pedidos/mais-pedidos";
import { Localizacao } from "@/components/localizacao/localizacao";
import { Cardapio } from "@/components/cardapio/cardapio";

export default function Home() {
  return (
    <section className="">
      <Navbar />
      <Depoimentos />
      <Cardapio />

      <Localizacao />

      <Footer />
    </section>
  );
}
