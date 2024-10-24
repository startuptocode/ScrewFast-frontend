import {
  AllowedHostsValidator,
  type AccessTokenProvider,
} from "@microsoft/kiota-abstractions";

export class ClerkAccessTokenProvider implements AccessTokenProvider {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  async getAuthorizationToken(): Promise<string> {
    return Promise.resolve(this.token);
  }
  getAllowedHostsValidator(): AllowedHostsValidator {
    const hosts = new Set(["example.com", "https://localhost:7143/"]);
    return new AllowedHostsValidator(hosts);
  }
}
