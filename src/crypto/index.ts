import { CryptoClient } from "../interfaces/Crypto";
import { invoke } from "../request";
import { idMap } from "./idMap";
import { latestQuotes } from "./latestQuotes";

export const cryptoClient = (
  apiKey: string,
  apiVersion: string,
  apiBase: string
): CryptoClient => ({
  idMap: invoke(apiKey, apiBase, apiVersion, idMap),
  latestQuotes: invoke(apiKey, apiBase, apiVersion, latestQuotes),
});
