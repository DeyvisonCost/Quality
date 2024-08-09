import { Storage } from "./types";

export const getUserEmail = () => {
  return localStorage.getItem(Storage.USER_EMAIL);
};

export const setUserEmail = (email: string) => {
  return localStorage.setItem(Storage.USER_EMAIL, email);
};

export const getUserPassword = () => {
  return localStorage.getItem(Storage.USER_PASSWORD);
};

export const setUserPassword = (password: string) => {
  return localStorage.setItem(Storage.USER_PASSWORD, password);
};