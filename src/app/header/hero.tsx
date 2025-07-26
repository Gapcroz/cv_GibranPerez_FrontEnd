import { HeaderProps } from "@/types/header/header";

const Hero = ({ heroPrincipalTitle, heroSlogan }: HeaderProps) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          {heroPrincipalTitle}
        </h1>
        <h4 className="text-xl md:text-2xl mt-4 drop-shadow-md">
          {heroSlogan}
        </h4>
      </div>
    </section>
  );
};

export default Hero;
