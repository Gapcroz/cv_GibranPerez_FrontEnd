import { getUmbracoContent } from "@/lib/server/umbracoApi";
import { personalInfo } from "@/types/mainPage";
import { UmbracoContent } from "@/types/umbraco";
import { stripHtml } from "@/utils/umbracoText";

export async function getHomePageData(): Promise<personalInfo> {
  const content = await getUmbracoContent({ path: "/" });
  if (!content || !content.properties) {
    throw new Error("Failed to fetch landing page data");
  }
  const { properties } = content as UmbracoContent;
  return {
    nameDev: properties.nameDev,
    jobTitle: properties.jobTitle,
    locationDev: properties.locationDev,
    phone: properties.phone,
    emailDev: properties.emailDev,
    workCard: {
      items: properties.workCard.items.map(
        (item: { content: { properties: any } }) => ({
          jobName: item.content.properties.jobName,
          companyName: item.content.properties.companyName,
          startDate: new Date(item.content.properties.startDate),
          endDate: item.content.properties.endDate,
          jobSummary: {
            markup: item.content.properties.jobSummary?.markup
              ? stripHtml(item.content.properties.jobSummary?.markup)
              : "contenido no disponible",
          },
          urlLinks: item.content.properties.urlLinks || [],
          activitiesList: item.content.properties.activitiesList || [],
        })
      ),
    },
    summaryDev: {
      markup: properties.summaryDev?.markup
        ? stripHtml(properties.summaryDev?.markup)
        : "contenido no disponible",
    },
  };
}
