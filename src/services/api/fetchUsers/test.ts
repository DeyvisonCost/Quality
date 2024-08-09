import AxiosMock from 'axios-mock-adapter';
import StatusCode from 'http-status-codes';

import { api } from '..'; 
import { RequestError } from '../RequestError'; 
import { fetchUsers } from './index'; 
import { Person } from './types'; 

describe('Testing fetchUsers API', () => {
  it('Should return users data', async () => {
    const mockedAxios = new AxiosMock(api);

    const users: Person[] = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        website: 'example.com',
        address: { city: 'Somewhere' }
      }
    ];
    mockedAxios.onGet('/users').reply(StatusCode.OK, users);

    const response = await fetchUsers();

    expect(response).toMatchObject(users);

    mockedAxios.restore();
  });

  it('Should throw RequestError due to request failure', async () => {
    expect.assertions(2);

    const mockedAxios = new AxiosMock(api);

    const response = { statusCode: StatusCode.UNAUTHORIZED };
    mockedAxios.onGet('/users').reply(StatusCode.UNAUTHORIZED, response);

    try {
      await fetchUsers();
    } catch (e) {
      const error = e as RequestError;

      expect(error.data).toMatchObject(response);
      expect(error.status).toStrictEqual(StatusCode.UNAUTHORIZED);
    } finally {
      mockedAxios.restore();
    }
  });
});
