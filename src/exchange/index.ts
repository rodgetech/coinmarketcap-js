import { ExchangeClient } from "../interfaces/Exchange";
import { invoke } from "../request";
import { idMap } from "./idMap";
import { info } from "./info";

export const exchangeClient = (
  apiKey: string,
  apiVersion: string,
  apiBase: string
): ExchangeClient => ({
  idMap: invoke(apiKey, apiBase, apiVersion, idMap),
  info: invoke(apiKey, apiBase, apiVersion, info),
});
