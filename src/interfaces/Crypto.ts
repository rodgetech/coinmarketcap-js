export interface CryptoClient {
  idMap: (
    listing_status: string,
    start: number,
    limit: number,
    sort: "id" | "cmc_rank",
    symbol: string,
    aux: string
  ) => Promise<any>;
}
