import React from "react";
import { Timeline } from "./timeline";

const timeline = [
  {
    date: "2023",
    description:
      "Data: 27 a 30 de outubro\nLocal: Hotel Blue Tree Tower Rio Poty, Teresina\nNome de destaque: Glória Coelho\nMarcas e estilistas locais: Otávio Menezes, Kalina Rameiro, Deura Melo, Gilvana Lima, Igor Leite, La Vertu, Vesture, Pintos, Villa Dellux e outros.",
  },
  {
    date: "2023",
    description:
      "Data: 29 de novembro\nLocal: Audi Center Teresina\nNome do evento: Piauí Moda House Fashion Day\nNome do destaque: Ronaldo Fraga.",
  },
  {
    date: "2023",
    description:
      "Data: 29 de novembro\nLocal: Audi Center Teresina\nNome do evento: Piauí Moda House Fashion Day\nNome do destaque: Ronaldo Fraga.",
  },
  {
    date: "2023",
    description:
      "Data: 29 de novembro\nLocal: Audi Center Teresina\nNome do evento: Piauí Moda House Fashion Day\nNome do destaque: Ronaldo Fraga.",
  },
  {
    date: "2023",
    description:
      "Data: 29 de novembro\nLocal: Audi Center Teresina\nNome do evento: Piauí Moda House Fashion Day\nNome do destaque: Ronaldo Fraga.",
  },
  {
    date: "2023",
    description:
      "Data: 29 de novembro\nLocal: Audi Center Teresina\nNome do evento: Piauí Moda House Fashion Day\nNome do destaque: Ronaldo Fraga.",
  },
];

export default function TimelineSection() {
  return (
    <section className="px-4 md:px-8 py-32 text-center">
      <h2 className="font-medium tracking-widest text-xl uppercase">
        Linha do Tempo
      </h2>

      <Timeline items={timeline} className="mt-14" />
    </section>
  );
}
