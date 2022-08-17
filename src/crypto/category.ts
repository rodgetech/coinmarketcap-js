import { CategoryQueryParams, CategoryResponse } from "../interfaces/Crypto";
import { get } from "../request";

export const category = async (
  apiKey: string,
  apiBase: string,
  apiVersion: string,
  query?: CategoryQueryParams
): Promise<CategoryResponse> =>
  get(apiBase, "cryptocurrency/category", apiVersion, apiKey, query);
