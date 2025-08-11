import Image from "next/image";
import React from "react";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-96px)] flex items-center justify-center">
      <Image
        src="/hero.jpg"
        fill
        alt="Hero Image"
        className=" bg-cover bg-right bg-no-repeat brightness-75"
        quality={100}
      />
    </section>
  );
}
