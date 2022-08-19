import ApiResponse from "./ApiResponse";

export interface ExchangeClient {
  idMap: (query?: ExchangeIdMapQueryParams) => Promise<ExchangeIdMapResponse>;
}

export interface ExchangeIdMapQueryParams {
  listingStatus?: string;
  slug?: string;
  start?: number;
  limit?: number;
  sort?: "volume_24h" | "id";
  aux?: string;
  cryptoId?: string;
}

export interface Exchange {
  id: number;
  name: string;
  slug: string;
  isActive: number;
  status: string;
  firstHistoricalData: string;
  lastHistoricalData: string;
}

export interface ExchangeIdMapResponse extends ApiResponse<Exchange[]> {}
