import ApiResponse from "./ApiResponse";

export interface FiatClient {
  idMap: (query?: FiatIdMapQueryParams) => Promise<FiatIdMapResponse>;
}

export interface FiatIdMapQueryParams {
  start?: number;
  limit?: number;
  sort?: "name" | "id";
  includeMetals?: boolean;
}

export interface FiatIdMap {
  id: number;
  name: string;
  sign: string;
  symbol: string;
}

export interface FiatIdMapResponse extends ApiResponse<FiatIdMap[]> {}
