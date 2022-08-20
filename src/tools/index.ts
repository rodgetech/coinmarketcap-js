import { ToolsClient } from "../interfaces/Tools";
import { invoke } from "../request";
import { priceConversion } from "./priceConversion";

export const toolsClient = (
  apiKey: string,
  apiVersion: string,
  apiBase: string
): ToolsClient => ({
  priceConversion: invoke(apiKey, apiBase, apiVersion, priceConversion),
});
