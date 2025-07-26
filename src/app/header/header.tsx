import NavBar from "@/app/header/navBar";
import Hero from "@/app/header/hero";
import { HeaderProps } from "@/types/header/header";
import Image from "next/image";

const Header = (props: HeaderProps) => {
  const { heroGifBackground } = props; 
  const imageUrl = heroGifBackground[0]?.url || "";
  const altText = heroGifBackground[0]?.name || "Hero Background";
  return (
    <header className="relative w-full h-screen overflow-hidden">
      <Image
        src={imageUrl}
        alt={altText}
        fill
        className="object-cover z-[-1]"
        priority
      />
      
      <NavBar {...props} />
      <Hero {...props} />
    </header>
  );
};

export default Header;
