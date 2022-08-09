import { cryptoClient } from "./crypto";
import { RestClient } from "./interfaces/RestClient";

export const restClient = (
  apiKey: string,
  apiVersion = "v2",
  apiBase = "https://pro-api.coinmarketcap.com"
): RestClient => ({
  crypto: cryptoClient(apiKey, apiVersion, apiBase),
});

export default restClient;
