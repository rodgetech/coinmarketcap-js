import ApiResponse from "./ApiResponse";

export interface GlobalClient {
  latestQuotes: (
    query?: GlobalLatestQuotesQueryParams
  ) => Promise<GlobalLatestQuotesResponse>;
}

export interface GlobalLatestQuotesQueryParams {
  convert?: string;
  convertId?: string;
}

export interface GlobalLatestQuotes {
  activeCryptocurrencies: number;
  totalCryptocurrencies: number;
  activeMarketPairs: number;
  activeExchanges: number;
  totalExchanges: number;
  ethDominance: number;
  btcDominance: number;
  ethDominanceYesterday: number;
  btcDominanceYesterday: number;
  ethDominance24hPercentageChange: number;
  btcDominance24hPercentageChange: number;
  defiVolume24h: number;
  defiVolume24hReported: number;
  defiMarketCap: number;
  defi24hPercentageChange: number;
  stablecoinVolume24h: number;
  stablecoinVolume24hReported: number;
  stablecoinMarketCap: number;
  stablecoin24hPercentageChange: number;
  derivativesVolume24h: number;
  derivativesVolume24hReported: number;
  derivatives24hPercentageChange: number;
  lastUpdated: string;
  quote: {
    [k: string]: {
      totalMarketCap: number;
      totalVolume24h: number;
      totalVolume24hReported: number;
      altcoinVolume24h: number;
      altcoinVolume24hReported: number;
      altcoinMarketCap: number;
      defiVolume24h: number;
      defiVolume24hReported: number;
      defi24hPercentageChange: number;
      defiMarketCap: number;
      stablecoinVolume24h: number;
      stablecoinVolume24hReported: number;
      stablecoin24hPercentageChange: number;
      stablecoinMarketCap: number;
      derivativesVolume24h: number;
      derivativesVolume24hReported: number;
      derivatives24hPercentageChange: number;
      lastUpdated: string;
      totalMarketCapYesterday: number;
      totalVolume24hYesterday: number;
      totalMarketCapYesterdayPercentageChange: number;
      totalVolume24hYesterdayPercentageChange: number;
    };
  };
}

export interface GlobalLatestQuotesResponse
  extends ApiResponse<GlobalLatestQuotes> {}
