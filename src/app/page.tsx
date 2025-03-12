
import {Navbar} from "@/components/navbar/navbar";
import {Footer} from "@/components/footer/footer";
import {Inicio} from "@/components/inicio/inicio";
import { SobreNos } from "@/components/sobreNos/sobreNos";
import { Depoimentos } from "@/components/depoimentos/depoimentos";
import { Localizacao } from "@/components/localizacao/localizacao";
import { PreviaMenu } from "@/components/previaMenu/previaMenu";

export default function Home() {
   return (
     <section className="bg-black">
       <Navbar />
       <Depoimentos />
      
       <Localizacao />
       
       <Footer />
     </section>
   )
}
