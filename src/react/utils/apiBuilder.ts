import { type ApiClient, createApiClient } from "@/lib/core-api/apiClient";
import { BaseBearerTokenAuthenticationProvider } from "@microsoft/kiota-abstractions";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { ClerkAccessTokenProvider } from "./ClerkAccessTokenProvider";

export class ApiBuilder<T> {
    private token?: string;
    private apiCall?: (client: ApiClient) => Promise<any>;
  
    public static create<TResponse>(): ApiBuilder<TResponse> {
      return new ApiBuilder<TResponse>();
    }
  
    public withToken(token: string): this {
      this.token = token;
      return this;
    }
  
    public withApiCall(fn: (client: ApiClient) => Promise<any>): this {
      this.apiCall = fn;
      return this;
    }
  
    public async execute(): Promise<T> {
      if (!this.token) {
        throw new Error("Token is required");
      }
  
      if (!this.apiCall) {
        throw new Error("API call is required");
      }
  
      const accessTokenProvider = new ClerkAccessTokenProvider(this.token);
      const bearerProvider = new BaseBearerTokenAuthenticationProvider(accessTokenProvider);
      const adapter = new FetchRequestAdapter(bearerProvider);
      
      adapter.baseUrl = import.meta.env.BACKEND_URL!;
      
      const client = createApiClient(adapter);
      const response = await this.apiCall(client);
  
      if (!response?.isSuccess) {
        throw new Error("API call failed");
      }
  
      return response.data?.items || response.data;
    }
  }