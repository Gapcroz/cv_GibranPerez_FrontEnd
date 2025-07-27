// src/types/umbraco.ts
export interface UmbracoContent {
  contentType: string;
  name: string;
  createDate: string;
  updateDate: string;
  route: UmbracoRoute;
  id: string;
  properties: Record<string, unknown>;
  cultures: Record<string, unknown>;
}

export interface UmbracoRoute {
  path: string;
  startItem: {
    id: string;
    path: string;
  };
}