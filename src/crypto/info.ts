import { InfoQueryParams, InfoResponse } from "../interfaces/Crypto";
import { get } from "../request";

export const info = async (
  apiKey: string,
  apiBase: string,
  apiVersion: string,
  query?: InfoQueryParams
): Promise<InfoResponse> =>
  get(apiBase, "cryptocurrency/info", apiVersion, apiKey, query);
