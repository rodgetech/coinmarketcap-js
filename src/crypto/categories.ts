import {
  CategoriesResponse,
  CategoriesQueryParams,
} from "../interfaces/Crypto";
import { get } from "../request";

export const categories = async (
  apiKey: string,
  apiBase: string,
  apiVersion: string,
  query?: CategoriesQueryParams
): Promise<CategoriesResponse> =>
  get(apiBase, "cryptocurrency/categories", apiVersion, apiKey, query);
