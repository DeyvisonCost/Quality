export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
  };
}

export enum PaginationConfig {
  ITEMS_PER_PAGE = 5
}