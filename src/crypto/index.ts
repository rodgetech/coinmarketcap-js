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

/**
 * Returns methods to query data around cryptocurrencies such as ordered cryptocurrency lists or price and volume data.
 *
 * @param apiKey - Account API key
 * @param apiVersion - API version
 * @param apiBase - API base url
 * @returns ICryptoClient
 */
export const cryptoClient = (
  apiKey: string,
  apiVersion: string,
  apiBase: string
): ICryptoClient => ({
  idMap: invoke(apiKey, apiBase, apiVersion, idMap),
});
