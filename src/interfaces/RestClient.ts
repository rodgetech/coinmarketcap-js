import { CryptoClient } from "./Crypto";
import { ExchangeClient } from "./Exchange";
import { FiatClient } from "./Fiat";
import { GlobalClient } from "./Global";
import { ToolsClient } from "./Tools";

export interface RestClient {
  crypto: CryptoClient;
  fiat: FiatClient;
  exchange: ExchangeClient;
  global: GlobalClient;
  tools: ToolsClient;
}
