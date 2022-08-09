import ApiResponse from "./ApiResponse";

export interface CryptoClient {
  idMap: (
    listing_status: string,
    start: number,
    limit: number,
    sort: "id" | "cmc_rank",
    symbol: string,
    aux: string
  ) => Promise<CryptoIdMapResponse>;
}

export interface Platform {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  token_address: string;
}

export interface CryptoIdMap {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  is_active: number;
  status: string;
  first_historical_data: string;
  last_historical_data: string;
  platform: Platform;
}

export interface CryptoIdMapResponse extends ApiResponse<CryptoIdMap[]> {}
