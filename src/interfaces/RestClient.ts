import { CryptoClient } from "./Crypto";
import { FiatClient } from "./Fiat";

export interface RestClient {
  crypto: CryptoClient;
  fiat: FiatClient;
}
