"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const socialMedias = [
  {
    icon: "/icons/instagram.svg",
    link: "",
    alt: "Instagram",
  },
  {
    icon: "/icons/youtube.svg",
    link: "",
    alt: "Youtube",
  },
  {
    icon: "/icons/tiktok.svg",
    link: "",
    alt: "Tiktok",
  },
  {
    icon: "/icons/whatsapp.svg",
    link: "",
    alt: "Whatsapp",
  },
];
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const hanldeScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    hanldeScroll();

    window.addEventListener("scroll", hanldeScroll);

    return () => {
      window.removeEventListener("scroll", hanldeScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 text-white px-4 sm:px-8 py-6 items-center flex justify-between transition-all duration-300 ease-in-out",
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      )}
    >
      <nav className="flex justify-between items-center w-full max-w-6xl mx-auto">
        <div>
          <Image
            src="/logo-pmh-branca.png"
            alt="Logo PM"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>

        <div className="flex items-center gap-10">
          <button className="uppercase">Seja um parceiro</button>

          {/* Redes socias */}
          <div className="flex gap-4">
            {socialMedias.map((socialMedia) => (
              <Image
                key={socialMedia.alt}
                src={socialMedia.icon}
                alt={socialMedia.alt}
                width={18}
                height={18}
                className="cursor-pointer hover:opacity-85 transition-opacity"
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
