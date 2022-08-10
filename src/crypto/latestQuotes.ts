import {
  LatestQuotesQueryParams,
  LatestQuotesResponse,
} from "../interfaces/Crypto";
import { get } from "../request";

export const latestQuotes = async (
  apiKey: string,
  apiBase: string,
  apiVersion: string,
  query?: LatestQuotesQueryParams
): Promise<LatestQuotesResponse> =>
  get(apiBase, "cryptocurrency/quotes/latest", apiVersion, apiKey, query);
