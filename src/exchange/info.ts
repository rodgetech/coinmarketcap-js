import {
  ExchangeInfoQueryParams,
  ExchangeInfoResponse,
} from "../interfaces/Exchange";
import { get } from "../request";

export const info = async (
  apiKey: string,
  apiBase: string,
  apiVersion: string,
  query?: ExchangeInfoQueryParams
): Promise<ExchangeInfoResponse> =>
  get(apiBase, "exchange/info", apiVersion, apiKey, query);
