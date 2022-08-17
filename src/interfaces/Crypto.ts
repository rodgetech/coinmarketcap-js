import ApiResponse from "./ApiResponse";

export interface CryptoClient {
  idMap: (query?: IdMapQueryParams) => Promise<IdMapResponse>;
  latestQuotes: (
    query?: LatestQuotesQueryParams
  ) => Promise<LatestQuotesResponse>;
  categories: (query?: CategoriesQueryParams) => Promise<CategoriesResponse>;
  category: (query?: CategoryQueryParams) => Promise<CategoryResponse>;
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

export interface IdMap {
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

export interface IdMapResponse extends ApiResponse<IdMap[]> {}

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

export interface CategoriesQueryParams {
  start?: number;
  limit?: number;
  id?: string;
  slug?: string;
  symbol?: string;
}

export interface CategoriesData {
  id: number;
  name: string;
  title: string;
  description: string;
  numTokens: number;
  avgPriceChange: number;
  marketCap: number;
  marketCapChange: number;
  volume: number;
  volumeChange: number;
  lastUpdated: number;
}

export interface CategoriesResponse extends ApiResponse<CategoriesData[]> {}

export interface CategoryQueryParams {
  id: string;
  start?: number;
  limit?: number;
  convert?: string;
  convert_id?: string;
}

export interface Coin {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmcRank: number;
  numMarketPairs: number;
  circulatingSupply: number;
  totalSupply: number;
  marketCapByTotalSupply: number;
  maxSupply: number;
  lastUpdated: string;
  dateAdded: string;
  tags: string[];
}

export interface CategoryData {
  [k: string]: {
    coins: Coin[];
    platform: Platform;
    quote: {
      [k: string]: {
        price: number;
        volume24h: number;
        volume24hReported: number;
        volume7d: number;
        volume7dReported: number;
        volume30d: number;
        volume30dReported: number;
        marketCap: number;
        percentChange1h: number;
        percentChange24h: number;
        percentChange7d: number;
        lastUpdated: string;
      };
    };
  } & CategoriesData;
}

export interface CategoryResponse extends ApiResponse<CategoryData> {}
