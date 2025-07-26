import { getHomePageData } from "@/lib/home/mainPage";
export const dynamic = "force-dynamic";
export const revalidate = 10;

const MainPage = async () => {
  const {
    nameDev,
    jobTitle,
    locationDev,
    phone,
    emailDev,
    workCard,
    summaryDev,
  } = await getHomePageData();

  if (!summaryDev?.markup || !workCard?.items) {
    return <div>Error cargando el contenido</div>;
  }

  return (
    <div
      id="home"
      className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
    >
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <h1>{nameDev}</h1>
          <h1>{jobTitle}</h1>
          <h1>{locationDev}</h1>
          <h1>{phone}</h1>
          <h1>{emailDev}</h1>
          <div dangerouslySetInnerHTML={{ __html: summaryDev.markup }} />
        </div>
        {workCard.items.map((item, index) => (
          <div key={index}>
            <h2>{item.jobName}</h2>
            <h2>{item.companyName}</h2>
            <h2>{item.startDate.toString()}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: item.jobSummary?.markup }}
            />
            <ul>
              {item.urlLinks.map((link, index) => (
                <li key={index}>- {link}</li>
              ))}
            </ul>
            <ul>
              {item.activitiesList.map((activity, index) => (
                <li key={index}>- {activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>hello footer</p>
      </footer>
    </div>
  );
};

export default MainPage;
