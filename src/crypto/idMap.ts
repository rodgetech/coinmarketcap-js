import { CryptoIdMapResponse, IdMapQueryParams } from "../interfaces/Crypto";
import { get } from "../request";

export const idMap = async (
  apiKey: string,
  apiBase: string,
  apiVersion: string,
  query?: IdMapQueryParams
): Promise<CryptoIdMapResponse> =>
  get(apiBase, "cryptocurrency/map", apiVersion, apiKey, query);
