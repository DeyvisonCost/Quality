import { getAccessToken } from "@/commons/storage/accessToken";

export const checkUserAuthenticated = () => {
  const userToken = getAccessToken();
    return !!userToken;
}
