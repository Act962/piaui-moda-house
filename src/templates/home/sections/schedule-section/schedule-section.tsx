import { CardSchedule } from "./card-schedule";

const schedules = [
  {
    date: "29 de outubro",
    location: "São Paulo - SP",
    description:
      "PMH Mostra | Fashion Meeting Desfile de lançamento no coração da cidade que não dorme.",
  },
  {
    date: "30 de outubro",
    location: "Teresina - PI",
    description:
      "Desfile de lançamento na capital com o melhor da moda regional.",
  },
  {
    date: "03 de novembro",
    location: "Teresina - PI",
    description:
      "Imersão no universo da moda autoral para empreendedores e artistas locais.",
  },
];

export function ScheduleSection() {
  return (
    <section className="px-6 py-4 text-center">
      <h2 className="font-medium tracking-widest text-xl uppercase">
        PROGRAMAÇÃO
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mt-16 mx-auto">
        {schedules.map((schedule, index) => (
          <CardSchedule key={index} {...schedule} />
        ))}
      </div>
    </section>
  );
}
