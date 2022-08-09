import { CryptoClient } from "../interfaces/Crypto";
import { invoke } from "../request";
import { idMap } from "./idMap";

export const cryptoClient = (
  apiKey: string,
  apiVersion: string,
  apiBase: string
): CryptoClient => ({
  idMap: invoke(apiKey, apiBase, apiVersion, idMap),
});
