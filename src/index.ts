import { cryptoClient } from "./crypto";
import { CryptoClient } from "./interfaces/Crypto";

export interface IRestClient {
  crypto: CryptoClient;
}

export const restClient = (
  apiKey: string,
  apiVersion = "v2",
  apiBase = "https://pro-api.coinmarketcap.com"
): IRestClient => ({
  crypto: cryptoClient(apiKey, apiVersion, apiBase),
});

export default restClient;
