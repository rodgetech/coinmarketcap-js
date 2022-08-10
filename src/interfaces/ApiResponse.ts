export default interface ApiResponse<T> {
  status: {
    timestamp: string;
    errorCode: number;
    errorMessage: string;
    elapsed: number;
    creditCount: number;
  };
  data: T;
}
