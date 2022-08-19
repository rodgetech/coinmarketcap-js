import { CryptoClient } from "./Crypto";
import { ExchangeClient } from "./Exchange";
import { FiatClient } from "./Fiat";
import { GlobalClient } from "./Global";

export interface RestClient {
  crypto: CryptoClient;
  fiat: FiatClient;
  exchange: ExchangeClient;
  global: GlobalClient;
}
