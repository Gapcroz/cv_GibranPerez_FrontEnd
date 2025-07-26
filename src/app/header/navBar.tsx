// src/components/header/navBar.tsx
import Image from "next/image";
import Link from "next/link";
import { HeaderProps } from "@/types/header/header";

const NavBar = ({ headerTitle, headerLogo, headerOptions }: HeaderProps) => {
  const imageSize = 50;

  return (
    <div className="p-4 flex justify-between bg-black/40">
      <div className="flex items-center gap-4 w-[50%]">
        <Image
          src={headerLogo[0]?.url}
          alt={headerLogo[0]?.name}
          className=""
          width={imageSize}
          height={imageSize}
          priority
        />
        <h1>{headerTitle.toUpperCase()}</h1>
      </div>

      <nav className="flex justify-end items-center w-[50%]">
        <ul className="flex gap-4">
          {headerOptions.map((option, index) => (
            <li key={index}>
              <Link href={`#${option.toLowerCase()}`}>
                {option.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
