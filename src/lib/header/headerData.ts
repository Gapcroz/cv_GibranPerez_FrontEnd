// src/lib/header/headerData.ts
import { getUmbracoContent } from "../server/umbracoApi";
import { HeaderProps, imageProps } from "@/types/header/header";

export async function getHeaderData(): Promise<HeaderProps | null> {
  try {
    const content = await getUmbracoContent({ path: "header" });
    if (!content || !content.properties) {
      throw new Error("No se encontró contenido del header.");
    }
    const {
      headerTitle,
      headerLogo,
      headerOptions,
      heroPrincipalTitle,
      heroSlogan,
      heroGifBackground,
    } = content.properties as unknown as HeaderProps;
    const UmbracoApiUrl = process.env.UMBRACO_API_URL;
    return {
      headerTitle: headerTitle,
      headerLogo: headerLogo.map((item: imageProps) => ({
        name: item.name,
        url: `${UmbracoApiUrl}${item.url}`,
      })),
      headerOptions: headerOptions.map((option: string) => option.trim()),
      heroPrincipalTitle: heroPrincipalTitle,
      heroSlogan: heroSlogan,
      heroGifBackground: heroGifBackground.map((item: imageProps) => ({
        name: item.name,
        url: `${UmbracoApiUrl}${item.url}`,
      })),
    };
  } catch (error) {
    console.error("Error fetching header data:", error);
    return null;
  }
}
