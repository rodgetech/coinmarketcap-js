import ApiResponse from "./ApiResponse";

export interface CryptoClient {
  idMap: (query?: IdMapQueryParams) => Promise<CryptoIdMapResponse>;
  latestQuotes: (
    query?: LatestQuotesQueryParams
  ) => Promise<LatestQuotesResponse>;
}

export interface Platform {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  tokenAddress: string;
}

export type IdMapQueryParams = {
  listingStatus?: string;
  start?: number;
  limit?: number;
  sort?: "id" | "cmc_rank";
  symbol?: string;
  aux?: string;
};

export interface CryptoIdMap {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  isActive: number;
  status: string;
  firstHistoricalData: string;
  lastHistoricalData: string;
  platform: Platform;
}

export interface CryptoIdMapResponse extends ApiResponse<CryptoIdMap[]> {}

export interface LatestQuotesQueryParams {
  id?: number;
  slug?: string;
  symbol?: string;
  convert?: string;
  convertId?: string;
  aux?: string;
  skipInvalid?: boolean;
}

export interface LatestQuotes {
  [k: string]: {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    isActive: number;
    isFiat: number;
    circulatingSupply: number;
    totalSupply: number;
    maxSupply: number;
    dateAdded: string;
    numMarketPairs: number;
    cmcRank: number;
    lastUpdated: string;
    tags: string[];
    platform: Platform;
    selfReportedCirculatingSupply: number;
    selfReportedMarketCap: number;
    quote: {
      [k: string]: {
        price: number;
        volume24h: number;
        volumeChange24h: number;
        volume24hReported: number;
        volume7d: number;
        volume7dReported: number;
        volume30d: number;
        volume30dReported: number;
        marketCap: number;
        marketCapDominance: number;
        fullyDilutedMarketCap: number;
        percentChange1h: number;
        percentChange24h: number;
        percentChange7d: number;
        percentChange30d: number;
        lastUpdated: string;
      };
    };
  };
}

export interface LatestQuotesResponse extends ApiResponse<LatestQuotes> {}
