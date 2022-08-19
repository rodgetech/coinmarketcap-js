import { cryptoClient } from "./crypto";
import { exchangeClient } from "./exchange";
import { fiatClient } from "./fiat";
import { globalClient } from "./global";
import { RestClient } from "./interfaces/RestClient";

export const restClient = (
  apiKey: string,
  apiVersion = "v1",
  apiBase = "https://pro-api.coinmarketcap.com"
): RestClient => ({
  crypto: cryptoClient(apiKey, apiVersion, apiBase),
  fiat: fiatClient(apiKey, apiVersion, apiBase),
  exchange: exchangeClient(apiKey, apiVersion, apiBase),
  global: globalClient(apiKey, apiVersion, apiBase),
});

export default restClient;
