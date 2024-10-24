import type { ServerSocialNetworkContractsHubsHubItem } from "@/lib/core-api/models";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { HUB_KEYS } from "./HUB_KEYS.";
import { useAuth } from "@clerk/clerk-react";
import { ApiBuilder } from "@/react/utils/apiBuilder";
import { getTenant } from "@/react/utils/tenantBuilder";

export const useHubs = () => {
  const { getToken } = useAuth();

  return useQuery({
    queryKey: HUB_KEYS.all,
    queryFn: async () => {
      const token = await getToken();
      if (!token) throw new Error("No authentication token available");

      return ApiBuilder.create<ServerSocialNetworkContractsHubsHubItem[]>()
        .withToken(token)
        .withApiCall((client) =>
          client.hub.all.get({
            queryParameters: { tenantId: getTenant(token) },
          }),
        )
        .execute();
    },
  });
};
