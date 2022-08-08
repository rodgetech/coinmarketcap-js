import { cryptoClient, ICryptoClient } from "./crypto";

export interface IRestClient {
  crypto: ICryptoClient;
}

export const restClient = (
  apiKey: string,
  apiVersion = "v2",
  apiBase = "https://pro-api.coinmarketcap.com"
): IRestClient => ({
  crypto: cryptoClient(apiKey, apiVersion, apiBase),
});

export default restClient;
