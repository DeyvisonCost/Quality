import { Storage } from './types';

export const getAccessToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(Storage.ACCESS_TOKEN);
  }
  return null;
};

export const setAccessToken = (token: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.setItem(Storage.ACCESS_TOKEN, token);
  }
};

export const removeAccessToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(Storage.ACCESS_TOKEN);
  }
};
