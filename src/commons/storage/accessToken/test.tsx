import { getAccessToken, removeAccessToken, setAccessToken } from './index';

const ACCESS_TOKEN_KEY = 'accessToken';

describe('Testing token storage functions', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('Test setAccessToken and getAccessToken ', () => {
    setAccessToken(ACCESS_TOKEN_KEY);

    const retrievedToken = getAccessToken();
    expect(retrievedToken).toEqual(ACCESS_TOKEN_KEY);
  });
});

describe('Testing getAccessToken', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('should return access token from storage', () => {
    setAccessToken(ACCESS_TOKEN_KEY);

    const retrievedToken = getAccessToken();
    expect(retrievedToken).toEqual(ACCESS_TOKEN_KEY);
  });
});

describe('removeAccessToken', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('should be remove access token in storage', () => {
    setAccessToken(ACCESS_TOKEN_KEY);

    const accessTokenBeforeRemove = getAccessToken();
    expect(accessTokenBeforeRemove).toEqual(ACCESS_TOKEN_KEY);

    removeAccessToken();

    const retrievedToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    expect(retrievedToken).toBeNull();
  });
});
