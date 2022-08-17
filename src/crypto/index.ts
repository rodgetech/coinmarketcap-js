import { CryptoClient } from "../interfaces/Crypto";
import { invoke } from "../request";
import { categories } from "./categories";
import { category } from "./category";
import { idMap } from "./idMap";
import { info } from "./info";
import { latestQuotes } from "./latestQuotes";

export const cryptoClient = (
  apiKey: string,
  apiVersion: string,
  apiBase: string
): CryptoClient => ({
  idMap: invoke(apiKey, apiBase, apiVersion, idMap),
  latestQuotes: invoke(apiKey, apiBase, apiVersion, latestQuotes),
  categories: invoke(apiKey, apiBase, apiVersion, categories),
  category: invoke(apiKey, apiBase, apiVersion, category),
  info: invoke(apiKey, apiBase, apiVersion, info),
});
