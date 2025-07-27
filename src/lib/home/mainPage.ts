import { getUmbracoContent } from "@/lib/server/umbracoApi";
import { RawPersonalInfo, personalInfo, workInfo } from "@/types/mainPage";
import { stripHtml } from "@/utils/umbracoText";

export async function getHomePageData(): Promise<personalInfo> {
  const content = await getUmbracoContent({ path: "/" });
  if (!content || !content.properties) {
    throw new Error("Failed to fetch landing page data");
  }

  const raw = content.properties as unknown as RawPersonalInfo;

  const transformedItems: workInfo[] = raw.workCard.items.map((item) => {
    const data = item.content?.properties;

    return {
      jobName: data.jobName,
      companyName: data.companyName,
      startDate: data.startDate,
      endDate: data.endDate,
      urlLinks: data.urlLinks ?? [],
      activitiesList: data.activitiesList ?? [],
      jobSummary: {
        markup: data.jobSummary?.markup
          ? stripHtml(data.jobSummary.markup)
          : "contenido no disponible",
      },
    };
  });

  return {
    nameDev: raw.nameDev,
    jobTitle: raw.jobTitle,
    locationDev: raw.locationDev,
    phone: raw.phone,
    emailDev: raw.emailDev,
    workCard: {
      items: transformedItems,
    },
    summaryDev: {
      markup: raw.summaryDev?.markup
        ? stripHtml(raw.summaryDev.markup)
        : "contenido no disponible",
    },
  };
}
