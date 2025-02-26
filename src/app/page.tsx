
import {Navbar} from "@/components/navbar/navbar";
import {Footer} from "@/components/footer/footer";
import {Inicio} from "@/components/inicio/inicio";
import { SobreNos } from "@/components/sobreNos/sobreNos";
import { Depoimentos } from "@/components/depoimentos/depoimentos";
import { Localização } from "@/components/localizacao/localizacao";
import { PreviaMenu } from "@/components/previaMenu/previaMenu";

export default function Home() {
   return (
     <section>
       <Navbar />
       <Inicio />
       <SobreNos />
       <PreviaMenu  />
       <Depoimentos />
       <Localização />
       
       <Footer />
     </section>
   )
}
