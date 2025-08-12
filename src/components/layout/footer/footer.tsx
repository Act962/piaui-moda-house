import Image from "next/image";
import Link from "next/link";

const socialMedias = [
  {
    icon: "/icons/instagram-black.svg",
    link: "",
    alt: "Instagram",
  },
  {
    icon: "/icons/youtube-black.svg",
    link: "",
    alt: "Youtube",
  },
  {
    icon: "/icons/tiktok-black.svg",
    link: "",
    alt: "Tiktok",
  },
  {
    icon: "/icons/whatsapp-black.svg",
    link: "",
    alt: "Whatsapp",
  },
];

const links = [
  {
    text: "Termos de Condições de Uso",
    link: "",
  },
  {
    text: "Política de Privacidade",
    link: "",
  },
  {
    text: "Política de Cookies",
    link: "",
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white px-4 md:px-8 py-18">
      <div className="flex items-center justify-between">
        <Image
          src="/logo-pmh-branca.png"
          alt="Logo PM"
          width={180}
          height={180}
          className="object-contain"
        />
        {/* Redes socias */}
        <div className="flex gap-1.5">
          {socialMedias.map((socialMedia) => (
            <span
              key={socialMedia.alt}
              className="cursor-pointer bg-white p-1 rounded-full transition-all  ease-in hover:opacity-80"
            >
              <Image
                key={socialMedia.alt}
                src={socialMedia.icon}
                alt={socialMedia.alt}
                width={18}
                height={18}
              />
            </span>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-white my-8" />
      <div className="flex items-start justify-between">
        <span className="text-xs">Copyright &copy; 2025 PMH</span>

        <div className="flex flex-col gap-px text-end">
          {links.map((link, index) => (
            <Link
              href={link.link}
              key={`politicas-${index}`}
              className="text-xs font-light cursor-pointer hover:underline"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
