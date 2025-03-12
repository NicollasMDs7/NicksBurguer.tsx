import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lanches } from "@/components/lanches/lanches";

export function Cardapio() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-[350px]">
        <CardContent>
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={["lanches", "porcoes", "bebidas"]}
          >
            <AccordionItem value="lanches">
              <AccordionTrigger>Lanches</AccordionTrigger>
              <AccordionContent>
                <Lanches />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="porcoes">
              <AccordionTrigger>Porções</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="bebidas">
              <AccordionTrigger>Bebidas</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
