import { API_URL } from '@/commons/config';
import { removeAccessToken, getAccessToken } from '@/commons/storage/accessToken';
import { APP_ROUTES } from '@/constants/app-routes';
import axios, { AxiosError, HttpStatusCode } from 'axios';

export const api = axios.create({ baseURL: API_URL });

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === HttpStatusCode.Unauthorized) {
      removeAccessToken();
      location.href = APP_ROUTES.public.signin;
    }
    return Promise.reject(error);
  }
);

export const setAuthorizationToken = () => {
  const token = getAccessToken();
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};
