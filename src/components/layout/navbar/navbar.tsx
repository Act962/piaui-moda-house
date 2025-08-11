import Image from "next/image";

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
  return (
    <header className="bg-black text-white px-4 md:px-8 h-24 items-center flex justify-between">
      <nav className="flex justify-between items-center w-full max-w-6xl mx-auto">
        <div>
          {/* Logo */}
          Logo
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
