import { Button } from "@/components/button";
import Image from "next/image";

export const partners = [
  {
    logo: "/setur.png",
    name: "Setur",
  },
  {
    logo: "/sebrae.png",
    name: "Sebrae",
  },
  {
    logo: "/sebrae-moda.png",
    name: "Sebrae Moda",
  },
  {
    logo: "/fashionmeeting.png",
    name: "Fashion Meeting",
  },
];

export function PartnerSection() {
  return (
    <section className="px-4 md:px-8 py-24 text-center">
      <h2 className="font-medium tracking-widest text-xl uppercase">
        Parceiros
      </h2>

      <div className="w-full max-w-6xl mx-auto mt-12">
        <div className="flex flex-col sm:flex-row items-center gap-8 px-8 py-8 sm:py-16 justify-around bg-[#E3E3E3] rounded-xl">
          {partners.map((partner, index) => (
            <div key={`${index}-${partner.name}`} className="">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={140}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center flex-col mt-18 gap-4">
          <h2 className=" tracking-widest text-sm">
            Associe sua marca à cultura, inovação e a moda que faz história
          </h2>
          <Button variant="secondary">Seja um parceiro</Button>
        </div>
      </div>
    </section>
  );
}
