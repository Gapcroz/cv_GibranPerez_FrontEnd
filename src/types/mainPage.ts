// Crudo desde Umbraco
export interface RawWorkItem {
  content: {
    properties: workInfo;
  };
}

export interface RawPersonalInfo {
  nameDev: string;
  jobTitle: string;
  locationDev: string;
  phone: string;
  emailDev: string;
  workCard: {
    items: RawWorkItem[];
  };
  summaryDev: MarkupText;
}

// Procesado
export interface personalInfo {
  nameDev: string;
  jobTitle: string;
  locationDev: string;
  phone: string;
  emailDev: string;
  workCard: {
    items: workInfo[];
  };
  summaryDev: MarkupText;
}

export interface workInfo {
  jobName: string;
  companyName: string;
  startDate: string | Date;
  endDate: string;
  jobSummary: MarkupText;
  urlLinks: string[];
  activitiesList: string[];
}

export interface MarkupText {
  markup: string;
}
