import { invoke } from "../request";
import { idMap } from "./idMap";

export interface ICryptoClient {
  idMap: (
    listing_status: string,
    start: number,
    limit: number,
    sort: "id" | "cmc_rank",
    symbol: string,
    aux: string
  ) => Promise<any>;
}

export const cryptoClient = (
  apiKey: string,
  apiVersion: string,
  apiBase: string
): ICryptoClient => ({
  idMap: invoke(apiKey, apiBase, apiVersion, idMap),
});
