import { CardSchedule } from "./card-schedule";

export function ScheduleSection() {
  return (
    <section className="px-4 md:px-8 py-10 text-center">
      <h2 className="font-medium tracking-widest text-xl uppercase">
        PROGRAMAÇÃO
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 mx-auto">
        <CardSchedule
          date="29 de outubro"
          location="São Paulo - SP"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quos expedita iste"
        />
        <CardSchedule
          date="29 de outubro"
          location="São Paulo - SP"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quos expedita iste"
        />
        <CardSchedule
          date="29 de outubro"
          location="São Paulo - SP"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quos expedita iste"
        />
      </div>
    </section>
  );
}
