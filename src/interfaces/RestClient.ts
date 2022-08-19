import { CryptoClient } from "./Crypto";
import { ExchangeClient } from "./Exchange";
import { FiatClient } from "./Fiat";

export interface RestClient {
  crypto: CryptoClient;
  fiat: FiatClient;
  exchange: ExchangeClient;
}
