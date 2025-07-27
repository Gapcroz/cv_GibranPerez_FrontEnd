import { FooterProps } from "@/types/footer";
import Image from "next/image";

const Footer = ({
  footerTitle,
  footerLogo,
  footerSocialMediaImage,
  footerCopyrightNotice,
}: FooterProps) => {
  const imageUrl = footerLogo[0]?.url || "";
  const altText = footerLogo[0]?.name || "Hero Background";
  return (
    <footer>
      <h1>{footerTitle}</h1>
      <Image
        src={imageUrl}
        alt={altText}
        width={50}
        height={50}
        className="object-cover z-[-1]"
        priority
      />
      {footerSocialMediaImage.map((socialMedia, index) => (
        <Image
          key={index}
          src={socialMedia.url}
          alt={socialMedia.name}
          width={50}
          height={50}
          className="social-media-icon"
        />
      ))}
      <h1>{footerCopyrightNotice}</h1>
    </footer>
  );
};

export default Footer;
