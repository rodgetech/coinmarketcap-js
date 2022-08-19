import {
  ExchangeIdMapQueryParams,
  ExchangeIdMapResponse,
} from "../interfaces/Exchange";
import { get } from "../request";

export const idMap = async (
  apiKey: string,
  apiBase: string,
  apiVersion: string,
  query?: ExchangeIdMapQueryParams
): Promise<ExchangeIdMapResponse> =>
  get(apiBase, "exchange/map", apiVersion, apiKey, query);
