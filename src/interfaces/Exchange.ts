import ApiResponse from "./ApiResponse";

export interface ExchangeClient {
  idMap: (query?: ExchangeIdMapQueryParams) => Promise<ExchangeIdMapResponse>;
  info: (query?: ExchangeInfoQueryParams) => Promise<ExchangeInfoResponse>;
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

export interface ExchangeInfoQueryParams {
  id?: string;
  slug?: string;
  aux?: string;
}

export interface ExchangeUrl {
  website: string[];
  blog: string[];
  twitter: string[];
  chat: string[];
  fee: string[];
}

export interface ExchangeInfo {
  [k: string]: {
    id: number;
    name: string;
    slug: string;
    logo: string;
    description: string;
    dateLaunched: string;
    notice: string;
    weeklyVisits: number;
    spotVolumeUsd: number;
    urls: ExchangeUrl[];
  };
}

export interface ExchangeInfoResponse extends ApiResponse<ExchangeInfo> {}
