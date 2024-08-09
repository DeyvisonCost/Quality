import { AxiosError } from 'axios';
import { ReqError } from '../types';

export const parseError = (error: Error | AxiosError): ReqError => {
  if (error instanceof AxiosError) {
    const { response } = error;
    return {
      data: response?.data,
      status: response?.status ?? 0, 
    };
  }

  return {
    data: null,
    status: 0, 
  };
};
