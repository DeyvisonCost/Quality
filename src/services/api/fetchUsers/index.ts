import { AxiosError } from 'axios';

import { RequestError } from '../RequestError';
import { api } from '..';
import { User } from './types';

export const fetchUsers = async () => {
  try {
    const { data } = await api.get<User>('/users');
    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
