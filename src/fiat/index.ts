import { FiatClient } from "../interfaces/Fiat";
import { invoke } from "../request";
import { idMap } from "./idMap";

export const fiatClient = (
  apiKey: string,
  apiVersion: string,
  apiBase: string
): FiatClient => ({
  idMap: invoke(apiKey, apiBase, apiVersion, idMap),
});
