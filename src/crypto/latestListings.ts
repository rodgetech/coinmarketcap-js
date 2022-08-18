import {
  LatestListingsQueryParams,
  LatestListingsResponse,
} from "../interfaces/Crypto";
import { get } from "../request";

export const latestListings = async (
  apiKey: string,
  apiBase: string,
  apiVersion: string,
  query?: LatestListingsQueryParams
): Promise<LatestListingsResponse> =>
  get(apiBase, "cryptocurrency/listings/latest", apiVersion, apiKey, query);
