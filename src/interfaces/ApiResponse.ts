export default interface ApiResponse<T> {
  status: {
    timestamp: string;
    error_code: number;
    error_message: string;
    elapsed: number;
    credit_count: number;
  };
  data: T;
}
