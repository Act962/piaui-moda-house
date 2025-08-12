import { ItemHorizontal, ItemVertical } from "./item";

const reasons = [
  {
    title: "Para marcas e designers",
    description:
      "Conexão com novos públicos, presença em mercados estratégicos e valorização da moda local.",
  },
  {
    title: "Para Marcas e Designers",
    description:
      "Conexão com novos públicos, presença em mercados estratégicos e valorização da moda local.",
  },
  {
    title: "Para Marcas e Designers",
    description:
      "Conexão com novos públicos, presença em mercados estratégicos e valorização da moda local.",
  },
];

const legacy = [
  {
    description: "Geração de renda e visibilidade para criadores locais.",
  },
  {
    description: "Incentivo ao empreendedorismo e à inovação.",
  },
  {
    description:
      "Preservação dos saberes tradicionais e da arquitetura histórica.",
  },
  {
    description: "Promoção da sustentabilidade e inclusão.",
  },
];

export function FaqSection() {
  return (
    <section className="px-4 md:px-8 py-32 text-center">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        <h2 className="font-medium tracking-widest text-xl uppercase">
          Por que participar
        </h2>

        <ItemVertical items={reasons} />

        <h2 className="font-medium tracking-widest text-xl uppercase">
          Impacto e legado
        </h2>

        <ItemHorizontal items={legacy} />
      </div>
    </section>
  );
}
