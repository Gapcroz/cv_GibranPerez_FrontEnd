// lib/server/umbracoApi.ts
import { UmbracoContent } from "@/types/umbraco";

const UMBRACO_API_URL = process.env.UMBRACO_API_URL;
const API_KEY = process.env.UMBRACO_API_KEY;

export async function getUmbracoContent({
  path,
  culture = "en-us",
  fields = "properties[$all]",
}: {
  path: string;
  culture?: string;
  fields?: string;
}): Promise<UmbracoContent> {
  try {
    const apiUrl = `${UMBRACO_API_URL}/umbraco/delivery/api/v2/content/item/${encodeURIComponent(
      path
    )}?fields=${fields}`;
    const cacheTag = `umbraco-content:${path}`;

    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        ...(API_KEY && { "Api-Key": API_KEY }),
        "Accept-Language": culture,
      },
      next: {
        revalidate: 10, // Revalidate every 10 seconds (adjust as needed)
        tags: [cacheTag],
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Contenido no encontrado.");
      }
      throw new Error(`API Error: ${response.status}`);
    }

    const content = await response.json();
    return content;
  } catch (error) {
    console.error("Error al obtener contenido de Umbraco:", error);
    throw error;
  }
}
