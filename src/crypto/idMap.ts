import { CryptoIdMapResponse } from "../interfaces/Crypto";
import { get } from "../request";

export const idMap = async (
  apiKey: string,
  apiBase: string,
  apiVersion: string
): Promise<CryptoIdMapResponse> =>
  get(apiBase, "cryptocurrency/map", apiVersion, apiKey);
