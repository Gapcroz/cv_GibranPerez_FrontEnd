import { getUmbracoContent } from "../server/umbracoApi";
import { FooterProps, imageProps } from "@/types/footer";

export async function getFooterData(): Promise <FooterProps | null> {
  try {
    const content = await getUmbracoContent({ path: "footer" });
    if (!content || !content.properties) {
      throw new Error("No se encontró contenido del footer.");
    }
    const {
      footerTitle,
      footerLogo,
      footerSocialMediaImage,
      footerCopyrightNotice,
    } = content.properties as unknown as FooterProps;
    const UmbracoApiUrl = process.env.UMBRACO_API_URL;

    return {
      footerTitle: footerTitle,
      footerLogo: footerLogo.map((item: imageProps) => ({
        name: item.name,
        url: `${UmbracoApiUrl}${item.url}`,
      })),
      footerSocialMediaImage: footerSocialMediaImage.map(
        (item: imageProps) => ({
          name: item.name,
          url: `${UmbracoApiUrl}${item.url}`,
        })
      ),
      footerCopyrightNotice: footerCopyrightNotice,
    };
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return null;
  }
}