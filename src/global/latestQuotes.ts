import {
  GlobalLatestQuotesQueryParams,
  GlobalLatestQuotesResponse,
} from "../interfaces/Global";
import { get } from "../request";

export const latestQuotes = async (
  apiKey: string,
  apiBase: string,
  apiVersion: string,
  query?: GlobalLatestQuotesQueryParams
): Promise<GlobalLatestQuotesResponse> =>
  get(apiBase, "global-metrics/quotes/latest", apiVersion, apiKey, query);
