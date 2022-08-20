import ApiResponse from "./ApiResponse";

export interface ToolsClient {
  priceConversion: (
    query?: PriceConversionQueryParams
  ) => Promise<PriceConversionResponse>;
}

export interface PriceConversionQueryParams {
  amount: number;
  id?: number;
  symbol?: string;
  time?: string;
  convert?: string;
  convertId?: string;
}

export interface PriceConversion {
  id: number;
  name: string;
  symbol: string;
  amount: number;
  lastUpdated: string;
  quote: {
    [k: string]: {
      price: number;
      lastUpdated: string;
    };
  };
}

export interface PriceConversionResponse extends ApiResponse<PriceConversion> {}
