import { IdMapResponse, IdMapQueryParams } from "../interfaces/Crypto";
import { FiatIdMapQueryParams, FiatIdMapResponse } from "../interfaces/Fiat";
import { get } from "../request";

export const idMap = async (
  apiKey: string,
  apiBase: string,
  apiVersion: string,
  query?: FiatIdMapQueryParams
): Promise<FiatIdMapResponse> =>
  get(apiBase, "fiat/map", apiVersion, apiKey, query);
