import { HeaderProps } from "@/types/header/header";

const Hero = ({ heroPrincipalTitle, heroSlogan }: HeaderProps) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="text-white text-center px-4">
        <h1
          className="drop-shadow-lg font-bebas 
                  text-6xl md:text-6xl lg:text-9xl font-bold 
                    "
        >
          {heroPrincipalTitle}
        </h1>
        <h4 className="text-xl md:text-4xl mt-4 drop-shadow-md font-pixel ">
          {heroSlogan}
        </h4>
      </div>
    </section>
  );
};

export default Hero;
