import { GlobalClient } from "../interfaces/Global";
import { invoke } from "../request";

import { latestQuotes } from "./latestQuotes";

export const globalClient = (
  apiKey: string,
  apiVersion: string,
  apiBase: string
): GlobalClient => ({
  latestQuotes: invoke(apiKey, apiBase, apiVersion, latestQuotes),
});
