import ApiResponse from "./ApiResponse";

export interface CryptoClient {
  idMap: (query?: IdMapQueryParams) => Promise<IdMapResponse>;
  latestQuotes: (
    query?: LatestQuotesQueryParams
  ) => Promise<LatestQuotesResponse>;
  categories: (query?: CategoriesQueryParams) => Promise<CategoriesResponse>;
  category: (query?: CategoryQueryParams) => Promise<CategoryResponse>;
  info: (query?: InfoQueryParams) => Promise<InfoResponse>;
  latestListings: (
    query?: LatestListingsQueryParams
  ) => Promise<LatestListingsResponse>;
}

export interface QuoteData {
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
  rank: number;
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
  id?: string;
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
      [k: string]: QuoteData;
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
  convertId?: string;
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

export interface CategoryData extends CategoriesData {
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
}

export interface CategoryResponse extends ApiResponse<CategoryData> {}

export interface InfoQueryParams {
  id?: string;
  slug?: string;
  symbol?: string;
  address?: string;
  aux?: string;
}

export interface Url {
  website: string[];
  technicalDoc: string[];
  explorer: string[];
  sourceCode: string[];
  messageBoard: string[];
  chat: string[];
  announcement: string[];
  reddit: string[];
  twitter: string[];
}

export class Metadata {
  id: number;
  name: string;
  symbol: string;
  category: string;
  slug: string;
  logo: string;
  description: string;
  dateAdded: string;
  dateLaunched: string;
  notice: string;
  tags: string[];
  platform: Platform;
  selfReportedCirculatingSupply: number;
  selfReportedMarketCap: number;
  selfReportedTags: string[];
  urls: Url;
}

export interface InfoResponse extends ApiResponse<{ [k: string]: Metadata }> {}

export interface LatestListingsQueryParams {
  start?: number;
  limit?: number;
  priceMin?: number;
  priceMax?: number;
  marketCapMin?: number;
  marketCapMax?: number;
  volume24hMin?: number;
  volume24hMax?: number;
  circulatingSupplyMin?: number;
  circulatingSupplyMax?: number;
  percentChange24hMin?: number;
  percentChange24hMax?: number;
  convert?: string;
  convertId?: string;
  sort?: string;
  sortDir?: "asc" | "desc";
  cryptocurrencyType?: "all" | "coins" | "tokens";
  tag?: "all" | "defi" | "filesharing";
  aux?: string;
}

export interface LatestListingsData {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmcRank: string;
  numMarketPairs: number;
  circulatingSupply: number;
  totalSupply: number;
  marketCapByTotalSupply: number;
  maxSupply: number;
  lastUpdated: string;
  dateAdded: string;
  tags: string[];
  selfReportedCirculatingSupply: number;
  selfReportedMarketCap: number;
  tvlRatio: number;
  platform: Platform;
  quote: QuoteData & { tvl: number };
}

export interface LatestListingsResponse
  extends ApiResponse<LatestListingsData[]> {}
