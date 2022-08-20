import {
  PriceConversionQueryParams,
  PriceConversionResponse,
} from "../interfaces/Tools";
import { get } from "../request";

export const priceConversion = async (
  apiKey: string,
  apiBase: string,
  apiVersion: string,
  query?: PriceConversionQueryParams
): Promise<PriceConversionResponse> =>
  get(apiBase, "tools/price-conversion", apiVersion, apiKey, query);
