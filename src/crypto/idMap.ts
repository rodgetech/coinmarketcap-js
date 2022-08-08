import { get } from "../request";

export const idMap = async (
  apiKey: string,
  apiBase: string,
  apiVersion: string
): Promise<any> => get(apiBase, "cryptocurrency/map", apiVersion, apiKey);
